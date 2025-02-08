"use client";
import React from "react";
import {
  ChevronDown,
  User,
  Search,
  ShoppingCart,
  Heart,
  HeartIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p1.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p2.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p3.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p4.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p5.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p6.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p7.png",
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    image: "/p8.png",
  },
];

export default function Page3() {
  return (
    <div className="w-[1440px] h-[3147px] top-[-12664px] left-[3086px] ">
      <div className="bg-[#23856D] w-[1439px] h-[58px]">
        <div className="w-[1438px] h-[46px] pt-[9px] pl-[2px] ">
          <div className=" w-[1438px] h-[46px] ">
            <div className=" bg-[ #23856D] flex flex-row w-[1438px] h-[46px] justify-center pl-[55px] pr-[55px]">
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
                  <h6 className="text-white w-[104px] h-[24px]  font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-[ #FFFFFF] text-left underline-offset-from-font decoration-skip-ink ">
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
                  <h6 className="text-white w-[219px] h-[24px] font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink">
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
          <div className="flex items-center justify-center gap-[100px] h-20">
            <div className="flex items-center space-x-10 font-bold">
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
      <div className="w-[1440px] h-[92px] p-[24px_0px_24px_0px] bg-[#FAFAFA]">
        <div className="w-[1033px] h-[44px] gap-30 flex flex-row">
          <div className="w-[509px] h-[44px] gap-5 ">
            <div className="flex flex-row ml-[250px] items-center w-[119px] h-[44px] p-[10px_0px_10px_0px] gap-[15px] ">
              <Link
                href="/"
                className="link font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink"
              >
                Home
              </Link>
            
              <h6 className="w-[37px] h-[24px] text-[#BDBDBD] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[598px] bg-[#FAFAFA]">
        <div className="w-[1050px] h-[598px] ml-[195px] pb-[48px] ">
          <div className="w-[1050px] h-[550px] gap-[20px] flex flex-row">
            <div className="w-[510px] h-[550px] ">
              <div className=" w-[506px] h-[546px]  rounded-l-[5px] ">
            

                <div className="  w-[506px] h-[450px]  ">
                  <Image
                    src="/men.png"
                    alt="logo"
                    width={506}
                    height={450}
                    className="w-[506px] h-[450px] "
                  />
                </div>
                <div className="flex flex-row w-[219px] h-[75px] gap-7 mt-[20px] ">
                  <div className="w-[100px] h-[75px] ">
                    <Image
                      src="/men.png"
                      alt="logo"
                      width={100}
                      height={75}
                      className="w-[100px] h-[75px] "
                    />
                  </div>
                  <div className="w-[100px] h-[75px]  ">
                    <Image
                      src="/women.png"
                      alt="logo"
                      width={100}
                      height={75}
                      className="w-[100px] h-[75px] opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[510px] h-[470px]">
              <div className="font-bold space-y-4">
                <h1 className="text-gray-900 text-3xl font-medium mb-4">
                  Floating Phone
                </h1>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  <span className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
                      </svg>
                    ))}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-300"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
                    </svg>
                  </span>
                  <span className="ml-2 text-gray-600">10 Reviews</span>
                </div>

                {/* Price */}
                <p className="text-2xl font-semibold mb-4">$1,139.33</p>
                <div className="flex">
                  <p>Availability:</p>
                  <p className="text-blue-500">In stock</p>
                </div>
                <div className="space-y-9">
                  <div>
                    {/* Description */}
                    <p className=" text-gray-700">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>

                  <div>
                    <hr />
                  </div>
                  {/* Color Options */}
                  <div>
                    <div className="flex items-center mb-6">
                      <span className="mr-3 text-gray-700">Colors</span>
                      <button
                        className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-300 focus:outline-none"
                        title="add to fav"
                      />
                      <button
                        className="w-6 h-6 ml-2 rounded-full bg-green-500 border-2 border-gray-300 focus:outline-none"
                        title="add to fav"
                      />
                      <button
                        className="w-6 h-6 ml-2 rounded-full bg-orange-500 border-2 border-gray-300 focus:outline-none"
                        title="add to fav"
                      />
                      <button
                        className="w-6 h-6 ml-2 rounded-full bg-gray-800 border-2 border-gray-300 focus:outline-none"
                        title="add to fav"
                      />
                    </div>
                  </div>

                  {/* Select Options Button */}
                  <div className="flex items-center">
                    <button className="text-white bg-[#23a6f0]  w-[150px] h-[50px] focus:outline-none hover:bg-blue-600 rounded">
                      Select Options
                    </button>
                    <HeartIcon className="w-6 h-6 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[572px] bg-[#FFFFFF]">
        <div className="w-[1440px] h-[91px] text-[#737373]">
          <div className="flex flex-row justify-center items-center gap-10 w-[1050px] h-[72px] mt-[10px] ml-[193px]">
            <h1 className="w-[86px] h-[24px] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink">
              Description
            </h1>
            <h1 className="w-[172px] h-[24px] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink">
              Additional Information
            </h1>
            <h1 className="flex flex-row w-[138px] h-[24px] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink ">
              Reviews (0)
            </h1>
          </div>
          <hr className="w-[1049px] ml-[195px]" />
        </div>
        <div className=" w-[1440px] h-[449px] mt-[10px] ">
          <div className="w-[1056px] h-[499px] pt-[24px] pb-[48px] ">
            <div className="flex ml-[200px] flex-row w-[1050px] h-[427px] gap-10">
              <Image
                src="/p1.png"
                alt="pic1"
                width={323}
                height={392}
                className="w-[323px] h-[392px]"
              />

              <div className=" w-[323px] h-[427px]  font-bold text-black space-y-5 ">
                <h1 className="font-bold text-2xl text-black ">
                  the quick fox jumps over
                </h1>
                <p className="w-[332px]">
                  et minim Mollie non desert Alamo est sit liquey dolor do met
                  sent. RELIT official onsequent door ENIM RELIT
                  Mollie.xcitation venial consequent sent nostrum met
                </p>

                <p>
                  et minim Mollie non desert Alamo est sit liquey dolor do met
                  sent. RELIT official onsequent door ENIM RELIT Mollie.
                  xcitation venial consequent sent nostrum met
                </p>

                <p>
                  et minim Mollie non desert Alamo est sit liquey dolor do met
                  sent. RELIT official onsequent door ENIM RELIT Mollie.
                  xcitation venial consequent sent nostrum met
                </p>
              </div>

              <div className="justify-center space-y-5 pb-10 font-bold text-black">
                <div>
                  <h1 className="text-2xl space-y-10">
                    the quick fox jumps over
                  </h1>
                </div>
                <div className="space-y-5 ">
                  <p>the quick fox jumps over the lazy dog</p>
                  <p>the quick fox jumps over the lazy dog</p>
                  <p>the quick fox jumps over the lazy dog</p>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div>
                  <h1 className="text-2xl ">the quick fox jumps over</h1>
                </div>
                <div className="space-y-5">
                  <p>the quick fox jumps over the lazy dog</p>
                  <p>the quick fox jumps over the lazy dog</p>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[1086px] bg-[#FAFAFA]">
        <div className="w-[1124px] h-[1086px] ml-[195px] pt-[48px] pb-[48px] gap-[24px]">
          <div className="w-[1040px] h-[32px]">
            <div className="w-[691px] h-[32px] gap-10-">
              <h3 className="mb-5 w-[299px] h-[32px] text-[#252B42] font-montserrat font-bold text-1xl leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink">
                BESTSELLER PRODUCTS
              </h3>
            </div>
          </div>
          <hr className="w-[1042px] h-[2px] text-[#ECECEC]" />
          <div className="w-[1049px] h-[850px] gap-[30px] mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[200px]"
                  onClick={() => product}
                >
                  <Link href="/shop">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-[300px] h-[200px] object-center "
                      width={300}
                      height={200}
                    />

                    {/* Product Content */}
                    <div className="p-4 ">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {product.title}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {product.department}
                      </p>

                      {/* Price */}
                      <div className="mt-2">
                        <span className="line-through text-gray-400 mr-2">
                          {product.originalPrice}
                        </span>
                        <span className="text-green-500 font-bold">
                          {product.salePrice}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row w-[1440px] w-[175px] bg-[#FAFAFA] justify-center items-center ">
            <div className="flex flex-row gap-[30px]">
              <Image
                src="/hooli.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
              <Image
                src="/lyft.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
              <Image
                src="/leaf.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
              <Image
                src="/strip.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
              <Image
                src="/aws.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
              <Image
                src="/alien.png"
                alt="Page23"
                className="h-[50px] w-[153px]"
                width={153}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
      <footer className="bg-white text-white py-12 justify-center items-center w-full">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 m-40px p-40px">
          <div className="flex justify-between items-center  p-7 w-full h-[120px] px-10 py-10">
            <div>
              <Image src="/Bandage.png" alt="Bandage logo" width={200} height={40} className="w-[100px]" />
            </div>
            <div className="flex space-x-4">
              <Image src="/social2.png" alt="Social media icons" width={250} height={30} className="w-[250px]" />
            </div>
          </div>
          <div className="mt-10 mb-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10 px-10 py-10">
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Company Info</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
                </li>
                <li>
                  <Link href="/hiring" className="text-gray-400 hover:text-white">We are hiring</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">Legal</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
                </li>
                <li>
                  <Link href="/hiring" className="text-gray-400 hover:text-white">We are hiring</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">Features</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/features/marketing" className="text-gray-400 font-bold hover:text-white">Business Marketing</Link>
                </li>
                <li>
                  <Link href="/features/analytics" className="text-gray-400 hover:text-white">User Analytics</Link>
                </li>
                <li>
                  <Link href="/features/live-chat" className="text-gray-400 hover:text-white">Live Chat</Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white">Unlimited Support</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Resources</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/mobile" className="text-gray-400 hover:text-white">iOS & Android</Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-400 hover:text-white">Watch a Demo</Link>
                </li>
                <li>
                  <Link href="/customers" className="text-gray-400 hover:text-white">Customers</Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-400 hover:text-white">API</Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">Get in Touch</h2>
              <form className="mt-4 mb-4 flex flex-row rounded-[50px] w-full">
                <div className="flex rounded">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-[190px] h-[70px] px-4 py-2 text-gray-900 bg-gray-200 focus:outline-none focus:bg-white"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-4 text-gray-400">Lore imp sum dolor Amit</p>
            </div>
          </div>
          <div className="pb-25px pt-25px px-10 py-10 text-start font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
            <p>Made With Love By Finland. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>

    </div>
  );
}
