import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <div className="flex justify-center" id="Roadmap">
      <div className="  2xl:block xl:block lg:block sm:hidden box-border flex-col  h-[2200px] w-[1540px]  px-6 pt-6 lg:px-10 justify-center text-white bg-no-repeat bg-roadmap2 bg-cover bg-center ">
        {" "}
        <div className="flex-col object-contain ">
          <div className="flex object-cover justify-center  ">
            <div className="flex-col pt-[400px]">
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card1.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] mt-[100px] h-auto"
                  />
                </Fade>
              </div>
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card3.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] h-auto"
                  />
                </Fade>
              </div>
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card5.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] h-auto"
                  />
                </Fade>
              </div>
            </div>
            <div className="flex-col pt-[400px] h-auto">
              <div>
                <Fade direction="up">
                  <Image
                    src="/landing/card2.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] h-auto"
                  />
                </Fade>
              </div>
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card4.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] h-auto "
                  />
                </Fade>
              </div>
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card6.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] h-auto "
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border 2xl:hidden xl:hidden lg:hidden sm:flex-col w-full h-[1635px]  px-6 pt-6 lg:px-10 justify-center text-white bg-no-repeat bg-roadEmpty bg-auto bg-center">
        <div className="flex justify-center text-black text-[40px] mt-[50px] font-Wood font-bold">
          Suino RoadMap
        </div>
        <div className="flex-col object-contain  ">
          <div className="flex-col object-cover justify-center  ">
            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard1.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=" "
                />
              </Fade>
            </div>
            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard2.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=""
                />
              </Fade>
            </div>
            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard3.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=""
                />
              </Fade>
            </div>

            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard4.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=""
                />
              </Fade>
            </div>
            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard5.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=" "
                />
              </Fade>
            </div>
            <div className="flex justify-center">
              <Fade direction="left">
                <Image
                  src="/landing/mCard6.png"
                  width={320}
                  height={300}
                  alt="card1"
                  className=" "
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
