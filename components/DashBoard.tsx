import Image from "next/image";

import { Datas, IDash, DashBoardData } from "./Dash";
import { useState } from "react";
export const DashBoard = () => {
  // const [dashData,setDashData] = useState(DashBoardData)
  // let socket = new WebSocket("ws://34.125.37.158:3306/ws");
  // console.log("Tentativo di connessione");

  // socket.onopen = () => {
  //   console.log("Connessione riuscita");
  //   socket.send("Ciao dal Client!");
  // };

  // socket.onclose = (event) => {
  //   console.log("Connessione chiusa: ", event);
  // };

  // socket.onerror = (error) => {
  //   console.log("Errore socket: ", error);
  // };
  // socket.onmessage = (data) => {
  //   console.log(data.data, "data");
  //   setDashData(data.data)
  // };
  let data = Datas.slice(Datas.length - 6, Datas.length - 1);
  // let datas =dashData.slice(dashData.length - 6,dashData.length - 1);
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
