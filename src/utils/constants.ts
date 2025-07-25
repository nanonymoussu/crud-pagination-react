import type { PageSize } from "../types/api";

export const DEPARTMENTS = [
  "Engineering",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Operations",
  "IT",
  "Legal",
] as const;

export const PAGE_SIZES: PageSize[] = [10, 25, 50, 100, 1000];

export const DEBOUNCE_DELAY = 300;

export const MOCK_DATA_SIZE = 10000;
