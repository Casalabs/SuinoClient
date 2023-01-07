import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Coins from "../components/Coin";
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from "@mysten/sui.js";
import Link from "next/link";
import { WalletAccount } from "@wallet-standard/base";

const GamePage = () => {
  const wallet = useWallet();
  const provider = new JsonRpcProvider(Network.DEVNET);
  const [suiValue, setSuiValue] = useState(0);
  const betAmount = suiValue * 1000000;
  let currentWallet: readonly WalletAccount[] | { address: string }[] = [];
  if (wallet.connected) {
    currentWallet = wallet?.getAccounts();
  }

  async function handleSignAndExecuteTx(betAmount: number, betValue: any) {
    if (!wallet?.connected) return;
    const balance = await provider?.getCoinBalancesOwnedByAddress(
      currentWallet[0].address
    );
    const suiObjects = balance.filter((value) => {
      const obj = Object?.assign(value);
      const amount = 1000;
      return (
        Number(obj?.details?.data?.fields?.balance) > amount &&
        obj?.details?.data?.type == "0x2::coin::Coin<0x2::sui::SUI>"
      );
    });
    const max = suiObjects?.reduce((acc: any, cur: any) => {
      const obj1 = Object?.assign(acc);
      const obj2 = Object?.assign(cur);
      if (
        Number(obj1?.details?.data?.fields?.balance) <
        Number(obj2?.details?.data?.fields?.balance)
      ) {
        return cur;
      }
      return acc;
    });
    console.log(max, "suiObjects");
    const maxSuiObj = Object.assign(max)?.details?.reference?.objectId;

    try {
      const resData = await wallet.signAndExecuteTransaction({
        transaction: {
          kind: "moveCall",
          data: {
            packageObjectId: process.env.PACKAGE_ID,
            module: "flip",
            function: "bet",
            typeArguments: [],
            arguments: [
              process.env.FLIP,
              process.env.CORE,
              process.env.TREASURY,
              process.env.LOTTERY,
              maxSuiObj,
              String(betAmount),
              betValue.map((number: number) => String(number)),
            ],
            gasBudget: 10000,
          },
        },
      });
      console.log("nft minted successfully!", resData);
      const event = resData?.effects?.events;
      if (event != undefined) {
        console.log(
          event[event?.length - 1]?.moveEvent?.fields?.is_jackpot,
          "events"
        );
        console.log(
          event[event?.length - 1]?.moveEvent?.fields?.jackpot_amount,
          "how many money"
        );
        if (event[event?.length - 1]?.moveEvent?.fields?.is_jackpot) {
          alert("you win the betting!");
        }
        if (event[event?.length - 1]?.moveEvent?.fields?.jackpot_amount) {
          alert(
            `you got ${
              event[event?.length - 1]?.moveEvent?.fields?.jackpot_amount
            }`
          );
        } else {
          console.log("error");
        }
      }
      // if (event != undefined) alert("congrats, your betting comes to you!");
    } catch (e) {
      console.error("nft mint failed", e);
    }
  }
  return (
    <div className="isolate bg-[#050C08]">
      <Head>
        <title>SuinoGame</title>
        <meta name="description" content="Suino" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute bg-[#000] opacity-80 top-0 left-0 w-screen  px-6 py-3 ">
        <div>
          <nav className="" aria-label="Global">
            <div className="flex  lg:min-w-0 lg:flex-1" aria-label="Global">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <Link
                href="/"
                className="pt-3 -m-1.5 p-1.5 text-3xl font-bold text-white text-bold"
              >
                Suino
              </Link>
              <div className="flex w-full lg:flex lg:ml-5 lg:min-w-0 lg:justify-end">
                <Link
                  href="#"
                  className="block py-3 px-4 text-m hover:bg-yellow-800 text-white text-bold rounded-[10px]"
                >
                  DashBoard
                </Link>
                <div></div>
                <div className="flex w-[500px]h-[190px] ">
                  <ConnectButton className="bg-wallet bg-cover content-none w-[300px] bg-black text-[0px]" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="flex-col w-full h-screen text-white bg-gamewrapper  bg-no-repeat bg-cover bg-center ">
          <div className="flex-col  w-full h-3/7 justify-center items-end ">
            <div className="flex justify-center ">
              <div className="flex mt-[120px] ">
                <Coins />
              </div>
            </div>
          </div>
          <div className="flex-col items-center justify-center ">
            <div className="flex text-[30px] w-[300px]h-[50px] mt-5 items-center justify-center font-Diplomata mb-5">
              Bet Currency
            </div>

            <div className="flex w-[300px]h-[190px]  items-center justify-center text-black">
              <div
                className="bg-cover bg-center h-[80px]"
                onClick={() => setSuiValue(suiValue + 5)}
              >
                <Image
                  src="/game/005sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className="px-3 hover:translate-y-1 cursor-pointer "
                />
              </div>
              <div
                className="bg-cover bg-center h-[80px]"
                onClick={() => setSuiValue(suiValue + 10)}
              >
                <Image
                  src="/game/01sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className="px-3 hover:translate-y-1 cursor-pointer"
                />
              </div>
              <div
                className="bg-cover bg-center h-[80px]"
                onClick={() => setSuiValue(suiValue + 25)}
              >
                <Image
                  src="/game/0025sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className="px-3 hover:translate-y-1 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex w-[300px]h-[50px] py-[-10px]  items-center justify-center text-black">
              <div
                className="bg-cover bg-center h-[80px] py-3 "
                onClick={() => setSuiValue(suiValue + 50)}
              >
                <Image
                  src="/game/05sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className=" px-3 hover:translate-y-1 cursor-pointer"
                />
              </div>
              <div
                className="bg-cover bg-center h-[80px] py-3"
                onClick={() => setSuiValue(suiValue + 100)}
              >
                <Image
                  src="/game/1sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className=" px-3 hover:translate-y-1 cursor-pointer"
                />
              </div>
              <div
                className="bg-cover bg-center h-[80px] py-3"
                onClick={() => setSuiValue(suiValue + 200)}
              >
                <Image
                  src="/game/2sui.png"
                  width={150}
                  height={80}
                  alt="btn"
                  className=" px-3 hover:translate-y-1 cursor-pointer"
                />
              </div>
            </div>

            <input className="flex bg-transparent w-14 text-center mt-8" />
            <div className="flex justify-center item-center">
              <div
                className="flex item-center justify-center mx-5 text-[30px] font-Diplomata py-5
              "
              >
                Amount
              </div>
              <input
                className="flex bg-[#1f0c00] w-[200px] py-4 text-center opacity-90 rounded-md ring-black ring-1 shadow-2xl text-[40px] font-Wood"
                value={suiValue / 100 + " " + "SUI"}
              />
              <div
                className="bg-gray-500 cursor-pointer px-3 py-5"
                onClick={() => setSuiValue(0)}
              >
                <span>Reset</span>
              </div>
            </div>
            <div className="flex items-center h-[50px] justify-center ">
              <button onClick={() => handleSignAndExecuteTx(betAmount, [0])}>
                <div className="bg-cover bg-center px-1 py-3  w-[470px] h-[80px] mt-[100px] leading-6  shadow-md">
                  <Image
                    src="/game/bet.png"
                    width={470}
                    height={80}
                    alt="btn"
                    className=" px-3 hover:translate-y-1 cursor-pointer"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
