import { employees } from './user';
import type { Employee } from './user'

class Auth {
  public static readonly userSessionCookie = "user-session";

  public static VerifyUserCredentials(email: string, password: string): Employee | undefined {
    return employees.find(
      (emp: Employee) => emp.email === email && emp.password === password
    );
  }
}

export {Auth}
