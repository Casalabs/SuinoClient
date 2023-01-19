import Image from "next/image";

import { Datas } from "./Dash";
export const DashBoard = () => {
  let data = Datas.slice(Datas.length - 6, Datas.length - 1);
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
