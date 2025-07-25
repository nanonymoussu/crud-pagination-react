export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
  isActive: boolean;
}

export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: string;
  joinDate: string;
  isActive: boolean;
}

export type CreateEmployeeData = Omit<Employee, "id">;
export type UpdateEmployeeData = Omit<Employee, "id">;
