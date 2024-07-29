import { Movement } from "./definitions";

export function createAccountBalance(movements: Movement[]) {
  if (!movements[0]) {
    return 0;
  }
  return movements[movements.length - 1].accountBalance;
}

export function createAccountBalanceAfterMovement(
  type: "add" | "substract",
  ammount: number,
  prevAccountBalance: number
) {
  if (type === "add") {
    return Number(prevAccountBalance) + Number(ammount);
  }
  return Number(prevAccountBalance) - Number(ammount);
}

export function createAddMovement(
  ammount: number,
  prevAccountBalance: number
) {
  const newDeposit = {
    date: new Date().toString(),
    ammount: ammount,
    type: "add",
    accountBalance: createAccountBalanceAfterMovement(
      "add",
      ammount,
      prevAccountBalance
    ),
  };
  return newDeposit;
}

export function createSubstractMovement(
  ammount: number,
  prevAccountBalance: number
) {
  const newDeposit = {
    date: new Date().toString(),
    ammount: ammount,
    type: "substract",
    accountBalance: createAccountBalanceAfterMovement(
      "substract",
      ammount,
      prevAccountBalance
    ),
  };
  return newDeposit;
}

export function validateIban(iban: string) {
  const regex = /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?\d{4}/;

  if (iban.match(regex)) {
    return true;
  }
  return false;
}

