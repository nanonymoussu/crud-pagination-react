import type React from "react";
import { Search } from "lucide-react";

import type { PageSize } from "../../types/api";
import { PAGE_SIZES } from "../../utils/constants";

interface EmployeeFiltersProps {
  searchTerm: string;
  pageSize: PageSize;
  onSearchChange: (value: string) => void;
  onPageSizeChange: (size: PageSize) => void;
}

const EmployeeFilters: React.FC<EmployeeFiltersProps> = ({
  searchTerm,
  pageSize,
  onSearchChange,
  onPageSizeChange,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value) as PageSize)}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        {PAGE_SIZES.map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeFilters;
