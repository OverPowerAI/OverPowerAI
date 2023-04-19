import Road from "@/components/Road";

export default function Roadmap() {
  return (
    <div className="pt-32 pl-20  gap-4 grid grid-cols-2  justify-between text-xl items-center w-full h-full bg-gradient-to-t from-[#111111] to-[#333333] bg-cover bg-center">
      <div className="flex flex-col pr-20 pb-12">
        <div className="text-2xl py-2 text-white">
          OverPowerAI Launch Phase (Q1):
        </div>
        <Road
          name="Release"
          desc="the AI smart contract auditor to the public"
        ></Road>
        <Road desc="the $OPAI token on the BSC network" name="Launch"></Road>
        <Road
          desc="training and support to developers and investors using the auditor"
          name="Offer"
        ></Road>
        <Road
          name="Introduce"
          desc="the Privacy Mixer feature, allowing users to mix their transactions for added privacy and security"
        ></Road>
      </div>
      <div className="flex flex-col pb-12">
        <div className="text-2xl py-2 text-white">
        OverPowerAI Adoption Phase (Q2):
        </div>
        <Road
          name="Increase"
          desc="marketing efforts to attract more developers and investors to use the auditor"
        ></Road>
        <Road
          desc="Build partnerships and collaborations with other blockchain companies and projects to increase the reach and impact of the ecosystem"
          name="Build"
        ></Road>
        <Road
          name="Conduct"
          desc="further marketing campaigns to increase user adoption"
        ></Road>
         <Road
          name="Roll out "
          desc="updates to increase reliability and accuracy of the AI auditor"
        ></Road>
      </div>
      <div className="flex flex-col pb-12">
        <div className="text-2xl py-2 text-white">
        OverPowerAI Expansion Phase (Q3):
        </div>
        <Road
          name="Update and improve "
          desc="ecosystem dApps based on user feedback and new developments in the blockchain space continuously"
        ></Road>
        <Road desc="the AI bot that front-runs suspicious transactions to avoid getting rugpulled" name="Introduce "></Road>
        <Road
          desc="governance platform for the $OPAI token holders to vote on proposals and participate in decision-making"
          name="Launch "
        ></Road>
        <Road
          name="Explore "
          desc="new use cases and applications for the technology"
        ></Road>
      </div>
      <div className="flex flex-col pb-12">
        <div className="text-2xl py-2 text-white">
        OverPowerAI Maturity Phase (Q4):
        </div>
        <Road
          name="Keep improving "
          desc="all our dApps and add new features continuously"
        ></Road>
        <Road desc="the all-in-one AI-powered Developer Hub for smart contract creation, deployment and testing" name="Launch "></Road>
        <Road
          desc=" opportunities on other chains"
          name="Explore"
        ></Road>
        <Road
          name="Monitor and analyze "
          desc="the market trends and adapt to them"
        ></Road>
      </div>
    </div>
  );
}
