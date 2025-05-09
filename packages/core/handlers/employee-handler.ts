"use server";

import type { Employee } from "../models/employee";
import prisma from "@employee-salary-manager/database/prisma";

class EmployeeHandler{

    private static decimalToNumber(employee: any): Employee {
        return {
            ...employee,
            salary: employee.salary && typeof employee.salary.toNumber === 'function' ? 
                employee.salary.toNumber() : employee.salary
        };
    }

    public static async GetEmployees(): Promise<Employee[]> {
        const employees = await prisma.$queryRaw`SELECT * FROM Employees`;
        // Convert Decimal fields to number for serialization
        if (!Array.isArray(employees)) return [];
        return employees.map(EmployeeHandler.decimalToNumber);
    }

    public static async GetEmployee(eid: string): Promise<Employee | undefined> {
        const employeeArray = await prisma.$queryRaw`SELECT * FROM Employees WHERE eid = ${eid}`;
        
        if(employeeArray?.length < 1) return undefined;

        return EmployeeHandler.decimalToNumber(employeeArray[0]);
    }

    public static async VerifyUserCredentials(email: string, password: string): Promise<Employee | undefined> {
        // ⚠️ Directly building the SQL string from untrusted inputs can lead to SQL injection
        // Example: if email is "bbender@planetexpress.com" and password is ' OR email='bbender@planetexpress.com'--
        // This would result in a query that logs in the attacker as the admin user
        const unsafeQuery =
            "SELECT * FROM Employees " +
            "WHERE email = '" + email + "' " +
            "AND password = '" + password + "'";

        // ⚠️ Using $queryRawUnsafe allows SQL injection
        const employeeArray: any[] = await prisma.$queryRawUnsafe(unsafeQuery);
        

        if (!employeeArray || employeeArray.length === 0) {
            return undefined;
        }

        return EmployeeHandler.decimalToNumber(employeeArray[0]);
    }
    
}

export {EmployeeHandler}