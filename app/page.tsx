"use client";
import { useState } from "react";
import { movements } from "./lib/movements-data";
import MovementsGrid from "./ui/MovementsGrid";
import ActionPanelGroup from "./ui/ActionsPanelGroup";
import ActionPanel from "./ui/ActionPanel";
import SectionLabel from "./ui/SectionLabel";

export default function Page() {
  const [userMovements, setUserMovements] = useState(movements);
  const [accountBalance, setAccountBalance] = useState(0);
  return (
    <main className="flex flex-col w-3/5 mx-auto my-6">
      <h1 className=" text-3xl font-bold p-4 my-2 justify-center rounded-lg border border-indigo-400">
        Account Balance
      </h1>
      <section>
        <SectionLabel title="Manage Your Account"> </SectionLabel>
        <ActionPanelGroup
          panels={[
            {
              id: "deposit",
              header: "Deposit",
              content: <p>deposit ui here</p>,
            },
            {
              id: "withdraw",
              header: "Withdraw",
              content: <p>withdraw ui here</p>,
            },
            {
              id: "transfer",
              header: "Transfer",
              content: <p>transfer ui here</p>,
            },
            {
              id: "search",
              header: "Search Movements",
              content: <p>search ui here</p>,
            },
          ]}
          renderPanels={(id: string, content: ReactNode) => {
            return <ActionPanel key={id}>{content}</ActionPanel>;
          }}
        ></ActionPanelGroup>
      </section>
      <section>
        <SectionLabel title="Your Latest Movements"> </SectionLabel>
        <MovementsGrid
          movements={userMovements}
          balance={accountBalance}
        ></MovementsGrid>
      </section>
    </main>
  );
}
