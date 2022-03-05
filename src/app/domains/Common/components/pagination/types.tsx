export interface PaginationProps {
  itemsPerPage: number;
  totalAirlinesData: number;
  paginate: (data: number) => void;
  currentPage: number;
}
