export interface ICredit {
  amount: number;
  term: number;
  loading: boolean;
  multiplier: number;
  percent?: number;
  date?: string;
}
