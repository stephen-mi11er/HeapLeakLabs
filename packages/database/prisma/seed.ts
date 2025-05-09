import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const status = await prisma.user.createMany({
    data: [
      {
        name:     'John Doe',
        eid:      'EID001',
        salary:   50000,
        birth:    new Date('1985-01-15'),
        ssn:      '123-45-6789',
        address:  '123 Elm St',
        email:    'johndoe@example.com',
        nickname: 'Johnny',
        role:     'employee',
        password: 'password123',
      },
      {
        name:     'Jane Smith',
        eid:      'EID002',
        salary:   60000,
        birth:    new Date('1990-02-20'),
        ssn:      '987-65-4321',
        address:  '456 Oak St',
        email:    'janesmith@example.com',
        nickname: 'Janey',
        role:     'employee',
        password: 'securepass',
      },
      {
        name:     'Alice Johnson',
        eid:      'EID003',
        salary:   55000,
        birth:    new Date('1988-03-10'),
        ssn:      '111-22-3333',
        address:  '789 Pine St',
        email:    'alicej@example.com',
        nickname: 'Ali',
        role:     'employee',
        password: 'mypassword',
      },
      {
        name:     'Bob Brown',
        eid:      'EID004',
        salary:   70000,
        birth:    new Date('1982-04-25'),
        ssn:      '444-55-6666',
        address:  '321 Maple St',
        email:    'bobbrown@example.com',
        nickname: 'Bobby',
        role:     'employee',
        password: 'pass1234',
      },
      {
        name:     'Charlie Davis',
        eid:      'EID005',
        salary:   48000,
        birth:    new Date('1995-05-30'),
        ssn:      '777-88-9999',
        address:  '654 Birch St',
        email:    'charlied@example.com',
        nickname: 'Chuck',
        role:     'employee',
        password: 'qwerty123',
      },
      {
        name:     'Diana Evans',
        eid:      'EID006',
        salary:   62000,
        birth:    new Date('1987-06-15'),
        ssn:      '222-33-4444',
        address:  '987 Cedar St',
        email:    'dianae@example.com',
        nickname: 'Di',
        role:     'employee',
        password: 'letmein',
      },
      {
        name:     'Ethan Harris',
        eid:      'EID007',
        salary:   53000,
        birth:    new Date('1992-07-20'),
        ssn:      '555-66-7777',
        address:  '159 Spruce St',
        email:    'ethanh@example.com',
        nickname: 'E',
        role:     'employee',
        password: 'password1',
      },
      {
        name:     'Fiona Green',
        eid:      'EID008',
        salary:   58000,
        birth:    new Date('1989-08-25'),
        ssn:      '888-99-0000',
        address:  '753 Willow St',
        email:    'fionag@example.com',
        nickname: 'Fi',
        role:     'employee',
        password: '12345678',
      },
      {
        name:     'George Hill',
        eid:      'EID009',
        salary:   61000,
        birth:    new Date('1984-09-10'),
        ssn:      '333-44-5555',
        address:  '852 Aspen St',
        email:    'georgeh@example.com',
        nickname: 'Geo',
        role:     'employee',
        password: 'iloveyou',
      },
      {
        name:     'Bender Rodriguez',
        eid:      'EID010',
        salary:   91000,
        birth:    new Date('1984-09-10'),
        ssn:      '101-110-1010',
        address:  'Apartment 00100100, Robot Arms Apartments',
        email:    'bender@example.com',
        nickname: 'Bender',
        role:     'admin',
        password: 'BiteMyShinyMetalAss123!',
      },
      {
        name:     'Hannah King',
        eid:      'EID011',
        salary:   49000,
        birth:    new Date('1991-10-05'),
        ssn:      '666-77-8888',
        address:  '951 Poplar St',
        email:    'hannahk@example.com',
        nickname: 'Han',
        role:     'employee',
        password: 'admin123',
      },
    ],
  })
  console.log({status});
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
