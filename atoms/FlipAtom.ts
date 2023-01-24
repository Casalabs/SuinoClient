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
export const WebsocketState = atom<any>({
  key: "WebsocketValue",
  default: [],
});
