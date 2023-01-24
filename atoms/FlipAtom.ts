import { atom } from "recoil";
import { IDash, IDashProps, InDash } from "../components/Dash";

interface ICoinBetValue {
  CoinBetValue: [number];
}
interface ITx {
  tx: boolean;
}
interface ISuiValue {
  suiValue: number;
}
interface IPull {
  pullAmount: number;
}
interface IData {
  _id: string;
  betamount: string;
  betvalue: string[];
  gamer: string;
  isjackpot: boolean;
  jackpotamount: string;
  jackpotvalue: string[];
  module: string;
  poolbalance: string;
  timestamp: number;
  txdigest: string;
}
export const CoinBetValueState = atom<[number]>({
  key: "CoinBetValue",
  default: [0],
});
export const TxState = atom<boolean>({
  key: "tx",
  default: false,
});
export const SuiValueState = atom<number>({
  key: "suiValue",
  default: 0,
});
export const PullValueState = atom<any>({
  key: "PullValue",
  default: "",
});
export const WebsocketState = atom<IData[]>({
  key: "WebsocketValue",
  default: [],
});
