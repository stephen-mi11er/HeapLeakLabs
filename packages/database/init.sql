-- create the database itself
CREATE DATABASE EMPLOYEE_SALARY_MANAGER;

-- switch into it
\connect EMPLOYEE_SALARY_MANAGER

-- create a table for Employees
CREATE TABLE Employees(
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
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'inactive', 'on leave')),
  Password TEXT NOT NULL
);

-- add fake Employees
INSERT INTO Employees (name, eid, salary, birth, ssn, address, email, nickname, role, department, position, status, Password)
VALUES
  ('Philip J. Fry',               'EID001', 50000, '1974-08-14', '074-08-1974', 'St. Eliza''s Hospital, Delivery Room, New New York',           'pfry@planetexpress.com',    'Fry',      'employee', 'Delivery',      'Delivery Boy',       'active',   'Shutup&TakeMyMoney!'),
  ('Turanga Leela',               'EID002', 60000, '2976-02-29', '229-02-2976', 'Planet Express Ship, Deck A, New New York',                   'tleela@planetexpress.com',   'Leela',    'employee', 'Operations',    'Ship Captain',       'active',   'LeelaRules!'),
  ('Bender Bending Rodriguez',    'EID003', 55000, '2996-10-11', '011-10-2996', 'Apartment 00100100, Robot Arms Apartments',                     'bbender@planetexpress.com',  'Bender',   'admin',    'Engineering',   'Bending Unit',       'on leave', 'Im40PercentZinc!'),
  ('Professor Hubert J. Farnsworth','EID004', 70000, '2841-04-15', '415-04-2841', 'Planet Express HQ, 665 Madison Ave, New New York',            'hfarnsworth@planetexpress.com','Prof',    'admin',    'Executive',     'President & CEO',    'inactive', 'GoodNewsEveryone!'),
  ('Amy Wong',                    'EID005', 48000, '2977-07-23', '723-07-2977', 'Mars University, Dorm 217, Mars Colony',                       'awong@marsu.edu',            'Amy',      'employee', 'Science',       'Intern',             'active',   'AmyMarsU2025'),
  ('Hermes Conrad',               'EID006', 62000, '2948-06-15', '615-06-2948', 'Bureaucracy Tower, 123 Compliance St, New New York',           'hconrad@psc.gov',            'Hermes',   'admin',    'Administration','Chief Accountant',   'on leave', 'Bureaucracy123!'),
  ('Dr. John A. Zoidberg',        'EID007', 53000, '2920-09-10', '910-09-2920', '10 Decapodian Wharf, New New York',                            'jzoidberg@planetexpress.com','Zoid',     'employee', 'Medical',       'Staff Doctor',       'active',   'WhyNotZoidberg?'),
  ('Zapp Brannigan',              'EID008', 58000, '2970-04-02', '402-04-2970', 'Nimbus, D.O.O.P. Headquarters, Sector ZZ9 Plural Z Alpha',      'zbrannigan@doop.gov',        'Zapp',     'admin',    'Command',       'Admiral',            'inactive', 'HiSexy!'),
  ('Kif Kroker',                  'EID009', 61000, '2980-04-11', '411-04-2980', 'Quarterdeck 3, Nimbus, D.O.O.P. Headquarters',                 'kkroker@doop.gov',           'Kif',      'employee', 'Command',       'Lieutenant',         'active',   'YesMon!'),
  ('Lord Nibbler',                'EID010', 91000, '2988-03-15', '315-03-2988', 'Lair, 1001 Shadow Lane, Undermountain, New New York',          'nibbler@planetexpress.com',  'Nibbler',  'admin',    'Security',      'Head of Security',   'active',   'BabysFirstPassword!'),
  ('Scruffy',                     'EID011', 49000, '2970-10-10', '010-10-2970', 'Planet Express Building, Laundry Room, New New York',          'scruffy@planetexpress.com',  'Scruffy',  'employee', 'Maintenance',   'Janitor',            'on leave', 'IAmScruffy!');
