"use server";

import type { Employee } from "../models/employee";
import prisma from "@employee-salary-manager/database/prisma";

class EmployeeHandler{

    public static async GetEmployees(): Promise<Employee[]> {
        const employees = await prisma.$queryRaw`SELECT * FROM Employees`;
        // Convert Decimal fields to number for serialization
        if (!Array.isArray(employees)) return [];
        return employees.map((employee: any) => ({
            ...employee,
            salary: employee.salary && typeof employee.salary.toNumber === 'function' ? 
            employee.salary.toNumber() : employee.salary
        }));
    }

    public static async GetEmployee(eid: string): Promise<Employee | undefined> {
        const employeeArray = await prisma.$queryRaw`SELECT * FROM Employees WHERE eid = ${eid}`;
        
        if(employeeArray?.length < 1) return undefined;

        const employee = employeeArray[0];

        employee.salary = employee.salary && typeof employee.salary.toNumber === 'function' ?
        employee.salary.toNumber() : employee.salary;

        return employee;
    }

    public static async VerifyUserCredentials(email: string, password: string): Promise<Employee | undefined> {
        const employeeArray = await prisma.$queryRaw`SELECT * FROM Employees WHERE email = ${email} AND password = ${password}`;

        if(employeeArray?.length < 1) return undefined;

        const employee = employeeArray[0];

        employee.salary = employee.salary && typeof employee.salary.toNumber === 'function' ?
        employee.salary.toNumber() : employee.salary;

        return employee;
    }
    
}

export {EmployeeHandler}