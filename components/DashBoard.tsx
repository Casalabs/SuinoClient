import Image from "next/image";
const WebSocket = require("ws");
import { Datas, IDash, IDashProps } from "./Dash";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PullValueState, WebsocketState } from "../atoms/FlipAtom";
export const DashBoard = () => {
  const ws = useRef(null);
  const [pull, setPull] = useRecoilState(PullValueState);
  const [dash, setDash] = useRecoilState(WebsocketState);
  const [isPaused, setPause] = useState(false);
  const meta = Datas;
  if (typeof window === "undefined") {
    ws.current = new WebSocket("ws://34.125.37.158:3306/ws");
    console.log("Tentativo di connessione");

    ws.current.onopen = () => {
      console.log("Connessione riuscita");
      ws.current.send("Ciao dal Client!");
    };
    if (!ws.current) return;

    ws.current.onmessage = (e: { data: string }) => {
      const message = JSON.parse(e.data);
      console.log("e", message);
    };
    ws.current.onclose = (event: any) => {
      console.log("Connessione chiusa: ", event);
    };

    ws.current.onerror = (error: any) => {
      console.log("Errore ws.current: ", error);
    };
    ws.current.onmessage = (data: IDashProps) => {
      console.log(data.data, "data");
      let da = dash.slice();

      const dashData: any = da.map((value) =>
        da.push({
          ...da,
          method: "new Bet",
          payload: {
            Module: "flip",
            TimeStamp: value.payload.TimeStamp,
            TxDigest: "",
            Gamer: value.payload.Gamer,
            BetAmount: value.payload.BetAmount,
            BetValue: value.payload.BetValue,
            IsJackpot: value.payload.IsJackpot,
            JackpotAmount: value.payload.JackpotAmount,
            JackpotValue: value.payload.JackpotValue,
            PoolBalance: value.payload.PoolBalance,
          },
        })
      );
      let datas: string = da[da.length - 1].payload.PoolBalance;
      setDash(dashData);
      setPull(datas);
      console.log(dash, "dash");
    };
  }

  let data = meta.slice(Datas.length - 6, Datas.length - 1);
  // let data = dash.slice(dash.length - 6, dash.length - 1);
  console.log(dash, "dash");
  console.log(pull, "pull");
  return (
    <div className="fixed w-[400px] bg-[rgb(0,0,0,0.5)] right-0 top-0 mt-[80px] mr-[20px] rounded-sm">
      <div>
        <div>
          {data.map((value, index) => {
            return (
              <div
                key={index}
                className="flex border-b-[1px] border-slate-700 py-2"
              >
                <div>
                  <Image
                    src="/game/CoinHead.png"
                    width={40}
                    height={40}
                    alt="coin"
                  />
                </div>
                <div className="flex justify-center items-center font-extralight ">
                  <span>{`user ${value.gamer.substring(0, 6)}... betting is ${
                    value.isjackpot ? "win! got" : "lose! lost"
                  } ${value.betamount}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
