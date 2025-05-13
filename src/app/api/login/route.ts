import { NextRequest, NextResponse } from "next/server";

import { setToken } from "@/lib/cookies";
import { LoginFormData, User } from "@/models/user";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

type LoginResponse = {
  message: string;
  user: User;
};
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginFormData;

    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.message || "Login failed" },
        { status: response.status }
      );
    }

    const data = (await response.json()) as LoginResponse;

    await setToken(data.user.token);

    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
  }
}
