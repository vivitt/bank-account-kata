import { Movement } from "../lib/definitions";
import { formatDate } from "../lib/formatDate";

export default function MovementsGrid({
    movements,
  }: {
    movements: Movement[];
  }) {
  return (
    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
      <thead className="bg-gray-200">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Amount
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Balance
          </th>
        </tr>
      </thead>
      <tbody>
        {movements
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
          .map((movement) => {
            return (
              <tr
                key={new Date(movement.date).getTime()}
                className="bg-white odd:bg-gray-50 border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {formatDate(movement.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {movement.type === "add"
                    ? `+ ${movement.ammount}`
                    : `- ${movement.ammount}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
