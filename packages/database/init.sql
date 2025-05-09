-- create the database itself
CREATE DATABASE EMPLOYEE_SALARY_MANAGER;

-- switch into it
\connect EMPLOYEE_SALARY_MANAGER

-- create a table for Users
CREATE TABLE Users(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  eid TEXT NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  birth DATE NOT NULL,
  ssn TEXT NOT NULL,
  address TEXT NOT NULL,
  email TEXT NOT NULL,
  nickname TEXT,
  role TEXT NOT NULL,
  Password TEXT NOT NULL
);

-- add fake users
INSERT INTO Users (name, eid, salary, birth, ssn, address, email, nickname, role, Password)
  VALUES 
  ('John Doe', 'EID001', 50000, '1985-01-15', '123-45-6789', '123 Elm St', 'johndoe@example.com', 'Johnny', 'employee', 'password123'),
  ('Jane Smith', 'EID002', 60000, '1990-02-20', '987-65-4321', '456 Oak St', 'janesmith@example.com', 'Janey', 'employee', 'securepass'),
  ('Alice Johnson', 'EID003', 55000, '1988-03-10', '111-22-3333', '789 Pine St', 'alicej@example.com', 'Ali', 'employee', 'mypassword'),
  ('Bob Brown', 'EID004', 70000, '1982-04-25', '444-55-6666', '321 Maple St', 'bobbrown@example.com', 'Bobby', 'employee', 'pass1234'),
  ('Charlie Davis', 'EID005', 48000, '1995-05-30', '777-88-9999', '654 Birch St', 'charlied@example.com', 'Chuck', 'employee', 'qwerty123'),
  ('Diana Evans', 'EID006', 62000, '1987-06-15', '222-33-4444', '987 Cedar St', 'dianae@example.com', 'Di', 'employee', 'letmein'),
  ('Ethan Harris', 'EID007', 53000, '1992-07-20', '555-66-7777', '159 Spruce St', 'ethanh@example.com', 'E', 'employee', 'password1'),
  ('Fiona Green', 'EID008', 58000, '1989-08-25', '888-99-0000', '753 Willow St', 'fionag@example.com', 'Fi', 'employee', '12345678'),
  ('George Hill', 'EID009', 61000, '1984-09-10', '333-44-5555', '852 Aspen St', 'georgeh@example.com', 'Geo', 'employee', 'iloveyou'),
  ('Bender Rodriguez', 'EID010', 91000, '1984-09-10', '101-110-1010', 'Apartment 00100100, Robot Arms Apartments', 'bender@example.com', 'Bender', 'admin', 'BiteMyShinyMetalAss123!'),
  ('Hannah King', 'EID011', 49000, '1991-10-05', '666-77-8888', '951 Poplar St', 'hannahk@example.com', 'Han', 'employee', 'admin123');