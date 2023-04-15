import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import ai from "../public/assets/ai.png"
import { Saira } from "next/font/google";
const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div id={id} className="pt-32 px-12 md:py-80  md:flex text-xl justify-between md:justify-start md:items-center w-screen h-screen bg-white bg-cover bg-center ">
      <div className="w-full h-1/2 md:h-full flex items-center text-black justify-center">
        <div className={saira.className}>
          <div className="flex flex-col mb-0 md:mb-20">
            <div className="text-sm md:text-md font-light py-4">GREETINGS FROM THE AI ERA!</div>
            <div className="text-5xl md:text-[80px] font-bold">OverPowerAI</div>
            <div className="text-xl md:text-3xl py-8">AI Protects You From Threats</div>
          </div>
        </div>
      </div>
      <div className="w-full  md:h-full  flex items-center justify-center">
        <Image src={ai} className="w-[600px] md:w-[3000px]"></Image>
      </div>
    </div>
  );
}
