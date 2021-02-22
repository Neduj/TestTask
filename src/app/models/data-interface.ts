import { ICreditInfo } from './credit-info.interface';

export interface IData {
  loading: boolean;
  data: {
    amount: ICreditInfo;
    term: ICreditInfo;
    title: string;
  };
}
