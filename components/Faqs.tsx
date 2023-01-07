import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export const Faqs = () => {
  const fqas = [
    {
      id: "1",
      text: "Q. What is SUINO?",
      phrase:
        "A. SUINO is a pig PFP NFT project based on a story based on George Orwell's Animal Farm. These pigs are mafias, violent and picky, but they love gambling and are more serious than anyone else when it comes to gambling.",
      phraseOpen: false,
    },
    {
      id: "2",
      text: "Q. Where is the SUINO community channel?",
      phrase:
        "A. SUINO is a mafia pig organization. Soon there will be a channel to enter the organization confidentially and confidentially.",
      phraseOpen: false,
    },
    {
      id: "3",
      text: "Q. When will SUINO be released?",
      phrase:
        "A. The Mafia Pig Organization continues to await its time. In time, the organization will move and land on the Sui network.",
      phraseOpen: false,
    },
    {
      id: "4",
      text: "Q. What are the benefits of SUINO?",
      phrase:
        "A. SUINO is more fair and serious than anyone else to gamble. They will continue to provide special opportunities to members of the organization, sharing all profits. And then... You may look forward to it.",
      phraseOpen: false,
    },
    {
      id: "5",
      text: "Q. What is SUINO's vision?",
      phrase:
        "A. Suino's vision is an NFT brand that has a powerful Dapp in Sui Network. The goal is not just to be a PFP, but to be a brand that can share everything with SUINO members.",
      phraseOpen: false,
    },
  ];

  const [isClicked, setIsClicked] = useState(fqas);
  const change = (index: any) => {
    let a = isClicked.slice();
    a[index].phraseOpen = !a[index].phraseOpen;
    setIsClicked(a);
    // console.log(
    //   isClicked.filter((e) => e.phraseOpen == true),
    //   "true"
    // );
    // console.log(
    //   isClicked.filter((e) => e.phraseOpen == false),
    //   "false"
    // );
  };
  console.log(isClicked, "is");

  return (
    <div className="flex-col w-4/5 h-screen justify-center item-center">
      <div className="h-2/3">
        <div className="flex justify-center mt-[200px] ">
          <p className="text-[5rem] font-bold  ">FAQ</p>
        </div>
        <div className="h-full flex-col justify-center item-center">
          {isClicked.map((q, index) => {
            const clickClass = q.phraseOpen ? "display text-sm" : "hidden ";
            const ansClass = `${clickClass} p-4 text-xl font-serif`;
            return (
              <div
                key={index}
                className="shadow rounded border border-gray-100 border-t-0 cursor-pointer"
                onClick={(e) => change(index)}
              >
                <div className="p-4  text-xl relative font-medium">
                  <div key={q.id} className="w-5/6 text-2xl ">
                    {q.text}
                  </div>
                  <button
                    aria-label="question-expander"
                    className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
                  >
                    {q.phraseOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} className="w-5" />
                    ) : (
                      <FontAwesomeIcon icon={faChevronUp} className="w-5" />
                    )}
                  </button>
                  <div className={ansClass}>{q.phrase}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {" "}
        <div className=" h-1/3 flex-col justify-center bottom-0 ">
          <div className="flex cursor h-full w-auto justify-center items-center ">
            <Link
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray "
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-white text-[30px]"
              />
            </Link>
            <Link
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 "
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white  text-[30px]"
              />{" "}
            </Link>

            <Link
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 "
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white  text-[30px]"
              />{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center py-5">
            {/* <Image
              src="/logowhite.png"
              width={100}
              height={100}
              className=""
              alt=" Logo"
            /> */}
            <span>Made by casaLabs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
