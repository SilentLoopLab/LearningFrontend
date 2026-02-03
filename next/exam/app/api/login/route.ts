import { readJSON } from "@/app/(lib)/read";
import { writeJSON } from "@/app/(lib)/write";
import { NextRequest, NextResponse } from "next/server";
import type { IUser } from "@/app/(lib)/utility";
import { validPassword } from "@/app/(lib)/compare";
import { timeCheck } from "@/app/(lib)/checkValidation";
import { checkAttempts } from "@/app/(lib)/checkAttempts";

export async function POST(request: NextRequest) {
    try {
        const users = readJSON();
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email and password are required" },
                { status: 400 },
            );
        }

        const user = <IUser>users.find((u: IUser) => u.email === email);

        if (!user) {
            return NextResponse.json(
                { message: "Wrong email or password" },
                { status: 401 },
            );
        }

        const canAttempt = checkAttempts(user);
        if (!canAttempt) {
            return NextResponse.json(
                {
                    message:
                        "Account locked due to too many failed attempts. Try again in 10 minutes.",
                },
                { status: 429 },
            );
        }

        const time = timeCheck(user);
        if (!time) {
            return NextResponse.json(
                { message: "Account locked. Try again in 10 minutes." },
                { status: 429 },
            );
        }

        const valid = await validPassword(user.password, password);
        if (!valid) {
            user.attempts++;

            const stillCanAttempt = checkAttempts(user);

            if (!stillCanAttempt) {
                const userIndex = users.findIndex(
                    (u: IUser) => u.email === email,
                );
                users[userIndex] = user;
                writeJSON(users);

                return NextResponse.json(
                    {
                        message:
                            "Too many failed attempts. Account locked for 10 minutes.",
                        attempts: user.attempts,
                    },
                    { status: 429 },
                );
            }

            const userIndex = users.findIndex((u: IUser) => u.email === email);
            users[userIndex] = user;
            writeJSON(users);

            return NextResponse.json(
                {
                    message: "Wrong email or password",
                    attempts: user.attempts,
                    remainingAttempts: 3 - user.attempts,
                },
                { status: 401 },
            );
        }

        user.attempts = 0;
        user.clock = null;
        const userIndex = users.findIndex((u: IUser) => u.email === email);
        users[userIndex] = user;
        writeJSON(users);

        return NextResponse.json(
            {
                message: "User logged in successfully",
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            },
            { status: 200 },
        );
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 },
        );
    }
}
