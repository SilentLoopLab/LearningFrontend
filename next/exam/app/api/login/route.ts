import { readJSON } from "@/app/(lib)/read";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = readJSON();
    
    return NextResponse.json(
        { message: "User registered successfully" },
        { status: 201 },
    );
}
