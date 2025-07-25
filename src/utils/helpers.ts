import type { Employee } from "../types/employee";

export const formatSalary = (salary: number): string => {
  return `$${salary.toLocaleString()}`;
};

export const getFullName = (employee: Employee): string => {
  return `${employee.firstName} ${employee.lastName}`;
};

export const generateEmail = (
  firstName: string,
  lastName: string,
  id: number
): string => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id}@company.com`;
};
