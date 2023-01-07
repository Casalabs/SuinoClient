import Link from "next/link";

export const HomeComponent = () => {
  return (
    <div className="flex">
      <div
        id="home"
        className="flex-col w-screen h-[90%]  bg-firstbg bg-no-repeat  bg-cover bg-center"
      >
        <div className="flex items-center w-full h-screen justify-center">
          <div className="mb-[150px]">
            <div className=" flex-col ml-11  w-128 h-auto ">
              <h1 className="text-[150px] font-bold tracking-tight sm:text-center text-white font-serif ">
                Suino
              </h1>
              <h2 className="text-[2.2rem] text-white sm:text-center font-Diplomata italic ">
                Who the best Rich Boss?
              </h2>
              <div className="h-[50px] mt-8 flex gap-x-5 sm:justify-center">
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
