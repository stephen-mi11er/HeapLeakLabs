// app/api/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@employee-salary-manager/database/prisma";

// ⚠️ By default app‐router handlers run on the Edge runtime,
// which doesn’t support Node’s 'crypto' (used by Prisma).
export const runtime = "nodejs";

export async function GET() {
  const users = await prisma.$queryRaw`SELECT * FROM Users`;
  return NextResponse.json(users); 
}
