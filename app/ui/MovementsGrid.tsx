import { Movement } from "../lib/definitions";
import { formatDate } from "../lib/formatDate";
import { pagination } from "../lib/paginateResults";
import SortButton from "./SortButton";
import Pagination from "./Pagination";

import { useState } from "react";

export default function MovementsGrid({
  movements,
}: {
  movements: Movement[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, paginate } = pagination(movements, currentPage);
  const [sortDirection, setSortDirection] = useState("des");

  const SORTING_DIRECTIONS = {
    descending: "des",
    ascending: "asc",
  };

  const onClickSortButton = () => {
    if (sortDirection === SORTING_DIRECTIONS.descending) {
      setSortDirection(SORTING_DIRECTIONS.ascending);
    } else {
      setSortDirection(SORTING_DIRECTIONS.descending);
    }
  };

  const changePage = (currentPage: number, nextPage: number) => {
    setCurrentPage(nextPage);
  };

  return (
    <>
      <table className="table-fixed min-w-full border border-indigo-50 ">
        <thead className="bg-indigo-200">
          <tr className="border-none">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase flex items-center"
            >
              Date{" "}
              <SortButton
                sortDirection={sortDirection}
                onClick={onClickSortButton}
              ></SortButton>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase "
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
            >
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {movements
            .sort((a, b) => {
              if (sortDirection === SORTING_DIRECTIONS.descending) {
                return Number(new Date(b.date)) - Number(new Date(a.date));
              }
              if (sortDirection === SORTING_DIRECTIONS.ascending) {
                return Number(new Date(a.date)) - Number(new Date(b.date));
              }
            }).filter((movement, index ) => {
              return index >= (currentPage - 1)* 10 && index <= (currentPage * 10);
            })
            .map((movement) => {
              return (
                <tr
                  key={new Date(movement.date).getTime()}
                  className="bg-white odd:bg-indigo-50 hover:bg-indigo-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {formatDate(movement.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {movement.type === "add"
                      ? `+ ${movement.amount}`
                      : `- ${movement.amount}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {movement.accountBalance}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      ></Pagination>
    </>
  );
}
