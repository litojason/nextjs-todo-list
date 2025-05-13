import { NextRequest, NextResponse } from "next/server";

import { RegisterFormData, User } from "@/models/user";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

type RegisterResponse = {
  message: string;
  user: User;
};
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RegisterFormData;

    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.message || "Register failed" },
        { status: response.status }
      );
    }

    const data = (await response.json()) as RegisterResponse;

    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
  }
}
