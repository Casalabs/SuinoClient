import Link from "next/link";

export const HomeComponent = () => {
  return (
    <div id="Home" className="flex">
      <div className="flex-col w-full h-full items-center justify-center">
        <div className="flex items-center w-full h-screen justify-center bg-firstbg  bg-no-repeat 2xl:bg-cover xl:bg-cover sm:bg-contain 2xl:mt-0 xl:mt-0 md:mt-0 sm:mt-[80px] m-auto">
          <div className="2xl:mb-[150px] sm:mb-0">
            <div className=" flex-col 2xl:ml-11 sm:ml-0  w-full h-auto ">
              <h1 className="2xl:text-[9rem] sm:text-[4rem] flex font-bold tracking-tight sm:text-center text-white font-serif items-center  justify-center ">
                Suino
              </h1>
              <h2 className="text-[2.2rem] text-white sm:text-center font-Diplomata italic  flex items-center  justify-center">
                Who the best Rich Boss?
              </h2>
              <div className="h-[50px] mt-8 gap-x-5 sm:justify-center flex items-center  justify-center">
                <Link
                  href="game"
                  className="flex justify-center items-center rounded-lg bg-yellow-600 px-4 py-3 text-[20px]  leading-7 text-white shadow-sm  hover:bg-yellow-800"
                >
                  Launch app
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
