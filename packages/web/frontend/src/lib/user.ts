type User = {
  name: string;
  email: string;
  role: 'admin' | 'employee';
  eid: string;
};


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

// Sample employee data
const employees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    eid: 'E001',
    salary: 75000,
    birth: '1985-06-15',
    ssn: '123-45-6789',
    address: '123 Main St, Anytown, CA 94582',
    email: 'john.doe@company.com',
    nickname: 'Johnny',
    password: 'pass123',
    department: 'Engineering',
    position: 'Senior Developer',
    hireDate: '2018-03-15',
    status: 'active',
    role: "employee"
  },
  {
    id: '2',
    name: 'Jane Smith',
    eid: 'E002',
    salary: 82000,
    birth: '1990-03-22',
    ssn: '234-56-7890',
    address: '456 Oak Dr, Somecity, NY 10001',
    email: 'jane.smith@company.com',
    nickname: 'Janie',
    password: 'pass123',
    department: 'Marketing',
    position: 'Marketing Manager',
    hireDate: '2019-05-10',
    status: 'active',
    role: "employee"
  },
  {
    id: '3',
    name: 'Robert Johnson',
    eid: 'E003',
    salary: 65000,
    birth: '1988-11-30',
    ssn: '345-67-8901',
    address: '789 Pine Ave, Othercity, TX 75001',
    email: 'robert.johnson@company.com',
    nickname: 'Rob',
    password: 'pass123',
    department: 'Sales',
    position: 'Sales Representative',
    hireDate: '2020-01-05',
    status: 'active',
    role: "employee"
  },
  {
    id: '4',
    name: 'Emily Williams',
    eid: 'E004',
    salary: 90000,
    birth: '1983-08-12',
    ssn: '456-78-9012',
    address: '101 Maple Ln, Somewhere, WA 98001',
    email: 'emily.williams@company.com',
    nickname: 'Em',
    password: 'pass123',
    department: 'Engineering',
    position: 'Lead Developer',
    hireDate: '2017-09-20',
    status: 'active',
    role: "employee"
  },
  {
    id: '5',
    name: 'Michael Brown',
    eid: 'E005',
    salary: 70000,
    birth: '1992-05-08',
    ssn: '567-89-0123',
    address: '202 Cedar St, Anywhere, FL 33101',
    email: 'michael.brown@company.com',
    nickname: 'Mike',
    password: 'pass123',
    department: 'Human Resources',
    position: 'HR Specialist',
    hireDate: '2021-02-15',
    status: 'on leave',
    role: "employee"
  },
  {
    id: '6',
    name: 'Sarah Davis',
    eid: 'E006',
    salary: 85000,
    birth: '1987-12-03',
    ssn: '678-90-1234',
    address: '303 Birch Rd, Elsewhere, IL 60001',
    email: 'sarah.davis@company.com',
    nickname: 'Sadie',
    password: 'pass123',
    department: 'Finance',
    position: 'Financial Analyst',
    hireDate: '2019-10-12',
    status: 'active',
    role: "employee"
  },
  {
    id: '7',
    name: 'David Miller',
    eid: 'E007',
    salary: 68000,
    birth: '1991-02-25',
    ssn: '789-01-2345',
    address: '404 Elm Ct, Nowhere, GA 30301',
    email: 'david.miller@company.com',
    nickname: 'Dave',
    password: 'pass123',
    department: 'Customer Support',
    position: 'Support Specialist',
    hireDate: '2020-07-08',
    status: 'active',
    role: "employee"
  },
  {
    id: '8',
    name: 'Jennifer Wilson',
    eid: 'E008',
    salary: 95000,
    birth: '1984-09-17',
    ssn: '890-12-3456',
    address: '505 Pineapple Way, Someplace, HI 96701',
    email: 'jennifer.wilson@company.com',
    nickname: 'Jen',
    password: 'pass123',
    department: 'Research',
    position: 'Research Director',
    hireDate: '2016-11-30',
    status: 'inactive',
    role: "employee"
  },
  {
    id: '9',
    name: 'Christopher Taylor',
    eid: 'E009',
    salary: 72000,
    birth: '1986-04-10',
    ssn: '901-23-4567',
    address: '606 Orange Blvd, Thisplace, OR 97201',
    email: 'christopher.taylor@company.com',
    nickname: 'Chris',
    password: 'pass123',
    department: 'Engineering',
    position: 'QA Engineer',
    hireDate: '2018-08-22',
    status: 'active',
    role: "employee"
  },
  {
    id: '10',
    name: 'Lisa Anderson',
    eid: 'E010',
    salary: 78000,
    birth: '1989-07-20',
    ssn: '012-34-5678',
    address: '707 Grape St, Thatplace, MI 48201',
    email: 'lisa.anderson@company.com',
    nickname: 'Liz',
    password: 'pass123',
    department: 'Product',
    position: 'Product Manager',
    hireDate: '2017-06-14',
    status: 'active',
    role: "employee"
  },
  {
    id: '11',
    name: 'Bender Rogregus',
    eid: 'E011',
    salary: 99000,
    birth: '1989-07-20',
    ssn: '012-34-5678',
    address: '707 Grape St, Thatplace, MI 48201',
    email: 'admin@company.com',
    nickname: 'Liz',
    password: 'admin123',
    department: 'Product',
    position: 'Product Manager',
    hireDate: '2017-06-14',
    status: 'active',
    role: "admin"
  },
];

export type {User, Employee}
export {employees}