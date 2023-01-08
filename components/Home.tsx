import Link from "next/link";

export const HomeComponent = () => {
  return (
    <div className="flex">
      <div
        id="home"
        className="flex-col w-full h-[90%] items-center justify-center"
      >
        <div className="flex items-center w-full h-screen justify-center bg-firstbg  bg-no-repeat bg-cover m-auto">
          <div className="mb-[150px]">
            <div className=" flex-col ml-11  w-full h-auto ">
              <h1 className="text-[7em]  flex font-bold tracking-tight sm:text-center text-white font-serif items-center  justify-center ">
                Suino
              </h1>
              <h2 className="text-[2.2rem] text-white sm:text-center font-Diplomata italic  flex items-center  justify-center">
                Who the best Rich Boss?
              </h2>
              <div className="h-[50px] mt-8 gap-x-5 sm:justify-center flex items-center  justify-center">
                <Link
                  href="game"
                  className="flex justify-center items-center rounded-lg bg-yellow-600 px-4 py-1.5 text-[20px]  leading-7 text-white shadow-sm  hover:bg-yellow-800"
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
