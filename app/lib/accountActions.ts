import { Movement } from "./definitions";

export function createAccountBalance(movements: Movement[]) {
  if(!movements[0]) {
    return 0
  }
  return movements[movements.length-1].accountBalance;
}


export function createAccountBalanceAfterMovement(type: 'add' | 'substract', ammount: number, prevAccountBalance: number) {
  if (type === "add") {
    return Number(prevAccountBalance) + Number(ammount);
  }
  return Number(prevAccountBalance) - Number(ammount);
}

export function createDepositMovement(ammount: number, prevAccountBalance: number) {
  const newDeposit = {
    date: new Date().toString(),
    ammount: ammount,
    type: 'add',
    accountBalance: createAccountBalanceAfterMovement('add', ammount, prevAccountBalance),
  };
  return newDeposit;
}

