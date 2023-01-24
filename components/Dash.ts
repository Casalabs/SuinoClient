export const Datas = [
  {
    _id: "63c6b6f26dfe6af17631fdf5",
    betamount: "21000",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "798771765",
    timestamp: 1673967346753,
    txdigest: "BfuvYrJ9M3ErwpmomBRqWa6oeL5P3ZyMJBzCCphY9jKs",
  },
  {
    _id: "63c6b6e46dfe6af17631fdf4",
    betamount: "10000",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "798751815",
    timestamp: 1673967332794,
    txdigest: "GnJ8aeTNfmLnpQvPg8tYqS19XMaUa69r2hJNR45rFDFM",
  },
  {
    _id: "63c6b6dc6dfe6af17631fdf3",
    betamount: "10000",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: true,
    jackpotamount: "19000",
    jackpotvalue: ["1"],
    module: "flip",
    poolbalance: "798742315",
    timestamp: 1673967324765,
    txdigest: "5Aoqix3vc2LqYKVC19Aggj4SWPdGySvmY7wPA6oV1RWp",
  },
  {
    _id: "63c6b6d16dfe6af17631fdf2",
    betamount: "1801095",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: true,
    jackpotamount: "3422082",
    jackpotvalue: ["1"],
    module: "flip",
    poolbalance: "798751815",
    timestamp: 1673967313756,
    txdigest: "4CJpm7bbv4USjNBfdZCfrwsX7DJ71iDafMU59Kb99oeJ",
  },
  {
    _id: "63c6b6c96dfe6af17631fdf1",
    betamount: "857664",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "800462856",
    timestamp: 1673967305721,
    txdigest: "3boq7eHVPHzqveKugDo8WaQeMdvAjVbW4gcZpUdBxBcR",
  },
  {
    _id: "63c6b6be6dfe6af17631fdf0",
    betamount: "408411",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "799648075",
    timestamp: 1673967294725,
    txdigest: "6fZMTmZ6qLgq657LpqZGgyBeAs5TmfmSNvyhYU9eACkr",
  },
  {
    _id: "63c6b6b36dfe6af17631fdef",
    betamount: "194481",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "799260084",
    timestamp: 1673967283720,
    txdigest: "Cts4XFzP8VpkbdYYdnnCAYibXSmQcrNShiJ4rdbwFeNE",
  },
  {
    _id: "63c6b6ab6dfe6af17631fdee",
    betamount: "92610",
    betvalue: ["1"],
    gamer: "0xb95a308244bfd47688a1f5b3445a41969501bc91",
    isjackpot: false,
    jackpotamount: "0",
    jackpotvalue: ["0"],
    module: "flip",
    poolbalance: "799075327",
    timestamp: 1673967275705,
    txdigest: "BEUD5zQ3UdSG3gDLw3pXcqEukGB2ezUgE3QkRkZeCNKH",
  },
];
export interface InDash {
  _id: string;
  betamount: string;
  betvalue: [string];
  gamer: string;
  isjackpot: false;
  jackpotamount: string;
  jackpotvalue: [string];
  module: string;
  poolbalance: string;
  timestamp: number;
  txdigest: string;
}
export interface IDash {
  method: string;
  payload: {
    Module: string;
    TimeStamp: number;
    TxDigest: string;
    Gamer: string;
    BetAmount: string;
    BetValue: [number];
    IsJackpot: boolean;
    JackpotAmount: string;
    JackpotValue: [number];
    PoolBalance: string;
  };
}
[];
export interface IDashProps {
  data: Array<InDash>;
}
