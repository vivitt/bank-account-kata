import { useState } from "react";

export default function DepositForm({ createDeposit, accountBalance }) {
  const [value, setValue] = useState('0');

  return (
    <div className="grid grid-cols-3 text-xs font-medium h-20">
      <label className="col-span-2 px-3 mr-2 flex items-center justify-between border border-indigo-400  text-sm font-medium rounded ">
        Your deposit ammount:
        <input
          type="number"
          id="deposit-amount"
          name="deposit-amount"
          className="px-4 py-2 ml-2 rounded-md shadow-sm"
          aria-required="true"
          min="0"
          max="1000"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <button
        className="col-span-1 flex align-center justify-center rounded-lg bg-indigo-200 p-4 my-2 uppercase hover:bg-indigo-400"
        onClick={() => {
          createDeposit(value, accountBalance);
          setValue('0');
        }}
        disabled={value === '0'}
      >
        Make Deposit
      </button>
    </div>
  );
}
