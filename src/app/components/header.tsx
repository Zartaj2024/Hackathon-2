import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, Search, User, ShoppingCart } from "lucide-react";
import EditorPick from "../components/EditorPick";

const Header = () => {
  return (
    <div className="bg-white w-[1439px] h-[136px]">
      <div className="bg-[#252B42] w-[1439px] h-[58px] justify-center items-center">
        <div className="w-[1438px] h-[46px] pt-[9px] pl-[2px] justify-center items-center">
          <div className=" w-[1438px] h-[46px] justify-space-between">
            <div className=" bg-[#252B42] flex flex-row w-[1438px] h-[46px] justify-between pl-[24px] pr-[24px]">
              <div className="flex justify-center text-center w-[415px] h-[46px] gap-[10px]">
                <div className="flex justify-center text-center   w-[145px] h-[44px] rounded-[5px] p-[10px] gap-[5px]">
                  <div className="w-[16px] h-[16px]">
                    <Image
                      src="/phone.png"
                      alt="logo"
                      width={16}
                      height={16}
                      className="w-[16px] h-[16px] "
                    />
                  </div>
                  <h6
                    className="text-white w-[104px] h-[24px] font-semibold font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-[ #FFFFFF] text-left underline-offset-from-font decoration-skip-ink ">

                  
                    (225) 555-0118
                  </h6>
                </div>

                <div className="flex justify-center text-center w-[260px] h-[44px] p-[10px] gap-[5px] rounded-[5px]">
                  <Image
                    src="/mail.png"
                    alt="logo"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                  />
                  <h6 className="text-white w-[219px] h-[24px] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink">
                    michelle.rivera@example.com
                  </h6>
                </div>
              </div>

              <div className="w-[332px] h-[44px] p-[10px] gap-[10px]">
                <h6 className="text-white w-[312px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                  Follow Us and get a chance to win 80% off
                </h6>
              </div>
              <div className="flex w-[233px] h-[46px] p-[10px] gap-[10px] ">
                <h6 className="text-white w-[83px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                  Follow Us :
                </h6>
                <Image
                  src="/social media.png"
                  alt="logo"
                  width={120}
                  height={26}
                  className="w-[120px] h-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8 font-bold">
              <Link href="/" className="text-2xl font-bold text-[#252B42]">
                Bandage
              </Link>
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/" className="text-neutral-500 hover:text-primary">
                  Home
                </Link>
                <Link href="/Page2" className="flex items-center text-neutral-500 hover:text-primary">
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/about" className="text-neutral-500 hover:text-primary">
                  About
                </Link>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Blog
                </Link>
                <Link href="/Contact" className="text-neutral-500 hover:text-primary">
                  Contact
                </Link>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Pages
                </Link>
              </nav>
            </div>

            <div className="flex  items-center space-x-6">
              <div className="flex font-semibold items-center text-blue-500">
                <User className="h-4 w-4 mr-1" />
                <span>Login / Register</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Search className="h-5 w-5 mr-1" />
                </Link>
                <Link
                  href="#"
                  className="hidden sm:flex items-center text-blue-500 hover:text-blue-700"
                >
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  <span className="ml-1">1</span>
                </Link>
                <Link
                  href="#"
                  className="hidden sm:flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Heart className="h-5 w-5 mr-1" />
                  <span className="ml-1">1</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative bg-[url('/bg.jpg')] w-full h-[700px] text-white py-16 ">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="pl-10 pr-10 pt-[100px] space-y-10">
            <p className="h5 font-montserrat font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-left underline-offset-from-font decoration-skip-ink-none">
              SUMMER 2020
            </p>
            <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none w-[548px] h-[80px]">
              NEW COLLECTION
            </h1>
            <h4 className=" font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none w-[376px] h-[60px]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <Link href="/Page2" className=" bg-green-500 hover:bg-green-700 text-white font-semibold text-3xl py-2 px-4 rounded w-[221px] h-[55px]">
              shop now
            </Link>
          </div>
        </div>
      </section>
      <EditorPick />
    </div>
  );
};

export default Header;
