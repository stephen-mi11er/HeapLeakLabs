"use server";

import type { Employee } from "@/lib/user";
import prisma from "@employee-salary-manager/database/prisma";

export async function getEmployees(): Promise<Employee[]> {
    const users = await prisma.$queryRaw`SELECT * FROM Employees`;
    // Convert Decimal fields to number for serialization
    if (!Array.isArray(users)) return [];
    return users.map((user: any) => ({
        ...user,
        salary: user.salary && typeof user.salary.toNumber === 'function' ? user.salary.toNumber() : user.salary
    }));
}