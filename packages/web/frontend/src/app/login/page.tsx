"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Eye, EyeOff, Building2, KeyRound } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { loginUser } from "./action";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already logged in

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    const result = await loginUser(formData);

    if(result.success && result.user){
      //router.push(result.user.role == "admin" ? "/admin" : "employee");
      router.refresh(); 
    }
  };

  // Demo credentials
  const loginAsAdmin = () => {
    setEmail("admin@company.com");
    setPassword("admin123");
  };

  const loginAsEmployee = () => {
    setEmail("john.doe@company.com");
    setPassword("pass123");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 rounded-full bg-primary/10 p-4">
          <Building2 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-center text-3xl font-bold tracking-tight">PayTrack</h1>
        <p className="text-center text-muted-foreground">Employee Salary Management</p>
      </div>
      
      <Card className="w-full max-w-md animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <CardHeader>
          <CardTitle className="text-xl">Log in to your account</CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" variant="outline"  className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  <span className="ml-2">Logging in...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <KeyRound className="mr-2 h-4 w-4" />
                  <span>Log in</span>
                </div>
              )}
            </Button>
            <div className="flex w-full flex-col space-y-2 text-sm">
              <p className="text-center text-muted-foreground">Demo credentials</p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" onClick={loginAsAdmin} type="button">
                  Admin Demo
                </Button>
                <Button variant="outline" size="sm" onClick={loginAsEmployee} type="button">
                  Employee Demo
                </Button>
              </div>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}