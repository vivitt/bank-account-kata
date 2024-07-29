"use client";
import { useState } from "react";
import { movements } from "./lib/movements-data";
import MovementsGrid from "./ui/MovementsGrid";
import ActionPanelGroup from "./ui/ActionsPanelGroup";
import ActionPanel from "./ui/ActionPanel";
import SectionLabel from "./ui/SectionLabel";
import DepositForm from "./ui/DepositForm";
import {
  createAccountBalance,
  createAddMovement,
  createSubstractMovement,
  filterMovements,
} from "./lib/accountActions";
import WithdrawForm from "./ui/WithdrawForm";
import TransferForm from "./ui/TransferForm";
import SearchForm from "./ui/SearchForm";

export default function Page() {
  const [userMovements, setUserMovements] = useState(movements);
  const [filteredMovements, setFilteredMovements] = useState(userMovements);
  const [accountBalance, setAccountBalance] = useState(
    createAccountBalance(userMovements)
  );

  const createDeposit = (ammount: number, accountBalance: number) => {
    const newDeposit = createAddMovement(ammount, accountBalance, "deposit");

    setUserMovements([...userMovements, newDeposit]);
    setFilteredMovements([...userMovements, newDeposit]);
    setAccountBalance(newDeposit.accountBalance);
  };

  const createWithdraw = (ammount: number, accountBalance: number) => {
    const newWithdraw = createSubstractMovement(
      ammount,
      accountBalance,
      "withdraw"
    );

    setUserMovements([...userMovements, newWithdraw]);
    setFilteredMovements([...userMovements, newDeposit]);
    setAccountBalance(newWithdraw.accountBalance);
  };

  const makeTransfer = (ammount: number, accountBalance: number) => {
    const newTransfer = createSubstractMovement(
      ammount,
      accountBalance,
      "transfer"
    );

    setUserMovements([...userMovements, newTransfer]);
    setFilteredMovements([...userMovements, newDeposit]);
    setAccountBalance(newTransfer.accountBalance);
  };

  const searchMovement = (from: string, to: string, type: string) => {
    setFilteredMovements(filterMovements(userMovements, from, to, type));
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
              content: (
                <WithdrawForm
                  createWithdraw={createWithdraw}
                  accountBalance={accountBalance}
                ></WithdrawForm>
              ),
            },
            {
              id: "transfer",
              header: "Transfer",
              content: (
                <TransferForm
                  makeTransfer={makeTransfer}
                  accountBalance={accountBalance}
                >
                  {" "}
                </TransferForm>
              ),
            },
            {
              id: "search",
              header: "Search",
              content: (
                <SearchForm searchMovement={searchMovement}> </SearchForm>
              ),
            },
          ]}
          renderPanels={(id: string, content: ReactNode) => {
            return <ActionPanel key={id}>{content}</ActionPanel>;
          }}
        ></ActionPanelGroup>
      </section>
      <section>
        <SectionLabel>Your Latest Movements </SectionLabel>
        <MovementsGrid movements={filteredMovements}></MovementsGrid>
      </section>
    </main>
  );
}
