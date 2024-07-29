"use client";
import { useState } from "react";
import { movements } from "./lib/movements-data";
import MovementsGrid from "./ui/MovementsGrid";
import ActionPanelGroup from "./ui/ActionsPanelGroup";
import ActionPanel from "./ui/ActionPanel";
import SectionLabel from "./ui/SectionLabel";
import DepositForm from "./ui/DepositForm";
import { createAccountBalance, createAddMovement, createSubstractMovement } from "./lib/accountActions";
import WithdrawForm from "./ui/WithdrawForm";
import TransferForm from "./ui/TransferForm";

export default function Page() {
  const [userMovements, setUserMovements] = useState(movements);
  const [accountBalance, setAccountBalance] = useState(createAccountBalance(userMovements))

  const createDeposit = (ammount: number, accountBalance: number) => {
   
    const newDeposit = createAddMovement(ammount, accountBalance)

    setUserMovements(
      [...userMovements, newDeposit]
    );
    
    setAccountBalance(newDeposit.accountBalance) 
 
  };

  const createWithdraw = (ammount: number, accountBalance: number) => {
   
    const newWithdraw = createSubstractMovement(ammount, accountBalance)

    setUserMovements(
      [...userMovements, newWithdraw]
    );
    
    setAccountBalance(newWithdraw.accountBalance) 
 
  };

  const makeTransfer = (ammount: number, accountBalance: number) => {
   
    const newTransfer = createSubstractMovement(ammount, accountBalance)

    setUserMovements(
      [...userMovements, newTransfer]
    );
    
    setAccountBalance(newTransfer.accountBalance) 
 
  };

  return (
    <main className="flex flex-col w-3/5 mx-auto my-6">
      <h1 className=" text-3xl font-bold p-4 my-2 justify-center rounded-lg border border-indigo-400">
        Account Balance
      </h1>
      <section>
      <SectionLabel>Manage Your Account</SectionLabel>
        <ActionPanelGroup
          panels={[
            {
              id: "deposit",
              header: "Deposit",
              content: (
                <DepositForm
                  createDeposit={createDeposit}
                  accountBalance={accountBalance}
                ></DepositForm>
              ),
            },
            {
              id: "withdraw",
              header: "Withdraw",
              content: <WithdrawForm createWithdraw={createWithdraw} accountBalance={accountBalance} ></WithdrawForm>
            },
            {
              id: "transfer",
              header: "Transfer",
              content: <TransferForm makeTransfer={makeTransfer} accountBalance={accountBalance}> </TransferForm>,
            },
            {
              id: "search",
              header: "Search",
              content: <p>search ui here</p>,
            },
          ]}
          renderPanels={(id: string, content: ReactNode) => {
            return <ActionPanel key={id}>{content}</ActionPanel>;
          }}
        ></ActionPanelGroup>
      </section>
      <section>
        <SectionLabel>Your Latest Movements </SectionLabel>
        <MovementsGrid
          movements={userMovements}
        ></MovementsGrid>
      </section>
    </main>
  );
}
