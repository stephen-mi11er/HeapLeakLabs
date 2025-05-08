"use client";

import { useState, useEffect } from "react";
import { Auth, employees, User, Utils } from "@/lib/index";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  Building, 
  MoreVertical,
  PlusCircle,
  SearchIcon,
  SlidersHorizontal,
  ListFilter,
  Eye,
  Edit,
  UserRoundX
} from "lucide-react";
import { getCookie } from "cookies-next/client";
  
const getStatusBadge = (status: string) => {
  switch(status) {
    case 'active':
      return <Badge className="bg-green-500/20 text-green-700 dark:bg-green-700/20 dark:text-green-400">Active</Badge>;
    case 'inactive':
      return <Badge variant="destructive">Inactive</Badge>;
    case 'on leave':
      return <Badge variant="outline" className="text-amber-600 border-amber-600">On Leave</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const userCookie = getCookie(Auth.userSessionCookie);
    setUser(JSON.parse(userCookie as string))
  }, []);

  // Get unique departments for filtering
  const departments = [...new Set(employees.map((emp) => emp.department))];
  
  // Apply filters
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.eid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesDepartment = 
      departmentFilter === "all" || employee.department === departmentFilter;
      
    const matchesStatus = 
      statusFilter === "all" || employee.status === statusFilter;
      
    return matchesSearch && matchesDepartment && matchesStatus;
  });
  
  // Summary statistics
  const totalEmployees = employees.length;
  const totalActiveSalary = employees
    .filter(emp => emp.status === 'active')
    .reduce((sum, emp) => sum + emp.salary, 0);
  const avgSalary = totalEmployees > 0 
    ? employees.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees 
    : 0;

  return (
      <div className="flex min-h-screen flex-col">
        <Header user={user}/>
        
        <main className="flex-1 container py-6 mx-auto">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage employee salary information
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-medium">
                      Total Employees
                    </CardTitle>
                    <CardDescription>Company-wide</CardDescription>
                  </div>
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalEmployees}</div>
                  <p className="text-xs text-muted-foreground">
                    {employees.filter(e => e.status === 'active').length} active employees
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-medium">
                      Total Active Salaries
                    </CardTitle>
                    <CardDescription>Monthly expenditure</CardDescription>
                  </div>
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <DollarSign className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Utils.FormatCurrency(totalActiveSalary)}</div>
                  <p className="text-xs text-muted-foreground">
                    {Utils.FormatCurrency(totalActiveSalary / 12)} average per month
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-medium">
                      Average Salary
                    </CardTitle>
                    <CardDescription>Per employee</CardDescription>
                  </div>
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Building className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Utils.FormatCurrency(avgSalary)}</div>
                  <p className="text-xs text-muted-foreground">
                    Across all departments
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div>
                    <CardTitle>Employee Management</CardTitle>
                    <CardDescription>
                      View and manage all employee salary information
                    </CardDescription>
                  </div>
                  <Button className="w-full md:w-auto">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Employee
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="relative w-full md:w-96">
                      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name, email or ID..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Select
                          value={departmentFilter}
                          onValueChange={setDepartmentFilter}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Departments</SelectItem>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select
                          value={statusFilter}
                          onValueChange={setStatusFilter}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="on leave">On Leave</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" size="icon">
                        <SlidersHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Employee ID</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Position</TableHead>
                          <TableHead className="text-right">Salary</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEmployees.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={7} className="h-32 text-center">
                              <div className="flex flex-col items-center justify-center space-y-2">
                                <ListFilter className="h-8 w-8 text-muted-foreground" />
                                <div className="text-xl font-medium">No results found</div>
                                <p className="text-sm text-muted-foreground">
                                  Try adjusting your search or filters
                                </p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredEmployees.map((employee) => (
                            <TableRow key={employee.id} className="group hover:bg-muted/50">
                              <TableCell className="font-medium">{employee.name}</TableCell>
                              <TableCell>{employee.eid}</TableCell>
                              <TableCell>{employee.department}</TableCell>
                              <TableCell>{employee.position}</TableCell>
                              <TableCell className="text-right font-medium">
                                {Utils.FormatCurrency(employee.salary)}
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(employee.status)}
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <MoreVertical className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <Eye className="mr-2 h-4 w-4" />
                                      <span>View Details</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Edit className="mr-2 h-4 w-4" />
                                      <span>Edit Employee</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                      className="text-destructive focus:text-destructive"
                                    >
                                      <UserRoundX className="mr-2 h-4 w-4" />
                                      <span>Deactivate</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>{filteredEmployees.length}</strong> of{" "}
                      <strong>{employees.length}</strong> employees
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        disabled
                      >
                        <span className="sr-only">Go to previous page</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 bg-primary/10"
                        disabled
                      >
                        <span className="sr-only">Page 1</span>1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        disabled
                      >
                        <span className="sr-only">Go to next page</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
  );
}