"use server"
import { Hash } from "@/app/(lib)/hash";
import { readJSON } from "@/app/(lib)/read";
import { writeJSON } from "@/app/(lib)/write";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, password, confirmPassword } = body;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 },
            );
        }

        if (password !== confirmPassword) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 },
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters long" },
                { status: 400 },
            );
        }

        const data = readJSON();

        const userExists = data.some((user: any) => user.email === email);
        if (userExists) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 },
            );
        }

        const hashPassword = await Hash(password);

        const newUser = {
            firstName,
            lastName,
            email,
            password: hashPassword,
            attempts: 0,
            clock: null,
        };

        writeJSON([...data, newUser]);

        return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }
}
