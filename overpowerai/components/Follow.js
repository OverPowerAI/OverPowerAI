import { SocialIcon } from "react-social-icons";



export default function Follow(){
    return(
        <div className="flex md:flex-col absolute p-4 md:p-8 md:justify-center gap-3 h-screen w-screen text-white">
            <SocialIcon url="https://twitter.com/OverPowerAI2023" network="twitter" bgColor="#000000" fgColor="#36d2dc"/>
            <SocialIcon url="https://t.me/overpowerai" network="telegram" bgColor="#000000" fgColor="#36d2dc"/>
            <SocialIcon url="https://medium.com/@overpowerai" network="medium"bgColor="#000000" fgColor="#36d2dc" />
        </div>

    );
}