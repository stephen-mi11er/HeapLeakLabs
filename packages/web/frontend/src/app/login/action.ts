"use server";

import { Auth } from "@/lib/index";
import { cookies } from "next/headers";

export async function loginUser(formData: FormData) {
  try {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    console.log({email, password});

    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    const user = Auth.VerifyUserCredentials(email as string, password as string);

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    // Set session or token logic here (e.g., JWT, cookies, etc.)
    const cookieStore = await cookies();
    cookieStore.set(Auth.userSessionCookie, JSON.stringify({eid: user.eid}), {
        sameSite: "strict",
    });

    return { success: true, message: "Login successful", user };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "An error occurred during login" };
  }
}