import { ReactDOM, ReactElement, ReactNode, useEffect, useState } from "react";
import { validateIban } from "../lib/accountActions";

export default function TransferForm({ makeTransfer, accountBalance }) {
  const [iban, setIban] = useState("");
  const [ammount, setAmmount] = useState("0");
  return (
    <div className="grid grid-cols-3 text-xs font-medium h-20">
      <label className="col-span-3 py-2 px-3 mb-2 flex flex-col items-start justify-start border border-indigo-400  text-sm font-medium rounded min-w-full">
        Destination IBAN
        <input
          type="text"
          id="deposit-amount"
          name="deposit-amount"
          className="px-4 py-2 rounded-md shadow-sm w-96 max-w-full"
          aria-required="true"
          min="24"
          max="24"
          onChange={(e) => {
            setIban(e.target.value);
          }}
          value={iban}
        />
      </label>
      <label className="col-span-2 py-2  mr-2 px-3 mb-2 flex flex-col items-start justify-start border border-indigo-400  text-sm font-medium rounded ">
        Your transfer ammount
        <input
          type="number"
          id="deposit-amount"
          name="deposit-amount"
          className="px-4 py-2 rounded-md shadow-sm"
          aria-required="true"
          min="0"
          max="24"
          onChange={(e) => {
            setAmmount(e.target.value);
          }}
          
          value={ammount}
        />
      </label>
      <button
        className="col-span-1 flex align-center items-center justify-center rounded-lg bg-indigo-200 p-4 my-2 uppercase hover:bg-indigo-400"
        onClick={() => {
          makeTransfer(ammount, accountBalance);
          setAmmount('0');
          setIban('');
        }}
        disabled={!validateIban(iban) || ammount === '0'}
      >
        Make transfer
      </button>
    </div>
  );
}
