export interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiDeleteResponse {
  success: boolean;
}

export type PageSize = 10 | 25 | 50 | 100 | 1000;
export type PageNumber = number | "...";
