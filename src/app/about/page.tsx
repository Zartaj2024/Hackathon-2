"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    title: "Username",
    department: "Profession",

    image: "/t1.png",
  },
  {
    title: "Username",
    department: "Profession",

    image: "/t2.jpg",
  },
  {
    title: "Username",
    department: "Profession",

    image: "/t3.jpg",
  },
];
export default function AboutUs() {
  return (
    <div className="w-[1440px] h-[4422px] top-[-12664px] left-[6866px] bg-[#FFFFFF]">
      <div className="w-[1440px] h-[729px] bg-[url(/background.jpg)]">
        <div className="flex flex-row justify-center items-center w-[1322px] h-[91px] ml-[59px]">
          <div className="justify-center items-center flex flex-row w-[1322px] h-[91px]  ">
            <Image
              src="/Bandage.png"
              alt="logo"
              width={108}
              height={32}
              className="w-[108px] h-[32px] mt-[20px] ml-[136px] "
            />
            <div className="flex flex-row w-[815px] h-[58px] mt-[20px] ml-[200px] items-center justify-center">
              <div className="flex flex-row  w-[257px] h-[24px]  gap-[21px] font-bold text-[#959595]">
                <Link href="/">Home</Link>
                <Link href="/Page2">Product</Link>
                <Link href="/Pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
              </div>

              <div className="flex flex-row font-bold items-center justify-center w-[300px] h-[52px] ml-[300px] gap-[45px]">
                <h1 className="w-[41px] h-[22px] text-[#23A6F0]">Login</h1>
                <button className="w-[214px] h-[52px] bg-[#23A6F0] text-white rounded">
                  Become a member
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1050px] h-[545px] mt-[104px] ml-[195px] pt-[112px] pb-[112px]">
          <div className="w-[1044px] h-[321px] font-bold space-y-4">
            <h5 className="w-[149px] h-[24px] font-family: Montserrat font-size: 16px;font-weight: 700 line-height: 24px;letter-spacing: 0.10pxtext-align: left;text-underline-position: from-font;text-decoration-skip-ink: none">
              ABOUT COMPANY
            </h5>
            <h1 className="w-[542px] h-[80px] text-5xl">ABOUT US</h1>
            <p className="w-[376px] h-[60px] text-gray-400">
              We know how large objects will act, but things on a small scale
            </p>

            <button className="w-[195px] h-[52px] border bg-[#23A6F0] text-white rounded">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[236px] bg-[#FFFFFF]">
        <div className="w-[1440px] h-[236px] pt-24 pb-24">
          <div className="flex flex-row mx-auto items-center w-[1018px] h-[188px] gap-[60px]">
            <div className="w-[394px] h-[188px] pt-24 pb-24">
              <div className=" w-[394px] h-[194px] space-y-5">
                <p className="font-bold text-[#E74040] font-montserrat text-sm font-normal leading-5 tracking-wide text-left">
                  Problems trying
                </p>
                <h3 className=" w-[394px] h-[96px] font-montserrat font-bold text-2xl leading-[32px] tracking-wide text-left">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent.
                </h3>
              </div>
            </div>

            <div className="w-[529px] h-[40px] justify-center items-center mt-[120px]">
              <p className="w-[545px] h-[40px] font-montserrat text-sm font-bold text-gray-400 leading-5 tracking-wide text-left underline-offset-from-font decoration-skip-ink">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[264px] bg-[#FFFFFF]">
        <div className="w-[1050px] h-[264px] ml-[195px] pt-80 pb-80">
          <div className="flex flex-row w-[1049px] h-[104px] justify-center items-center gap-[60px]">
            <div className="w-[238px] h-[104px] flex flex-col justify-center items-center">
              <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-wide underline-offset-from-font decoration-skip-ink">
                15K
              </h1>
              <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-wide underline-offset-from-font decoration-skip-ink">
                Happy Customers
              </h5>
            </div>

            <div className="w-[241px] h-[104px] flex flex-col justify-center items-center">
              <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-wide underline-offset-from-font decoration-skip-ink">
                150K
              </h1>
              <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-wide underline-offset-from-font decoration-skip-ink">
                Monthly Visitors
              </h5>
            </div>

            <div className="w-[240px] h-[104px] flex flex-col justify-center items-center">
              <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-wide underline-offset-from-font decoration-skip-ink">
                15
              </h1>
              <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-wide underline-offset-from-font decoration-skip-ink">
                Countries Worldwide
              </h5>
            </div>

            <div className="w-[240px] h-[104px] flex flex-col justify-center items-center">
              <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-wide underline-offset-from-font decoration-skip-ink">
                100+
              </h1>
              <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-wide underline-offset-from-font decoration-skip-ink">
                Top Partners
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[764px] bg-[#FFFFFF]">
        <div className="w-[1050px] h-[764px] ml-[195px]">
          <Image
            src="/desktop-video-3.png"
            alt="about"
            width={989}
            height={540}
            className="w-[989px] h-[540px] mt-[270px] ml-[31px] rounded rounded-3xl"
          />
        </div>
      </div>

      <div className="w-[1440px] h-[826px] bg-[#FFFFFF]">
        <div className="w-[1050px] h-[819px] ml-[290px]  pb-[112px] space-y-10">
          <div className="w-[607px] h-[100px] mx-auto">
            <h2 className="w-[316px] h-[50px] ml-[70px] font-montserrat text-3xl font-bold leading-[50px] tracking-wide underline-offset-from-font decoration-skip-ink text-center">
              Meet Our Team
            </h2>
            <p className="w-[469px] h-[40px] font-montserrat text-sm font-bold text-gray-400 leading-5 tracking-wide text-center underline-offset-from-font decoration-skip-ink">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="w-[1034px] h-[383px] gap-[30px] ml-[80px]">
            <div className="justify-center  items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white  hover:shadow-xl  duration-300 w-[250px]"
                  onClick={() => product}
                >
                  <Link href="/Team">
             
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-[300px] h-[200px] object-center "
                      width={300}
                      height={200}
                    />

                  
                    <div className="p-4 text-center space-y-5">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {product.title}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {product.department}
                      </p>

                      <div className="flex justify-center  items-center gap-2 text-blue-500">
                        <Image
                          src="/social2.png"
                          alt="facebook"
                          width={150}
                          height={24}
                          className="w-[150px] h-[24px]"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[479px] bg-[#FAFAFA]">
        <div className="w-[1050px] h-[479px] ml-[195px] pt-[20px] pb-[80px]">
          <div className="w-[607px] h-[100px] mx-auto">
            <h2 className="w-[496px] h-[50px] ml-[70px] font-montserrat text-3xl font-bold leading-[50px] tracking-wide underline-offset-from-font decoration-skip-ink text-center">
              Big Companies Are Here
            </h2>
            <p className="w-[547px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="w-[1050px] h-[175px] pt-[50px] pb-[50px] ml-[80px]">
            <div className="flex flex-row w-[1440px] w-[175px] bg-[#FAFAFA] justify-center items-center ">
              <div className="flex flex-row gap-[30px]">
                <Image
                  src="/hooli.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
                <Image
                  src="/lyft.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
                <Image
                  src="/leaf.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
                <Image
                  src="/strip.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
                <Image
                  src="/aws.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
                <Image
                  src="/alien.png"
                  alt="Page23"
                  className="h-[43px] w-[153px]"
                  width={153}
                  height={43}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[636px] bg-[#2A7CC7] flex flex-row">
        <div className="w-[800px] h-[636px] ml-[195px] pt-[112px] pb-[112px] flex flex-row items-center">
          <div className="w-[1050px] h-[412px] justify-between ">
            <div className="w-[438px] h-[338px] text-white space-y-10 mt-[50px]">
              <h5 className="w-[128px] h-[24px] font-montserrat text-[16px] font-bold leading-[24px] tracking-wide underline-offset-from-font decoration-skip-ink">
                WORK WITH US
              </h5>
              <h2 className="w-[440px] h-[50px] font-montserrat text-4xl font-bold leading-[50px] tracking-wide underline-offset-from-font decoration-skip-ink">
                Now Let&apos;s grow Yours
              </h2>
              <p className="w-[440px] h-[40px] font-montserrat font-sm text-[14px] leading-[20px] tracking-[0.2px]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>

              <button className="w-[132px] h-[52px] border rounded-[5px] pt-15 pb-15 pl-10 pr-10 font-bold text-center justify-center ">
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="w-[590px] h-[640px] ">
          <Image
            src="/page333.png"
            alt="Page23"
            className="w-[590px] h-[640px] "
            width={590}
            height={640}
          />
        </div>
      </div>

      <div className="bg-white w-full">
        <footer className="bg-white text-white py-12 justify-center items-center w-full">
          <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 m-40px p-40px">
            <div className="flex justify-between items-center  p-7 w-full h-[120px] px-10 py-10">
              <div>
                <Image
                  src="/Bandage.png"
                  alt="Bandage logo"
                  width={200}
                  height={40}
                  className="w-[100px]"
                />
              </div>
              <div className="flex space-x-4">
                <Image
                  src="/social2.png"
                  alt="Social media icons"
                  width={250}
                  height={30}
                  className="w-[250px]"
                />
              </div>
            </div>
            <div className="mt-10 mb-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10 px-10 py-10">
              <div className="font-bold">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                  Company Info
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-400 hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hiring"
                      className="text-gray-400 hover:text-white"
                    >
                      We are hiring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                  Legal
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-400 hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hiring"
                      className="text-gray-400 hover:text-white"
                    >
                      We are hiring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                  Features
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/features/marketing"
                      className="text-gray-400 font-bold hover:text-white"
                    >
                      Business Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/analytics"
                      className="text-gray-400 hover:text-white"
                    >
                      User Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features/live-chat"
                      className="text-gray-400 hover:text-white"
                    >
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-gray-400 hover:text-white"
                    >
                      Unlimited Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                  Resources
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/mobile"
                      className="text-gray-400 hover:text-white"
                    >
                      iOS & Android
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demo"
                      className="text-gray-400 hover:text-white"
                    >
                      Watch a Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customers"
                      className="text-gray-400 hover:text-white"
                    >
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/api"
                      className="text-gray-400 hover:text-white"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="font-bold">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                  Get in Touch
                </h2>
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
