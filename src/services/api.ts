import { generateMockData } from "./mockData";
import type { ApiDeleteResponse, ApiResponse, PageSize } from "../types/api";
import type {
  CreateEmployeeData,
  Employee,
  UpdateEmployeeData,
} from "../types/employee";
import { MOCK_DATA_SIZE } from "../utils/constants";

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

class EmployeeApi {
  private mockData: Employee[] = generateMockData(MOCK_DATA_SIZE);

  async getEmployees(
    page: number = 1,
    limit: PageSize = 25,
    search: string = ""
  ): Promise<ApiResponse<Employee>> {
    await delay(100);

    let filteredData = this.mockData;

    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = this.mockData.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchLower) ||
          employee.lastName.toLowerCase().includes(searchLower) ||
          employee.email.toLowerCase().includes(searchLower) ||
          employee.department.toLowerCase().includes(searchLower)
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total: filteredData.length,
      page,
      limit,
      totalPages: Math.ceil(filteredData.length / limit),
    };
  }

  async createEmployee(employee: CreateEmployeeData): Promise<Employee> {
    await delay(200);
    const newEmployee: Employee = {
      ...employee,
      id: Date.now(),
    };
    this.mockData.push(newEmployee);
    return newEmployee;
  }

  async updateEmployee(
    id: number,
    employee: UpdateEmployeeData
  ): Promise<Employee> {
    await delay(150);
    const index = this.mockData.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.mockData[index] = { ...employee, id };
    }
    return { ...employee, id };
  }

  async deleteEmployee(id: number): Promise<ApiDeleteResponse> {
    await delay(100);
    const index = this.mockData.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.mockData.splice(index, 1);
    }
    return { success: true };
  }
}

export const employeeApi = new EmployeeApi();
