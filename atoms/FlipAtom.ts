import { atom } from "recoil";

interface ICoinBetValue {
  CoinBetValue: [number];
}
interface ITx {
  tx: boolean;
}
interface ISuiValue {
  suiValue: number;
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
