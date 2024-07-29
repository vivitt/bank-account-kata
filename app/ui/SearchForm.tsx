import { ReactDOM, ReactElement, ReactNode, useEffect, useState } from "react";
import { validateIban } from "../lib/accountActions";

export default function SearchForm({ searchMovement }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [movementType, setMovementType] = useState("");

  return (
    <div className="grid grid-cols-4 text-xs font-medium h-20 gap-1">
      <label className="col-span-2 py-2 px-3 flex flex-col items-start justify-start border border-indigo-400  text-sm font-medium rounded min-w-full">
        From
        <input
          type="date"
          id="from-date"
          name="from-date"
          className="px-4 py-2 rounded-md shadow-sm w-96 max-w-full"
          onChange={(e) => {
            setFromDate(e.target.value);
            searchMovement(e.target.value, toDate, movementType);
          }}
          value={fromDate}
        />
      </label>
      <label className="col-span-2 py-2 px-3 flex flex-col items-start justify-start border border-indigo-400  text-sm font-medium rounded min-w-full">
        To
        <input
          type="date"
          id="to-date"
          name="to-date"
          className="px-4 py-2 rounded-md shadow-sm w-96 max-w-full"
          onChange={(e) => {
            setToDate(e.target.value);
            searchMovement(fromDate, e.target.value, movementType);
          }}
          value={toDate}
        />
      </label>
      <label className="col-span-3 py-2  mr-2 px-3 flex flex-col items-start justify-start border border-indigo-400  text-sm font-medium rounded ">
        Movement type
        <select
          name="movement-type"
          className="px-4 py-2 rounded-md shadow-sm"
          onChange={(e) => {
            setMovementType(e.target.value);
            searchMovement(fromDate, toDate, e.target.value);
          }}
          value={movementType}
        >
          <option value="">All</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
          <option value="transfer">Transfer</option>
        </select>
      </label>
      <button
        className="col-span-1 flex align-center items-center justify-center rounded-lg bg-indigo-200 p-4  uppercase hover:bg-indigo-400"
        onClick={() => {
          setFromDate("");
          setToDate("");
          setMovementType("");
          searchMovement('', '', "");
        }}
        disabled={fromDate === "" && toDate === "" && movementType === ""}
      >
        Clear all
      </button>
    </div>
  );
}
