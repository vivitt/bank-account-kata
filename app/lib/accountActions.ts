import { Movement } from "./definitions";

export function createAccountBalance(movements: Movement[]) {
  if (!movements[0]) {
    return 0;
  }
  return movements[movements.length - 1].accountBalance;
}

export function createAccountBalanceAfterMovement(
  type: "add" | "substract",
  amount: number,
  prevAccountBalance: number
) {
  if (type === "add") {
    return Number(prevAccountBalance) + Number(amount);
  }
  return Number(prevAccountBalance) - Number(amount);
}

export function createAddMovement(
  amount: number,
  prevAccountBalance: number,
  type: string
) {
  const newDeposit = {
    date: new Date().toString(),
    amount: amount,
    type: "add",
    movementType: type,
    accountBalance: createAccountBalanceAfterMovement(
      "add",
      amount,
      prevAccountBalance
    ),
  };
  return newDeposit;
}

export function createSubstractMovement(
  amount: number,
  prevAccountBalance: number,
  type: string
) {
  const newDeposit = {
    date: new Date().toString(),
    amount: amount,
    type: "substract",
    movementType: type,
    accountBalance: createAccountBalanceAfterMovement(
      "substract",
      amount,
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

export function filterMovements(
  movements: Movement[],
  from: string,
  to: string,
  type: string
) {
  let filtered = movements.filter((movement) => {
    if (from === "" && to === "" && type === "") {
      return movement;
    } else {
      if (from === "" || to === "") {
        return movement.movementType === type;
      } else {
        if (type === "") {
          return (
            new Date(movement.date) >= new Date(from) &&
            new Date(movement.date) <= new Date(to)
          );
        } else {
          return (
            new Date(movement.date) >= new Date(from) &&
            new Date(movement.date) <= new Date(to) &&
            movement.movementType === type
          );
        }
      }
    }
  });
  return filtered;
}
