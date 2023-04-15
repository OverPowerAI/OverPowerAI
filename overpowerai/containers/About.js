import Image from "next/image";
import ai from "../public/assets/aboutai.png";

import { Saira } from "next/font/google";

const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function About({ id }) {
  return (
    <div className="md:pt-16 pb-12 px-12 md:px-20 flex flex-col text-xl  justify-start  items-start w-screen h-full bg-white  bg-cover bg-center ">
      <div className="w-full h-full md:flex items-center justify-center md:p-8 md:gap-3">
        <div className="w-full flex justify-center ">
          <Image src={ai} className="md:min-w-[300px] w-[300px] py-12 "></Image>
        </div>
        <div id={id} className={saira.className}>
          <div className="order-0">
            <div className="text-2xl md:text-4xl lg:text-5xl text-black md:pl-12 ">
              ABOUT
            </div>
            <div className="text-lg md:text-xl lg:text-md text-black pt-8 md:pl-12 ">
              OverpowerAI is a revolutionary platform that offers a
              comprehensive suite of tools to protect users from scams and
              ensure the security of their transactions on the BSC network. The
              platform includes an AI-powered smart contract auditor and a
              privacy mixer, and is working on developing a privacy DEX, an
              all-in-one hub for writing custom smart contracts, and an AI bot
              that can detect and front-run suspicious transactions to prevent
              scams. <br></br>
              <br></br>
              With its focus on privacy, security, and accessibility,
              OverpowerAI is quickly becoming the top choice for users who want
              to ensure the safety and privacy of their transactions on the BSC
              network. As more organizations adopt blockchain technology, the
              need for secure and reliable smart contract solutions will
              continue to increase. Investors who choose to invest in
              OverpowerAI may potentially see significant returns.
              <br></br>
              <br></br>
              In addition to providing a valuable service to investors,
              OverpowerAI has the potential to lead to more mainstream adoption
              of blockchain technology. As smart contracts become more secure,
              organizations and individuals will be more likely to use them for
              various applications, from financial transactions to supply chain
              management. This could create new opportunities for businesses and
              individuals, and drive mainstream adoption of blockchain
              technology. <br></br>
              <br></br>Overall, OverpowerAI is a promising technology that
              has the potential to drive mainstream adoption of blockchain
              technology while also benefiting investors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
