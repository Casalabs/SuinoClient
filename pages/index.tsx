/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import Link from "next/link";

import Head from "next/head";
import { Faqs } from "../components/Faqs";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { NavBar } from "../components/Navbar";
import { HomeComponent } from "../components/Home";
import { Feature } from "../components/Feture";
import { Roadmap } from "../components/Rodamap";

const Home = () => {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const handleClick = () => {
    setIsClicked(false);
    console.log("click");
  };
  return (
    <div className="bg-black ">
      <Head>
        <title>Suino</title>
        <meta name="description" content="Suino" />
      </Head>
      {isClicked ? (
        <div>
          <div className="flex items-center justify-center w-full h-screen">
            <div className="absolute top-0 left-0 bottom-0 right-0 w-screen bg-cover bg-mainwrapper opacity-50 z-0"></div>
            <button
              onClick={handleClick}
              className=" text-[4rem] text-white bg-opacity-100 font-serif opacity-100 text-bold justify-center z-20 "
            >
              ENTER THE SUINO
            </button>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
          <ReactFullpage
            navigation
            licenseKey={"U04K9-ZTA9I-XQJ2J-L53PK-YJCTN"}
            scrollingSpeed={500}
            anchors={["Home", "Story", "Roadmap", "Seven", "faq"]}
            render={(_comp) => (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <HomeComponent />
                </div>
                <div className="section">
                  <Feature />
                </div>
                <div className="section">
                  <Roadmap />
                </div>
                <div className="section">
                  <div className="flex justify-center">
                    <div
                      id="seven"
                      className="flex-col h-[750px] w-full px-6 pt-6 lg:px-10 justify-center text-white bg-no-repeat bg-Comments bg-contain  bg-center"
                    />
                  </div>
                </div>
                <div className="section">
                  <div
                    id="qna"
                    className="flex-col w-full h-screen  px-6 pt-6 lg:px-10 justify-center text-white  bg-cover md:bg-none bg-brandbackground"
                  >
                    <Faqs />
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      )}
    </div>
  );
};
export default Home;
