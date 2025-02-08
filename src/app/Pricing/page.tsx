import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
    return (<div className="w-[1440px] h-[3634px] bg-[#FFFFFF] top-[-12625px] left-[9120px]">
<div className="w-[1440px] h-[1162px] bg-[#FAFAFA]">
    <div className="w-[1050px] h-[1600px] ml-[59px] pt-[112px] pb-[112px]">
        <div className="w-[1200px] mx-auto h-[384px] bg-[#FFFFFF] ml-[59px]">
        <div className="flex flex-row justify-center items-center w-[1300px] h-[91px] ">
          <div className="justify-center items-center flex flex-row w-[1322px] h-[91px]  ">
            <Image
              src="/Bandage.png"
              alt="logo"
              width={108}
              height={32}
              className="w-[108px] h-[32px] mt-[20px] mr-[150px] "
            />
            <div className="flex flex-row w-[815px] h-[58px] mt-[20px] ml-[100px] items-center justify-center">
              <div className="flex flex-row mr-[20p] w-[257px] h-[24px]  gap-[21px]  font-bold text-[#959595]">
                <Link href="/">Home</Link>
                <Link href="/Page2">Product</Link>
                <Link href="/">Pricing</Link>
                <Link href="/Contact">Contact</Link>
              </div>

              <div className="flex flex-row font-bold items-center justify-center w-[300px] h-[52px] ml-[230px] gap-[45px]">
                <h1 className="w-[41px] h-[22px] text-[#23A6F0]">Login</h1>
                <button className="w-[214px] h-[52px] bg-[#23A6F0] text-white rounded">
                  Become a member
                </button>
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