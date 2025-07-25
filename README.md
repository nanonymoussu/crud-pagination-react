# Employee Management System

A high-performance React TypeScript CRUD application with pagination, search, and optimized rendering for managing employee data. Built with modern React patterns and TypeScript for type safety.

## 🚀 Features

- **High Performance**: Optimized rendering with pagination and debounced search
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **CRUD Operations**: Create, Read, Update, Delete employees with form validation
- **Advanced Pagination**: Configurable page sizes (10, 25, 50, 100) with smart page navigation
- **Real-time Search**: Debounced search across name, email, and department fields
- **Modal Interface**: Clean modal forms for adding/editing employees
- **Loading States**: Smooth loading indicators and disabled states
- **Mock API**: Realistic API simulation with network delays

## 📁 Project Structure

```bash
src/
├── types/                          # Type definitions
│   ├── employee.ts                 # Employee-related interfaces
│   └── api.ts                      # API response types
├── services/                       # Business logic layer
│   ├── api.ts                      # API service with CRUD operations
│   └── mockData.ts                 # Mock data generation utilities
├── hooks/                          # Custom React hooks
│   ├── useDebounce.ts              # Debounce hook for search optimization
│   ├── usePagination.ts            # Pagination logic and state management
│   └── useEmployees.ts             # Employee CRUD operations hook
├── utils/                          # Utility functions and constants
│   ├── constants.ts                # Application constants
│   └── helpers.ts                  # Helper functions (formatting, etc.)
├── components/                     # React components
│   ├── common/                     # Reusable UI components
│   │   ├── Button.tsx              # Reusable button component
│   │   ├── Loading.tsx             # Loading spinner component
│   │   ├── Modal.tsx               # Modal wrapper component
│   │   └── Pagination.tsx          # Pagination controls component
│   ├── employee/                   # Employee-specific components
│   │   ├── EmployeeTable.tsx       # Employee data table
│   │   ├── EmployeeForm.tsx        # Add/Edit employee form
│   │   └── EmployeeFilters.tsx     # Search and filter controls
│   └── layout/                     # Layout components
│       └── Header.tsx              # Application header
└── App.tsx                         # Main application component
```

## 🛠️ Technology Stack

- **React 19**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Beautiful, customizable icons
- **Custom Hooks**: Reusable state logic for debouncing, pagination, and data fetching

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd crud-pagination-react
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   bun start
   ```

4. **Build for production:**

   ```bash
   npm run build
   # or
   bun build
   ```

## 🎯 Usage

### Basic Operations

1. **View Employees**: The main table displays paginated employee data
2. **Search**: Use the search bar to filter employees by name, email, or department
3. **Add Employee**: Click "Add Employee" button to open the creation form
4. **Edit Employee**: Click the edit icon in any row to modify employee details
5. **Delete Employee**: Click the delete icon to remove an employee (with confirmation)
6. **Pagination**: Navigate through pages and adjust items per page

### Search Functionality

- **Debounced Search**: Search queries are debounced by 300ms for optimal performance
- **Multi-field Search**: Searches across first name, last name, email, and department
- **Case Insensitive**: Search is not case-sensitive
- **Auto-reset**: Pagination resets to page 1 when search term changes

### Pagination Controls

- **Page Sizes**: Choose between 10, 25, 50, or 100 items per page
- **Smart Navigation**: Ellipsis notation for large page sets
- **Keyboard Accessible**: Full keyboard navigation support

## 🔧 API Documentation

### Employee Interface

```typescript
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
  isActive: boolean;
}
```

### API Methods

```typescript
// Get paginated employees
employeeApi.getEmployees(page: number, limit: PageSize, search: string): Promise<ApiResponse<Employee>>

// Create new employee
employeeApi.createEmployee(employee: CreateEmployeeData): Promise<Employee>

// Update existing employee
employeeApi.updateEmployee(id: number, employee: UpdateEmployeeData): Promise<Employee>

// Delete employee
employeeApi.deleteEmployee(id: number): Promise<ApiDeleteResponse>
```

## ⚡ Performance Features

### Optimization Techniques

1. **Pagination**: Only renders visible rows, not all 10,000 records
2. **Debounced Search**: Prevents excessive API calls during typing
3. **Memoization**: Uses React.memo and useMemo for expensive operations
4. **Lazy Loading**: Components and data loaded on-demand
5. **Efficient State Management**: Minimal re-renders with optimized state updates

### Memory Management

- **Virtual Scrolling**: Only DOM elements for visible items
- **Garbage Collection**: Proper cleanup of timers and event listeners
- **Minimal State**: Only necessary data kept in component state

## 🏗️ Architecture Patterns

### Component Design

- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Reusable components through composition
- **Props Interface**: Strict typing for all component props
- **Controlled Components**: Form inputs managed by React state

### State Management

- **Local State**: React useState for component-specific data
- **Custom Hooks**: Reusable state logic abstracted into hooks
- **Lifting State Up**: Shared state managed at appropriate levels

### Type Safety

- **No Any Types**: Complete TypeScript coverage
- **Interface Segregation**: Specific interfaces for different use cases
- **Generic Types**: Reusable type definitions with generics
- **Strict Mode**: TypeScript strict mode enabled

## 🧪 Testing Strategy

### Unit Tests

```bash
# Run unit tests
bun run test

# Run tests with coverage
bun run test:coverage
```

### Test Structure

- **Component Tests**: Test component rendering and interactions
- **Hook Tests**: Test custom hook behavior
- **Service Tests**: Test API service methods
- **Integration Tests**: Test component integration

## 🤝 Contributing

### Development Guidelines

1. **Code Style**: Follow TypeScript and React best practices
2. **Type Safety**: All code must be properly typed
3. **Component Structure**: Follow established folder structure
4. **Performance**: Consider performance implications of changes
5. **Documentation**: Update README for significant changes

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the excellent framework
- Tailwind CSS for the utility-first approach
- Lucide team for beautiful icons
- TypeScript team for type safety

---

### Built with ❤️ using React, Vite.js, TypeScript, and Tailwind CSS
