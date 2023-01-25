import { PullValueState, WebsocketState } from "../atoms/FlipAtom";
import { useRecoilValue } from "recoil";
import { Datas } from "./Dash";

export const FullAmount = (props: any) => {
  const dash = useRecoilValue(WebsocketState);
  console.log(dash[0]?.poolbalance);
  return (
    <div className="flex bg-yellow-600 w-[280px] rounded-lg">
      <div className="block py-2.5 px-4 mx-1 text-white">{`Live pool :`}</div>
      <div className="block py-2.5 px-2 mx-1 text-white">
        {/* {Datas ? ` ${Number(dash[0]?.poolbalance) / 1000000000} Sui` : null} */}
        {`${778380386 / 1000000000} Sui`}
      </div>
    </div>
  );
};
