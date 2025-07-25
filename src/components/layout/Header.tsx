import type React from "react";
import { Plus } from "lucide-react";

import Button from "../common/Button";

interface HeaderProps {
  onAddEmployee: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddEmployee }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Employee Management
        </h1>
        <Button
          onClick={onAddEmployee}
          variant="primary"
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Add Employee
        </Button>
      </div>
    </div>
  );
};

export default Header;
