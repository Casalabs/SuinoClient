import { Datas } from "./Dash";

export const FullAmount = () => {
  let Full = Datas[Datas.length - 1].poolbalance;
  console.log(Full);
  return (
    <div className="flex bg-yellow-600 w-[280px] rounded-lg">
      <div className="block py-2.5 px-4 mx-1 text-white">{`Live pool :`}</div>
      <div className="block py-2.5 px-2 mx-1 text-white">
        {` ${Number(Full) / 1000000000} Sui`}
      </div>
    </div>
  );
};
