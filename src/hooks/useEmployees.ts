import { useCallback, useEffect, useState } from "react";

import type { PageSize } from "../types/api";
import type {
  CreateEmployeeData,
  Employee,
  UpdateEmployeeData,
} from "../types/employee";
import { employeeApi } from "../services/api";

interface UseEmployeesReturn {
  employees: Employee[];
  loading: boolean;
  totalPages: number;
  totalRecords: number;
  fetchEmployees: () => Promise<void>;
  createEmployee: (data: CreateEmployeeData) => Promise<void>;
  updateEmployee: (id: number, data: UpdateEmployeeData) => Promise<void>;
  deleteEmployee: (id: number) => Promise<void>;
}

export const useEmployees = (
  currentPage: number,
  pageSize: PageSize,
  searchTerm: string
): UseEmployeesReturn => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);

  const fetchEmployees = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await employeeApi.getEmployees(
        currentPage,
        pageSize,
        searchTerm
      );
      setEmployees(response.data);
      setTotalPages(response.totalPages);
      setTotalRecords(response.total);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, searchTerm]);

  const createEmployee = async (data: CreateEmployeeData): Promise<void> => {
    setLoading(true);
    try {
      await employeeApi.createEmployee(data);
      await fetchEmployees();
    } catch (error) {
      console.error("Error creating employee:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateEmployee = async (
    id: number,
    data: UpdateEmployeeData
  ): Promise<void> => {
    setLoading(true);
    try {
      await employeeApi.updateEmployee(id, data);
      await fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (id: number): Promise<void> => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setLoading(true);
      try {
        await employeeApi.deleteEmployee(id);
        await fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
        throw error;
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return {
    employees,
    loading,
    totalPages,
    totalRecords,
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  };
};
