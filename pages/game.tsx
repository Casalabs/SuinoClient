import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import Coins from "../components/Coin";
import { ConnectButton, WalletProvider } from "@suiet/wallet-kit";
import { useWallet, ConnectModal } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from "@mysten/sui.js";
import Link from "next/link";
import { WalletAccount } from "@wallet-standard/base";
import useSound from "use-sound";
import Animation from "../components/Animaiton";
import { DashBoard } from "../components/DashBoard";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import Button3 from "../components/Button3";
export async function getServerSideProps() {
  const initialData = await fetch("http://34.125.37.158:3306").then((x) =>
    x.json()
  );
  return { props: { data: initialData } };
}
const GamePage = (props: any) => {
  const [data, setData] = useState<
    {
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
  >(props.data);
  useEffect(() => {
    fetch("http://34.125.37.158:3306")
      .then((x) => x.json())
      .then((x) => setData(x));
  }, []);
  console.log(data, "data");
  const {
    select, // select
    configuredWallets, // default wallets
    detectedWallets, // Sui-standard wallets detected from browser env
    allAvailableWallets, // all the installed Sui-standard wallets
    connected,
    getAccounts,
    signAndExecuteTransaction,
  } = useWallet();
  const [dash, setDash] = useState(false);
  const [dashData, setDashData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [CoinBetValue, setCoinValue] = useState([0]);
  const [tx, setTx] = useState(false);
  const provider = new JsonRpcProvider(Network.DEVNET);
  const [suiValue, setSuiValue] = useState(0);
  const betAmount = suiValue * 10000;
  const [moneyPlay] = useSound("/game/music/money.mp3");
  const [betPlay] = useSound("/game/music/bet.mp3");

  let currentWallet: readonly WalletAccount[] | { address: string }[] = [];
  if (connected) {
    currentWallet = getAccounts();
  }

  const handleSignAndExecuteTx = async (betAmount: number, betValue: any) => {
    if (!connected) return;
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
    let betV = betValue.map((number: number) => String(number));
    console.log(betV);
    try {
      console.log(currentWallet[0].address, "wallet");
      const resData = await signAndExecuteTransaction({
        transaction: {
          kind: "moveCall",
          data: {
            packageObjectId: "0x4f8dc8c373defb2554f52f07655d9f3369ae9f7e",
            module: "flip",
            function: "bet",
            typeArguments: [],
            arguments: [
              //FlIP
              //process.env.FLIP,
              "0xea16d1959559ed0755c8221b46e708b727d39a90",
              //CORE
              // process.env.CORE,
              "0x45109ae0c42c417403668eab9ee28237cd8810ff",
              //TREASURY
              // process.env.TREASURY,
              "0xf84d8819dd9f7c3ac7cb91de134f5dddfdb7c4e3",
              //LOTTERY
              // process.env.LOTTERY,
              "0x5d8ab8bd872288f0cefe0f9a7f5a3243ef0dc0b5",
              String(maxSuiObj),
              String(betAmount),
              betV,
            ],
            gasBudget: 10000,
          },
        },
      });
      console.log("betting successfully!", resData);
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
          setTimeout(() => alert("you win the betting!"), 1100);
          if (event[event?.length - 1]?.moveEvent?.fields?.jackpot_amount) {
            setTimeout(
              () =>
                alert(
                  `you got ${
                    event[event?.length - 1]?.moveEvent?.fields?.jackpot_amount
                  }`
                ),
              1100
            );
          }
        } else {
          setTimeout(() => alert("you lose the betting!"), 1100);
        }
      }
    } catch (e) {
      console.error("betting failed", e);
    }
  };
  useEffect(() => {
    setTimeout(() => setTx(false), 8000);
  }, [tx]);

  return (
    <div className="isolate bg-[#050C08]">
      <Head>
        <title>SuinoGame</title>
        <meta name="description" content="Suino" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      {connected ? (
        <>
          {" "}
          <div className="fixed  opacity-80 top-0 left-0 w-screen  px-6 pb-[4rem] pt-3 overflow-auto ">
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
                    <div
                      onClick={() => setDash(!dash)}
                      className="block py-2.5 px-4 mx-3 text-m bg-yellow-800 text-white text-bold rounded-[15px] cursor-pointer"
                    >
                      DashBoard
                    </div>

                    <div></div>
                    <div className="flex w-[500px]h-[190px]opacity-100 z-99 ">
                      <ConnectButton className="opacity-100 z-99" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div
            className={`w-full h-screen text-white bg-gamewrapper  bg-no-repeat bg-cover bg-center justify-center item-center overflow-y-auto overflow-x-auto  ${
              tx ? "flex" : "hidden"
            }`}
          >
            <Animation />
          </div>
          <div className="flex w-full 2xl:h-screen xl:h-screen sm:h-full overflow-auto z-0">
            <div
              className={`w-full 2xl:h-screen xl:h-screen sm:h-full text-white bg-gamewrapper  bg-no-repeat bg-cover bg-center ${
                tx ? "hidden" : "flex-col"
              }`}
            >
              {" "}
              <div className={` ${dash ? "flex" : "hidden"}`}>
                <DashBoard data={data} />
              </div>
              <div className="flex-col  w-full h-3/7 justify-center items-end ">
                <div className="flex justify-center ">
                  <div className="flex mt-[120px] ">
                    <Coins setCoinV={setCoinValue} />
                  </div>
                </div>
              </div>
              <div className="flex-col items-center justify-center ">
                <div className="flex text-[30px] w-[300px]h-[50px] mt-5 items-center justify-center font-Diplomata mb-5">
                  Bet Currency
                </div>

                <div className="flex w-[300px]h-[190px] items-center justify-center text-black">
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px]"
                    onClick={() => {
                      setSuiValue(suiValue + 1);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/001Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/001Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px]"
                    onClick={() => {
                      setSuiValue(suiValue + 5);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/005Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/005Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px]"
                    onClick={() => {
                      setSuiValue(suiValue + 10);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/01Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/01Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                </div>
                <div className="flex w-[300px]h-[50px] py-[-10px]  items-center justify-center text-black">
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px] py-3 "
                    onClick={() => {
                      setSuiValue(suiValue + 50);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/05Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/05Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px] py-3"
                    onClick={() => {
                      setSuiValue(suiValue + 100);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/1Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/1Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                  <div
                    className="bg-cover bg-center 2xl:h-[80px]  xl:h-[80px] sm:h-[40px] py-3"
                    onClick={() => {
                      setSuiValue(suiValue + 500);
                      moneyPlay();
                    }}
                  >
                    <Image
                      src="/game/valueBtn/5Mist.png"
                      width={150}
                      height={80}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer 2xl:block xl:block sm:hidden "
                    />
                    <Image
                      src="/game/valueBtn/5Mist.png"
                      width={100}
                      height={40}
                      alt="btn"
                      className="px-3 hover:translate-y-1 cursor-pointer  2xl:hidden xl:hidden sm:block "
                    />
                  </div>
                </div>

                <div className="flex-col justify-center item-center h-auto w-full mt-9">
                  <div
                    className="2xl:flex xl:flex sm:flex-col item-center justify-center mx-5 2xl:text-[30px] xl:text-[30px] sm:text-[20px]  py-0
              "
                  >
                    <span className="flex justify-center font-Diplomata pt-3">
                      Amount
                    </span>
                    <span className="flex justify-center font-Diplomata text-sm text-gray">
                      Mist is a small unit of sui.
                    </span>

                    <div className="flex justify-center">
                      <input
                        className="flex bg-[#1f0c00] text-center   opacity-90 rounded-md ring-black ring-1  2xl:text-[40px] xl:text-[40px] sm:text-[20px] font-Wood"
                        value={suiValue / 100 + " " + "mMist"}
                      />
                    </div>
                    <div className="flex justify-center items-center py-3">
                      <div
                        className="flex  items-center justify-center bg-reset bg-cover cursor-pointer h-auto w-[8rem] rounded-md px-3 py-8 hover:translate-y-1"
                        onClick={() => setSuiValue(0)}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center h-[50px] justify-center ">
                  <div className="bg-cover bg-center px-1 py-3  2xl:w-[470px] 2xl:h-[80px] xl:w-[470px] xl:h-[80px] 2xl:mt-[20px] xl:mt-[20px] sm:mt-[20px] leading-6  shadow-md hover:translate-y-1">
                    <Image
                      src="/game/bet.png"
                      width={470}
                      height={80}
                      alt="btn"
                      className=" px-3 hover:translate-y-1 cursor-pointer"
                      onClick={() => {
                        handleSignAndExecuteTx(betAmount, CoinBetValue);
                        console.log(CoinBetValue, "coinBetValue");
                        betPlay();

                        setTx(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="fixed  opacity-80 top-0 left-0 w-screen  px-6 pb-[4rem] pt-3 overflow-auto ">
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
                    <div
                      onClick={() => setDash(!dash)}
                      className="flex  py-2.5 px-4 ml-[100px] text-m bg-yellow-800 text-white text-bold rounded-[15px] cursor-pointer"
                    >
                      DashBoard
                    </div>
                    <div></div>
                    <div className="flex w-[500px]h-[190px]opacity-100 z-99 2xl:flex xl:flex sm:hidden">
                      <Button2 />
                    </div>
                  </div>
                </div>
              </nav>
              <div
                className={` ${
                  dash ? "flex text-white bg-[rgb(0,0,0,0.5)] " : "hidden"
                }`}
              >
                <DashBoard data={data} />
              </div>
            </div>
          </div>
          <div className="flex w-full h-screen overflow-y-auto overflow-x-auto z-0">
            <div className="w-full h-screen text-white bg-gamewrapper  bg-no-repeat bg-cover bg-center ">
              <div className="flex-col items-start h-screen justify-center mt-[100px] ">
                <span className="flex 2xl:text-[9rem] sm:text-[4rem]  font-bold tracking-tight sm:text-center text-white font-serif justify-center">
                  SUINO FLIP
                </span>
                <div className="flex justify-center">
                  <div className="flex-col item-center ">
                    <div className="flex justify-center">
                      <Image
                        src="/game/CoinHead.png"
                        width={280}
                        height={280}
                        alt="coin"
                        className=" 2xl:block xl:block"
                      />
                    </div>
                    <div className="flex justify-center bg-cover bg-center px-1 py-3  2xl:w-[470px] 2xl:h-[80px] xl:w-[470px] xl:h-[80px] leading-6  shadow-md ">
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GamePage;
