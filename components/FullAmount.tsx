import { PullValueState } from "../atoms/FlipAtom";
import { useRecoilValue } from "recoil";

export const FullAmount = () => {
  const pullbalance = useRecoilValue(PullValueState);
  console.log(pullbalance);
  return (
    <div className="flex bg-yellow-600 w-[280px] rounded-lg">
      <div className="block py-2.5 px-4 mx-1 text-white">{`Live pool :`}</div>
      <div className="block py-2.5 px-2 mx-1 text-white">
        {` ${Number(pullbalance) / 1000000000} Sui`}
      </div>
    </div>
  );
};
