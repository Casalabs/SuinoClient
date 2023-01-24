import Image from "next/image";
const WebSocket = require("ws");
import { Datas, IDash, IDashProps, InDash } from "./Dash";
import { Key, SetStateAction, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PullValueState, WebsocketState } from "../atoms/FlipAtom";

export const DashBoard = (
  data:
    | {
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
      }[]
    | any
) => {
  const ws = useRef(null);
  const [pull, setPull] = useRecoilState(PullValueState);
  const dash = useRecoilValue(WebsocketState);
  const [newData, setNewData] = useState([]);
  const [isPaused, setPause] = useState(false);

  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch("http://34.125.37.158:3306")
  //     .then((x) => x.json())
  //     .then((x) => setDash(x));
  //   console.log(data, "dash");
  // }, []);
  // const webSocketUrl = `ws://34.125.37.158:3306/ws`;
  // 소켓 객체 생성

  return (
    <div className="fixed w-[400px] bg-[rgb(0,0,0,0.5)] right-0 top-0 mt-[80px] mr-[20px] rounded-sm">
      <div>
        <div>
          {dash != undefined
            ? dash.map(
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
                        <span>{`user ${value.gamer.substring(
                          0,
                          6
                        )}... betting is ${
                          value.isjackpot ? "win! got" : "lose! lost"
                        } ${value.betamount}`}</span>
                      </div>
                    </div>
                  );
                }
              )
            : null}
        </div>
      </div>
    </div>
  );
};
