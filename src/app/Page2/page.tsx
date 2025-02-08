"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, Search, ShoppingCart, Heart } from "lucide-react";

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
      image:"/p3.png",
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
  ];
export default function Page2() {
  return (
    <div className="w-[1440px] h-[3038px] top-[-12664px] left-[596px] ">
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

      <div className="w-[1440px] h-[92px]  pb-5 pt-5 bg-[#FAFAFA]">
        <div className="flex mx-auto  w-[1049px] h-[44px] gap-[750px] ">
          <div className="w-[510px] h-[32px] ">
            <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center underline-offset-from-font decoration-skip-ink-none">
              Shop
            </h3>
          </div>
          <div className=" w-[509px] h-[44px]  gap-10 ">
            <div className="flex flex-row w-[119px] h-[44px]  p-[10px_0px_10px_0px] gap-[15px] ">
              <Link
                href="/"
                className="w-[43px] h-[24px]  font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink-none"
              >
                Home
              </Link>

              <Image
                src="/Arrow-2.png"
                alt="logo"
                width={8.62}
                height={16}
                className="w-[8.62px] h-[16px] bg-[ #BDBDBD]"
              />

              <h6 className="w-[37px] h-[24px]  font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink-none">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[271px] bg-[#FAFAFA] ">
      <div className=" flex justify-center items-center gap-5  ">
          <Image src="/shopclo1.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo2.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo3.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo4.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
          <Image src="/shopclo5.png" alt="Shop Clothes" className=" w-[250px] h-[250px]" width={500} height={500} />
        </div>
      </div>
      <div className="w-[1440px] h-[98px] bg-[#FFFFFF]">

<div className="w-[1050px] h-[98px] left-[195px] pt-5 pb-5 gap-[80px] mx-auto">
<div className="flex flex-row justify-between items-center mx-auto">
<h6 className="w-[166px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center underline-offset-from-font decoration-skip-ink-none text-gray-500">Showing all 12 results</h6>

<Image src="/page2sort.png" alt="pic1" width={177} height={46} className="w-[177px] h-[46px]" />
<Image src="/page2sort2.png" alt="pic1" width={177} height={46} />
</div>
</div>

      </div>
      <div className="w-[1440px] h-[175px] bg-[#FAFAFA]">
        <div className="   w-[1050px] h-[175px] left-[195px] ">
            <div className="flex flex-row w-[1050px] h-[175px] pt-[50px] pb-[50px] gap-[30px] ml-[200px] items-center justify-center">
            
        <Image src="/hooli.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />
        <Image src="/lyft.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />
        <Image src="/leaf.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />
        <Image src="/strip.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />
        <Image src="/aws.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />
        <Image src="/alien.png" alt="Page23" className="h-[44px] w-[120px]" width={120} height={44} />

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

    
    <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[250px]"
              onClick={() => product}
            >
              <Link href="/Page3">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-[300px] h-[200px] object-center "
                  width={300}
                  height={200}
                />

                {/* Product Content */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{product.department}</p>

                  {/* Price */}
                  <div className="mt-2">
                    <span className="line-through text-gray-400 mr-2">
                      {product.originalPrice}
                    </span>
                    <span className="text-green-500 font-bold">
                      {product.salePrice}
                    </span>
                  </div>

                  {/* Color Dots */}
                  <div className="flex justify-center space-x-2 mt-3">
                    <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-green-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-orange-500 rounded-full"></span>
                    <span className="h-4 w-4 bg-red-500 rounded-full"></span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 ">
          <nav className="inline-flex items-center px-4 py-4 ">
            <Link
              href="/"
              className=" w-[50px] h-[50px] px-3 py-3 bg-gray-100 text-gray-600 border rounded-l hover:bg-gray-300"
            >
              First
            </Link>
            <Link
              href="Page2"
              className=" w-[50px] h-[50px] px-3 py-3  text-blue-500 hover:bg-gray-300  border "
            >
              1
            </Link>
            <Link
              href="shop"
              className=" w-[50px] h-[50px] px-3 py-3 text-blue-500 bg-blue-500 hover:bg-gray-300 text-white  border "
            >
              2
            </Link>
            <Link
              href="About u"
              className=" w-[50px] h-[50px] px-3 py-3  text-blue-500 hover:bg-gray-300  border "
            >
              3
            </Link>
            <Link
              href=""
              className=" w-[50px] h-[50px] px-3 py-3 bg-[#FFFFFF] text-blue-500  border  rounded-r hover:bg-gray-300"
            >
              Next
            </Link>
          </nav>
          </div>
        </div>
   


   
  );
}
