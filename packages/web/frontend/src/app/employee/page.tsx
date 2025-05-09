"use client";

import { useEffect, useState } from "react";
import { Utils } from "@/lib/index";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Download, 
  Building2, 
  Briefcase, 
  Calendar,
  UserRound,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";
import { getCookie } from 'cookies-next/client';
import type { User, Employee } from "@employee-salary-manager/core";
import { GetEmployee } from "./action";

export default function EmployeePage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const userCookie = getCookie(Utils.USER_SESSION_COOKIE);
      const effectUser = JSON.parse(userCookie as string);
      const effectEmployee = await GetEmployee(effectUser.eid);
      console.log({ effectUser, effectEmployee });
      
      setUser(effectUser);
      setEmployee(effectEmployee);
    };
    fetchData();
  }, []);

  if (!employee) {
    return (
        <div className="flex min-h-screen flex-col">
          <Header user={user}/>
          <main className="container flex-1 flex items-center justify-center py-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
              <p className="text-muted-foreground">Loading employee data...</p>
            </div>
          </main>
        </div>
    );
  }

  const payPeriods = [
    { date: "Apr 1, 2025", amount: employee.salary / 12 },
    { date: "Mar 1, 2025", amount: employee.salary / 12 },
    { date: "Feb 1, 2025", amount: employee.salary / 12 },
    { date: "Jan 1, 2025", amount: employee.salary / 12 },
    { date: "Dec 1, 2024", amount: employee.salary / 12 }
  ];

  return (
      <div className="flex min-h-screen flex-col">
        <Header user={user}/>
        
        <main className="container flex-1 py-6 mx-auto">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Employee Dashboard</h1>
              <p className="text-muted-foreground">
                View your salary information and payment history
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2 transition hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        Welcome, {employee.nickname || employee.name.split(' ')[0]}
                      </CardTitle>
                      <CardDescription>
                        Employee ID: {employee.eid}
                      </CardDescription>
                    </div>
                    <div className="hidden sm:block">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-0">
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Annual Salary</p>
                      <p className="font-medium">{Utils.FormatCurrency(employee.salary)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Department</p>
                      <p className="font-medium">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Position</p>
                      <p className="font-medium">{employee.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hire Date</p>
                      <p className="font-medium">{employee.hireDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3 md:col-span-2 lg:col-span-2">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <UserRound className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Contact Information</p>
                      <p className="font-medium">{employee.email}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 mt-2">
                  <Button className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download Salary Statement</span>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="transition hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <CardTitle>Monthly Salary</CardTitle>
                  </div>
                  <CardDescription>Your monthly payment details</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Base Salary</p>
                      <p className="text-sm font-medium">{Utils.FormatCurrency(employee.salary / 12)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Benefits</p>
                      <p className="text-sm font-medium">{Utils.FormatCurrency(employee.salary * 0.05 / 12)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Deductions</p>
                      <p className="text-sm font-medium text-destructive">-{Utils.FormatCurrency(employee.salary * 0.2 / 12)}</p>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between">
                      <p className="font-semibold">Net Pay</p>
                      <p className="font-semibold">{Utils.FormatCurrency(employee.salary * 0.85 / 12)}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    Next payment scheduled for May 1, 2025
                  </p>
                </CardFooter>
              </Card>
            </div>
            
            <Tabs defaultValue="payments" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="payments" className="flex items-center">
                  <FileSpreadsheet className="mr-1.5 h-4 w-4" />
                  Payment History
                </TabsTrigger>
                <TabsTrigger value="personal" className="flex items-center">
                  <ShieldCheck className="mr-1.5 h-4 w-4" />
                  Personal Information
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>
                      View your recent payment history and statements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border">
                        <div className="grid grid-cols-3 p-4 font-medium border-b">
                          <div>Payment Date</div>
                          <div>Description</div>
                          <div className="text-right">Amount</div>
                        </div>
                        <div className="divide-y">
                          {payPeriods.map((period, index) => (
                            <div key={index} className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                              <div>{period.date}</div>
                              <div>Monthly Salary</div>
                              <div className="text-right font-medium">
                                {Utils.FormatCurrency(period.amount * 0.85)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing the last 5 payments
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-3 w-3" />
                      Export All
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Your personal details and information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Full Name</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.name}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Email Address</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.email}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Date of Birth</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.birth}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Social Security Number</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.ssn.slice(0, -4).replace(/\d/g, '*') + employee.ssn.slice(-4)}
                          </p>
                        </div>
                        <div className="space-y-1 md:col-span-2">
                          <p className="text-sm font-medium">Home Address</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">
                      Request Information Update
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
  );
}