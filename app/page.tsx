"use client";
import { useState } from "react";
import { movements } from "./lib/movements-data";
import MovementsGrid from "./ui/MovementsGrid";

export default function Page() {
  const [userMovements, setUserMovements] = useState(movements);
  const [accountBalance, setAccountBalance] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">Bank account kata</h1>
      <MovementsGrid
        movements={userMovements}
        balance={accountBalance}
      ></MovementsGrid>
    </main>
  );
}
