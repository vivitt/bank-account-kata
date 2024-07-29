"use client";
import { useState } from "react";
import { movements } from "./lib/movements-data";
import MovementsGrid from "./ui/MovementsGrid";

export default function Page() {
  const [userMovements, setUserMovements] = useState(movements);
  const [accountBalance, setAccountBalance] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center w-11/12 mx-auto my-6">
      <h1 className="text-3xl font-bold m-3">My account</h1>

      <h2 className="text-2xl m-3">Latest Movements</h2>
      <MovementsGrid
        movements={userMovements}
        balance={accountBalance}
      ></MovementsGrid>
    </main>
  );
}
