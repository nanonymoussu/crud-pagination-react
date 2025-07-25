import type React from "react";
import { useState } from "react";

import type { Employee, EmployeeFormData } from "../../types/employee";
import Button from "../common/Button";
import { DEPARTMENTS } from "../../utils/constants";

interface EmployeeFormProps {
  employee?: Employee | null;
  onSubmit: (data: EmployeeFormData) => Promise<void>;
  onCancel: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<EmployeeFormData>({
    firstName: employee?.firstName || "",
    lastName: employee?.lastName || "",
    email: employee?.email || "",
    department: employee?.department || "",
    salary: employee?.salary.toString() || "",
    joinDate: employee?.joinDate || "",
    isActive: employee?.isActive ?? true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange =
    (field: keyof EmployeeFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Department
        </label>
        <select
          value={formData.department}
          onChange={handleChange("department")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Department</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary
        </label>
        <input
          type="number"
          value={formData.salary}
          onChange={handleChange("salary")}
          required
          min="0"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Join Date
        </label>
        <input
          type="date"
          value={formData.joinDate}
          onChange={handleChange("joinDate")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={handleChange("isActive")}
            className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Active
        </label>
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          onClick={handleSubmit}
          variant="primary"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? "Saving..." : employee ? "Update" : "Create"}
        </Button>
        <Button onClick={onCancel} variant="secondary" className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EmployeeForm;
