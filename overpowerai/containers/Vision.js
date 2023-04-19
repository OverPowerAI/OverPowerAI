import Image from "next/image";
import ai from "../public/assets/aboutai.png";

import { Saira } from "next/font/google";
import { Lock, Terminal, TrendingUp } from "react-feather";

const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Vision({ id }) {
  return (
    <div className="md:pt-24 pt-12 pb-12 px-12 md:px-20 flex flex-col text-xl  justify-start  items-start w-screen h-full bg-gradient-to-r from-[#111111] to-[#222222]  bg-cover bg-center ">
      <div className="w-full h-full md:flex items-center justify-center md:p-8 md:gap-3">
        <div id={id} className={saira.className}>
          <div className="order-0">
            <div className="text-2xl md:text-4xl lg:text-5xl text-white w-full flex justify-center ">
              Concepts of Action
            </div>
            <div className="md:flex gap-3 pt-16">
              <div className="text-lg md:text-xl w-full md:w-1/3 md:mt-0 mt-8 lg:text-md flex-col justify-center text-center  items-center text-white p-8 border hover:border-white border-gray-500 ease-in-out duration-200 rounded-lg">
                <div className="flex justify-center items-center pr-6">
                <Terminal size={48} style={{paddingBottom:16}}></Terminal>
                  <div className="text-3xl pl-2 font-extrabold pb-4">
                    Code Analysis
                  </div>
                </div>
                OverpowerAI aims to be the leading platform for security,
                privacy, and innovation in the DeFi space. The platform achieves
                this goal by offering users an all-in-one hub that enables them
                to write and deploy custom smart contracts easily, as well as
                providing AI-powered auditing capabilities that detect potential
                vulnerabilities and prevent scams.
              </div>
              <div className="text-lg md:text-xl w-full md:w-1/3 md:mt-0 mt-8 lg:text-md flex-col justify-center text-center items-center text-white p-8 border hover:border-white border-gray-500 ease-in-out duration-200 rounded-lg">
              <div className="flex justify-center items-center pr-6">
                <Lock size={48} style={{paddingBottom:16}}></Lock>
                  <div className="text-3xl pl-2 font-extrabold pb-4">
                    Security & Privacy
                  </div>
                </div>
                OverpowerAI is committed to ensuring users' privacy and security
                by providing anonymous transaction functionality, privacy mixer,
                and an upcoming privacy DEX. These features ensure that users'
                personal information and transactions remain confidential and
                secure.
              </div>
              <div className="text-lg md:text-xl w-full md:w-1/3 md:mt-0 mt-8 flex-col justify-center text-center items-center lg:text-md text-white p-8 border hover:border-white border-gray-500 ease-in-out duration-200 rounded-lg">
              <div className="flex justify-center items-center pr-6">
                <TrendingUp size={48} style={{paddingBottom:16}}></TrendingUp>
                  <div className="text-3xl pl-2 font-extrabold pb-4">
                    Innovation
                  </div>
                </div>
                Ultimately, OverpowerAI aims to make the DeFi space more
                accessible and secure for users by providing innovative
                solutions that address the most pressing needs of the industry.
                With its commitment to privacy, security, and innovation,
                OverpowerAI seeks to become the go-to platform for DeFi users,
                driving the industry forward and setting new standards for
                excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
