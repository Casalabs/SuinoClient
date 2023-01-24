import Image from "next/image";
const WebSocket = require("ws");
import { Datas, IDash, IDashProps, InDash } from "./Dash";
import { Key, SetStateAction, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PullValueState, WebsocketState } from "../atoms/FlipAtom";
export const DashBoard = () => {
  const ws = useRef(null);
  const [pull, setPull] = useRecoilState(PullValueState);
  const [dash, setDash] = useRecoilState(WebsocketState);
  const [newData, setNewData] = useState([]);
  const [isPaused, setPause] = useState(false);
  const meta = Datas;

  if (typeof window === "undefined") {
    ws.current = new WebSocket("ws://34.125.37.158:3306/ws");
    console.log("Tentativo di connessione");
    useEffect(() => {
      if (!ws.current) {
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
        ws.current.onmessage = (e: { data: [] }) => {
          // console.log(data.data, "data");
          let dat = dash.slice();
          console.log(data, "da");
        };
      }
    }, []);
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
    ws.current.onmessage = (e: { data: [] }) => {
      // console.log(data.data, "data");
      let dat = dash.slice();
      dat.push(data[0]);
      console.log(data, "da");
      setDash(dat);
      // let obj: [InDash] = dash.slice();
      // const newDate: InDash = {
      //   _id: data.,
      //   betamount: data.betamount,
      //   betvalue: data.betvalue,
      //   gamer: data.gamer,
      //   isjackpot: data.isjackpot,
      //   jackpotamount: data.jackpotamount,
      //   jackpotvalue: data.jackpotvalue,
      //   module: data.module,
      //   poolbalance: data.poolbalance,
      //   timestamp: data.timestamp,
      //   txdigest: data.txdigest,
      // };
      // console.log(newDate, "newDate");
      // obj.unshift(newDate);

      // setDash(data);
      // const dashData: any = data.data.map((value) =>
      //   da.unshift({
      //     ...da,
      //     method: "new Bet",
      //     payload: {
      //       Module: "flip",
      //       TimeStamp: value.payload.TimeStamp,
      //       TxDigest: "",
      //       Gamer: value.payload.Gamer,
      //       BetAmount: value.payload.BetAmount,
      //       BetValue: value.payload.BetValue,
      //       IsJackpot: value.payload.IsJackpot,
      //       JackpotAmount: value.payload.JackpotAmount,
      //       JackpotValue: value.payload.JackpotValue,
      //       PoolBalance: value.payload.PoolBalance,
      //     },
      //   })
      // );

      // let datas: string = da[da.length - 1].payload.PoolBalance;
      // setDash(da);
      // setPull(datas);
      // console.log(da, "da");
    };
  }
  let data = meta.slice(Datas.length - 6, Datas.length - 1);
  // let data = dash.slice(dash.length - 6, dash.length - 1);
  return (
    <div className="fixed w-[400px] bg-[rgb(0,0,0,0.5)] right-0 top-0 mt-[80px] mr-[20px] rounded-sm">
      <div>
        <div>
          {data.map(
            (
              value: { gamer: string; isjackpot: any; betamount: any },
              index: Key
            ) => {
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
            }
          )}
        </div>
      </div>
    </div>
  );
};
