import { Saira } from "next/font/google";
const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Road({ name, desc,index }) {
  return (
    <div className="flex">
      <div className={saira.className}>
        <div className="w-full flex flex-col h-full  items-start justify-center  ">
          <div className="flex items-center justify-center rounded-lg py-1 bg-gradient-to-l from-[#111111] to-[#333333]">
            <div className="rounded-full w-8 h-8 bg-[#36d2cd] flex justify-center items-center">{index}</div>
            <div className="text-white pl-4 pr-4 text-[18px]">{name}</div>
          </div>
          <div className="w-full text-[#AAAAAA] py-3 pl-8 pr-4 text-sm ">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
