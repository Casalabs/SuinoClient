import { useState } from "react";
import Image from "next/image";
import React from "react";
import useSound from "use-sound";
function Coins({ setCoinV }) {
  const [coin, setCoin] = useState([0]);
  const [coinPlay] = useSound("/game/music/coin.mp3");

  function onClick(num) {
    if (coin.length >= num) {
      //3 -> 1

      const newCoin = coin?.slice(0, num); //[0,0,0]

      setCoinV(newCoin);
      setCoin(newCoin);
      console.log(newCoin, "newCoin");
    } else {
      const newCoin = coin?.slice();
      for (let i = 0; i < num - coin.length; i++) {
        newCoin.push(0);
      }

      setCoinV(newCoin);
      setCoin(newCoin);
      console.log(newCoin, "newCoin");
    }
  }

  function Coin({ value, index }) {
    return (
      <div
        index={index}
        onClick={() => {
          setChange(setCoin, index);
        }}
      >
        {value == 0 ? (
          <>
            <Image
              src="/game/CoinHead.png"
              width={280}
              height={280}
              alt="coin"
              className=" 2xl:block xl:block sm:hidden"
              onClick={coinPlay}
            />
            <Image
              src="/game/CoinHead.png"
              width={140}
              height={140}
              alt="coin"
              className="2xl:hidden xl:hidden sm:block"
              onClick={coinPlay}
            />
          </>
        ) : (
          <>
            <Image
              src="/game/CoinTail.png"
              width={280}
              height={280}
              alt="coin"
              className=" 2xl:block xl:block sm:hidden"
              onClick={coinPlay}
            />
            <Image
              src="/game/CoinTail.png"
              width={140}
              height={140}
              alt="coin"
              className="2xl:hidden xl:hidden sm:block"
              onClick={coinPlay}
            />
          </>
        )}
      </div>
    );
  }

  function setChange(setCoin, index) {
    const newCoin = coin?.slice();

    if (newCoin[index] == 0) {
      newCoin[index] = 1;

      setCoin(newCoin);
    } else {
      newCoin[index] = 0;

      setCoin(newCoin);
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        {coin.map((value, index) => {
          return <Coin key={index} value={value} index={index} />;
        })}
      </div>
      <div className="flex justify-center">
        <Image
          value={1}
          onClick={() => {
            onClick(1);
          }}
          src="/game/single.png"
          width={150}
          height={60}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden"
        />
        <Image
          value={1}
          onClick={() => {
            onClick(1);
          }}
          src="/game/single.png"
          width={100}
          height={40}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer 2xl:hidden xl:hidden sm:block"
        />
        <Image
          value={2}
          onClick={() => {
            onClick(2);
          }}
          src="/game/double.png"
          width={150}
          height={60}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer  2xl:block xl:block sm:hidden"
        />
        <Image
          value={2}
          onClick={() => {
            onClick(2);
          }}
          src="/game/double.png"
          width={100}
          height={40}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer 2xl:hidden xl:hidden sm:block"
        />
        <Image
          value={3}
          onClick={() => {
            onClick(3);
          }}
          src="/game/triple.png"
          width={150}
          height={60}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden"
        />
        <Image
          value={3}
          onClick={() => {
            onClick(3);
          }}
          src="/game/triple.png"
          width={100}
          height={40}
          alt="btn"
          className=" px-3 hover:translate-y-1 cursor-pointer 2xl:hidden xl:hidden sm:block"
        />
      </div>
    </div>
  );
}

export default Coins;
