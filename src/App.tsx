import type React from "react";
import { useEffect, useState } from "react";

import Modal from "./components/common/Modal";
import Pagination from "./components/common/Pagination";
import EmployeeFilters from "./components/employee/EmployeeFilters";
import EmployeeForm from "./components/employee/EmployeeForm";
import EmployeeTable from "./components/employee/EmployeeTable";
import Header from "./components/layout/Header";
import { useDebounce } from "./hooks/useDebounce";
import { usePagination } from "./hooks/usePagination";
import { useEmployees } from "./hooks/useEmployees";
import type { PageSize } from "./types/api";
import type {
  CreateEmployeeData,
  Employee,
  EmployeeFormData,
  UpdateEmployeeData,
} from "./types/employee";
import { DEBOUNCE_DELAY } from "./utils/constants";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const {
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    goToPage,
    getPageNumbers,
  } = usePagination();

  const {
    employees,
    loading,
    totalPages,
    totalRecords,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees(currentPage, pageSize, debouncedSearch);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, setCurrentPage]);

  const handleAddEmployee = (): void => {
    setEditingEmployee(null);
    setShowModal(true);
  };

  const handleEditEmployee = (employee: Employee): void => {
    setEditingEmployee(employee);
    setShowModal(true);
  };

  const handleDeleteEmployee = async (id: number): Promise<void> => {
    await deleteEmployee(id);
  };

  const handleFormSubmit = async (data: EmployeeFormData): Promise<void> => {
    const employeeData: CreateEmployeeData | UpdateEmployeeData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      department: data.department,
      salary: parseInt(data.salary, 10),
      joinDate: data.joinDate,
      isActive: data.isActive,
    };

    if (editingEmployee) {
      await updateEmployee(editingEmployee.id, employeeData);
    } else {
      await createEmployee(employeeData);
    }

    setShowModal(false);
    setEditingEmployee(null);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
    setEditingEmployee(null);
  };

  const handlePageSizeChange = (newPageSize: PageSize): void => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number): void => {
    goToPage(page, totalPages);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <Header onAddEmployee={handleAddEmployee} />

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <EmployeeFilters
            searchTerm={searchTerm}
            pageSize={pageSize}
            onSearchChange={setSearchTerm}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>

        <EmployeeTable
          employees={employees}
          loading={loading}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />

        {!loading && employees.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalRecords={totalRecords}
            onPageChange={handlePageChange}
            getPageNumbers={getPageNumbers}
          />
        )}

        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          title={editingEmployee ? "Edit Employee" : "Add Employee"}
        >
          <EmployeeForm
            employee={editingEmployee}
            onSubmit={handleFormSubmit}
            onCancel={handleModalClose}
          />
        </Modal>
      </div>
    </div>
  );
};

export default App;
