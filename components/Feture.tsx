import Image from "next/image";
export const Feature = () => {
  return (
    <div className="flex-col mt-[100px]">
      <div className="2xl:block xl:block lg:block sm:hidden bg-mainwrapper flex-col items-center justify-center  bg-center bg-no-repeat 2xl:bg-cover xl:bg-cover lg:bg-cover xl:h-screen z-0 sm:bg-contain">
        <div className="flex-col w-2/3 text-white  py-[100px] px-[40px]">
          <div className="bg-[rgba(0,0,0,0.7);] px-[50px] py-6 mb-[100px]">
            <div className="flex text-[30px] text-[#fff] font-serif opacity-100 pb-6 justify-center z-20 hover:text-white py-3">
              SUINO is the story of the lives of pigs who live like humans mixed
              with people from George Orwell's Animal Farm. Influenced by
              Italy's "mafia" culture, they are pigs who live by their
              lifestyles and values and have named their organization "SUINO,"
              which ßmeans pig in Italian.
            </div>
            <div className="flex  text-[30px] text-[#fff] font-serif opacity-100 pb-6 justify-center z-20 hover:text-white  py-3">
              They are rough and violent, but they are determined and thorough
              in Gamble. There is no cheating or manipulation in the gamble they
              run. Those who break this rule, even if they are of the same kind,
              are brutally treated. A reasonable reward is given for the winner
              of the game, and a definite cost is collected for the loser.
            </div>
            <div className=" flex text-[30px] text-[#fff] font-serif opacity-100  justify-center z-20 hover:text-white  py-3">
              Thanks to this, SUINO has built up its brand and wealth,
              consistently running a gaming arena and being praised as the best
              platform for gamers. SUINO is now landing on blockchain platform
              Sui to join them to build the world's best gaming platform without
              boundaries.
            </div>
          </div>
        </div>
      </div>
      <div
        className="
bg-[rgba(0,0,0,0.5);] flex-col w-full text-white  z-10 2xl:mt-[80px]  h-screen 2xl:hidden xl:hidden lg:hidden sm:flex-col"
      >
        <Image
          src="/landing/wrapper.png"
          width={400}
          height={300}
          alt="feature"
        />
        <p className="text-[40px] px-12">Suino</p>
        <div className="px-12 text-[15px] text-[#fff] font-serif opacity-100  justify-center z-20 hover:text-white py-3 2xl:hidden md:block">
          SUINO is the story of the lives of pigs who live like humans mixed
          with people from George Orwell's Animal Farm. Influenced by Italy's
          "mafia" culture, they are pigs who live by their lifestyles and values
          and have named their organization "SUINO," which means pig in Italian.
        </div>
        <div className=" px-12 text-[15px] text-[#fff] font-serif opacity-100  justify-center z-20 hover:text-white  py-3">
          They are rough and violent, but they are determined and thorough in
          Gamble. There is no cheating or manipulation in the gamble they run.
          Those who break this rule, even if they are of the same kind, are
          brutally treated. A reasonable reward is given for the winner of the
          game, and a definite cost is collected for the loser.
        </div>
        <div className=" px-12 text-[15px] text-[#fff] font-serif opacity-100  justify-center z-20 hover:text-white  py-3">
          Thanks to this, SUINO has built up its brand and wealth, consistently
          running a gaming arena and being praised as the best platform for
          gamers. SUINO is now landing on blockchain platform Sui to join them
          to build the world's best gaming platform without boundaries.
        </div>
      </div>
    </div>
  );
};
