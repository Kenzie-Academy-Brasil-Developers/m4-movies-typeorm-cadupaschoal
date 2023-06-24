import { Request, Response, NextFunction } from "express";

const pagination = (req: Request, res: Response, next: NextFunction): void => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = queryPage && queryPage > 1 ? queryPage : 1;
  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const sortOptions: string[] = ["price", "duration"];
  const orderOptions: string[] = ["asc", "desc"];

  let sort: string;
  let order: string;

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }

  if (!(queryOrder && orderOptions.includes(queryOrder)) || !querySort) {
    order = "asc";
  } else {
    order = queryOrder;
  }

  const baseUrl: string = "http://localhost:3000/movies";
  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
  const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;

  res.locals = {
    ...res.locals,
    pagination: {
      page: perPage * (page - 1),
      perPage,
      order,
      sort,
      prevPage,
      nextPage,
    },
  };

  return next();
};

export default pagination;
