export type Movement = {
  date: string;
  amount: number;
  type: "add" | "substract";
  prevAccountBalance: number;
};
