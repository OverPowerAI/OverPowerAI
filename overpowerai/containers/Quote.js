import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import ai from "../public/assets/ai.png"
import { Saira } from "next/font/google";
const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Quote({ id }) {
  return (
    <div id={id} className="pt-32  px-12 md:py-80  md:flex text-xl justify-between  md:justify-start md:items-center w-screen h-screen bg-hero bg-cover bg-center ">
      <div className=" w-full h-full flex items-end md:mb-0 pb-48 md:items-start    text-black justify-center">
        <div className={saira.className}>
          <div className="flex flex-col mb-0 md:mb-20">

            <div className=" text-3xl md:leading-[68px] text-center drop-shadow-2xl md:text-[60px] text-white font-bold">"Blockchain is the ultimate tool for security, but security is only as strong as its weakest link." <br></br>- Changpeng Zhao</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
