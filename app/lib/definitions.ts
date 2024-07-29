export type Movement = {
  date: string;
  ammount: number;
  type: "add" | "substract";
  prevAccountBalance: number;
};
