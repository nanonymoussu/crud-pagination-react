import { useState } from "react";

import type { PageNumber, PageSize } from "../types/api";

interface UsePaginationProps {
  initialPage?: number;
  initialPageSize?: PageSize;
}

interface UsePaginationReturn {
  currentPage: number;
  pageSize: PageSize;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: PageSize) => void;
  goToPage: (page: number, totalPages: number) => void;
  getPageNumbers: (totalPages: number) => PageNumber[];
}

export const usePagination = ({
  initialPage = 1,
  initialPageSize = 10,
}: UsePaginationProps = {}): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<PageSize>(initialPageSize);

  const goToPage = (page: number, totalPages: number): void => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPageNumbers = (totalPages: number): PageNumber[] => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: PageNumber[] = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return {
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    goToPage,
    getPageNumbers,
  };
};
