import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import ai from "../public/assets/ai.png"
import { Saira } from "next/font/google";
import { ArrowLeft, ArrowRight, CheckSquare, Lock, Terminal, TrendingUp } from "react-feather";
const saira = Saira({ weight: "400", subsets: ["latin"] });
import styles from "../styles/Hero.module.css";

export default function Hero({ id }) {
  return (
    <div id={id} className="pt-32 px-20 md:py-80  md:flex text-xl justify-between md:justify-start md:items-center w-screen h-screen bg-hero1 bg-cover bg-center ">
      <div className="w-full h-1/2 md:h-full flex items-center text-black justify-center">
        <div className={saira.className}>
          <div className="flex flex-col mb-0 md:mb-20 text-white">
            <div className="text-sm md:text-md font-light py-4">GREETINGS FROM THE AI ERA!</div>
            <div className="text-5xl md:text-[80px] font-bold">OverPower<span className="text-[#36d2dc]">AI</span></div>
            <div className="text-xl md:text-3xl py-8">AI Protects You From Threats</div>
            <div className="flex w-full items-center gap-3"><Lock></Lock>
            <ArrowRight></ArrowRight>
            <CheckSquare></CheckSquare>
            <ArrowRight></ArrowRight>
            
            <TrendingUp></TrendingUp>
            </div>
            <div className="text-sm md:text-lg font-light py-4">YOU ARE SAFE WITH US !</div>
            
          </div>
        </div>
      </div>
      <div className="w-full  md:h-full  flex items-center justify-center">
        
      </div>
    </div>
  );
}
