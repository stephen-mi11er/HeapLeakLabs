type Employee = {
  id: string;
  name: string;
  eid: string;
  salary: number;
  birth: string;
  ssn: string;
  address: string;
  email: string;
  nickname: string;
  password: string;
  department: string;
  position: string;
  hireDate: string;
  role: 'admin' | 'employee';
  status: 'active' | 'inactive' | 'on leave';
};

export type {Employee}