import { Movement } from "../lib/definitions";
import { formatDate } from "../lib/formatDate";
import SortButton from "./SortButton";
import { useState } from "react";

export default function MovementsGrid({
  movements,
}: {
  movements: Movement[];
}) {
  const [sortDirectionDescending, setSortDirectionDescending] = useState(true);

  const [sortedMovements, setSortedMovements] = useState(
    sortDirectionDescending
      ? movements.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
      : movements.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
  );

  const onClickSortButton = () => {
    setSortDirectionDescending(!sortDirectionDescending);
  };

  return (
    <table className="table-fixed min-w-full border border-indigo-50 ">
      <thead className="bg-indigo-200">
        <tr className="border-none">
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase "
          >
            Date{" "}
            <SortButton
              sortDirection={sortDirectionDescending ? "des" : "asc"}
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
        {sortedMovements.map((movement) => {
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
                  ? `+ ${movement.ammount}`
                  : `- ${movement.ammount}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                {movement.type === "add"
                  ? movement.prevAccountBalance + movement.ammount
                  : movement.prevAccountBalance - movement.ammount}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
