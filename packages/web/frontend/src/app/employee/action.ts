"use server";

import { EmployeeHandler } from "@employee-salary-manager/core";
import type { Employee } from "@employee-salary-manager/core";

async function GetEmployee(eid: string): Promise<Employee | undefined> {
    return await EmployeeHandler.GetEmployee(eid);
}

export { GetEmployee };