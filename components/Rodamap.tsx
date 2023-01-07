import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <div className="flex justify-center">
      <div
        id="roadmap"
        className="box-border flex-col h-[2200px] w-[1540px]  px-6 pt-6 lg:px-10 justify-center text-white bg-no-repeat bg-roadmap2 bg-cover bg-center "
      >
        <div className="flex-col object-contain ">
          <div className="flex object-cover justify-center  ">
            <div className="flex-col pt-[300px]">
              <div className="my-[50px]">
                <Fade direction="up">
                  <Image
                    src="/landing/card1.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px] mt-[100px]"
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
                    className="mx-[150px]"
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
                    className="mx-[150px]"
                  />
                </Fade>
              </div>
            </div>
            <div className="flex-col pt-[300px]">
              <div>
                <Fade direction="up">
                  <Image
                    src="/landing/card2.png"
                    width={400}
                    height={300}
                    alt="card1"
                    className="mx-[150px]"
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
                    className="mx-[150px] "
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
                    className="mx-[150px] "
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};