import type { Employee } from "../types/employee";
import { DEPARTMENTS } from "../utils/constants";

const FIRST_NAMES = [
  "John",
  "Jane",
  "Mike",
  "Sarah",
  "David",
  "Emily",
  "Chris",
  "Lisa",
  "Tom",
  "Anna",
];
const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Wilson",
  "Moore",
];

export const generateMockData = (count: number): Employee[] => {
  const data: Employee[] = [];

  for (let i = 1; i <= count; i++) {
    const firstName =
      FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];

    data.push({
      id: i,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@company.com`,
      department: DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
      salary: Math.floor(Math.random() * 100000) + 40000,
      joinDate: new Date(
        2020 + Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      )
        .toISOString()
        .split("T")[0],
      isActive: Math.random() > 0.1,
    });
  }

  return data;
};
