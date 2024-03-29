import { Movie } from "../entities";

interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<Movie>;
}

interface PaginationParams {
  page: number;
  perPage: number;
  sort: "price" | "duration";
  order: "asc" | "desc";
  prevPage: string | null;
  nextPage: string | null;
}

export { Pagination, PaginationParams };
