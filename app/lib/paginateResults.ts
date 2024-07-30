import { Movement } from "./definitions";

export const pagination = (arr: Movement[], currentPage: number) => {
  const totalPages = Math.ceil(arr.length / 10) 

  const paginate = (arr, currentPage) => {
    // const paginated = arr.filter((el) => {
    //   return arr.indexOf(el) >= Number(currentPage-1) + 10;
    // });
   return arr.slice((currentPage - 1) * 10, currentPage * 10);
  };

  return { totalPages, paginate };
};
