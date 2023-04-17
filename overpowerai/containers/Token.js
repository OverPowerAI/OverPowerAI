import Image from "next/image";
import ai from "../public/assets/aboutai.png";

import { Saira } from "next/font/google";
import { Lock, Terminal, TrendingUp } from "react-feather";

const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Token({ id }) {
  return (
    <div className="md:pt-24 pt-12 pb-12 px-12 md:px-20 flex flex-col text-xl  justify-start  items-start w-screen h-full bg-gradient-to-b from-[#111111] to-[#333333]  bg-cover bg-center ">
      <div className="w-full h-full md:flex items-center justify-center md:p-8 md:gap-3">
        <div  className={saira.className}>
          <div className="order-0">
            <div id={id} className="text-2xl md:text-4xl lg:text-5xl text-white w-full flex justify-center ">
              Tokenomics
            </div>
            <div className="flex gap-3 pt-8 w-full justify-center">
              <div className="text-lg md:text-xl w-full md:w-2/3  md:mt-0 mt-8 lg:text-md flex-col justify-center text-center  items-center text-white p-8   ease-in-out duration-200 ">
                The trade tax on our $OPAI token serves as a revenue stream for
                our project, allows token distribution to incentivize and reward
                contributors, helps to increase the overall value of our token
                by reducing the overall supply, funds community development
                initiatives, and creates a liquidity pool for the token. The
                goal of the project is to create a secure, reliable and valuable
                token for the community, team and investors.
                <div className="pt-8">Total Supply: 1,000,000,000 $OPAI</div>
                <div className="pt-4">Tax Breakdown:
                    <ul>
                        <li>1% Buybacks and burns</li>
                        <li>2% Development</li>
                        <li>2% Marketing</li>
                    </ul>
                </div>
                <div className="md:flex justify-between items-center my-8">
                  <div className="flex flex-col ease-in-out duration-150 justify-center items-center">
                    <div className=" md:w-[200px] md:h-[200px] w-[100px] h-[100px] hover:text-4xl  rounded-full bg-slate-600 hover:bg-slate-200 ease-in-out hover:text-black duration-150 flex items-center justify-center">
                      %5
                    </div>
                    <div className="pt-6 ">Buy Tax</div>
                  </div>
                  <div className="flex flex-col  ease-in-out duration-150 justify-center items-center mt-4">
                    <div className=" md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-full hover:text-4xl bg-slate-600 hover:bg-slate-200 ease-in-out hover:text-black duration-150 flex items-center justify-center">
                      %5
                    </div>
                    <div className="pt-6">Sell Tax</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
