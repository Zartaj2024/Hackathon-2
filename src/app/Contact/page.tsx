import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return(
        <div className="w-[1440px] h-[2523px] bg-[#FFFFFF]">
            
          <div className="bg-[url(/Cfamilt.png)]">
        <div className="w-[1322px] h-[91px] ">
          <div className="flex flex-row justify-center items-center w-[1322px] h-[91px] mr-[200px]">
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
                  <Link href="/Contact">Contact</Link>
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
        </div>

        <div className="w-[1050px] h-[742px] mt-[104px] ml-[150px] pt-[112px] pb-[112px]">
          <div className="w-[1044px] h-[518px] font-bold  ">
            <div className="w-[200px] h-[518px] space-y-[40px]">
            <h5 className="w-[149px] h-[24px] font-family: Montserrat font-size: 16px;font-weight: 700 line-height: 24px;letter-spacing: 0.10pxtext-align: left;text-underline-position: from-font;text-decoration-skip-ink: none">
              CONTACT US
            </h5>
            <h1 className="w-[378px] h-[80px] text-5xl">Get in touch today!</h1>
            <p className="w-[376px] h-[60px] text-gray-400">
              We know how large objects will act, but things on a small scale
            </p>

            <div className="w-[280px] h-[84px] space-y-[20px]">
                <h3 className="font-montserrat font-bold text-[24px] w-[280px] h-[32px] leading-[32px] tracking-[0.1px]">Phone ; +451 215 215 </h3>
<h3  className="font-montserrat font-bold text-[24px] w-[250px] h-[32px] leading-[32px] tracking-[0.1px]">Fax : +451 215 215</h3>
            </div>

            <Image
                src="/blackso.png"
                alt="logo"
                width={242}
                height={50}
                className="w-[242px] h-[50px] "
              />
          </div>
          </div>
        </div>
</div>


<div className="w-[1440px] h-[814px] bg-[#FFFFFF]">
    <div className="w-[1050px] h-[841px] ml-[195px] pt-[112px] pb-[112px] space-y-[100px]">


    
          <div className="justify-center text-center space-y-5 w-[633px] h-[134px] ml-[195px]">
            <h1 className="text-black font-bold">VISIT OUR OFFICE</h1>
            <p className="font-bold text-black text-4xl w-[500px] mx-auto">
              We help small businesses with big ideas
            </p>
          </div>
          
          <div className="flex w-[985px] mr-[700px]  h-[403px] ">
            <div className="mx-auto justify-center text-center  w-[327px] h-[400px] px-5 py-10">
              <Image
                src="/Cphone.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold text-black">
                <div>
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1>Get Support</h1>
                <button className="border border-blue-500  rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="mx-auto justify-center text-center bg-[#252B42] w-[300px] h-[400px] px-5 py-10">
              <Image
                src="/Clocation.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold">
                <div className="text-white">
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1 className="text-white">Get Support</h1>
                <button className="border border-blue-500 bg-[#252B42] rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="mx-auto justify-center text-center  w-[300px] h-[400px] px-5 py-10">
              <Image
                src="/Cmail.png"
                alt="Clogo"
                width={80}
                height={80}
                className="mx-auto py-5"
              />
              <div className="space-y-5 font-bold text-black">
                <div>
                  <h1>georgia.young@example.com </h1>
                  <h1>georgia.young@ple.com</h1>
                </div>
                <h1>Get Support</h1>
                <button className="border border-blue-500  rounded-3xl w-[200px] h-[50px] text-blue-500">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>


        <div className="w-[1440px] h-[348px]">
            <div className="w-[1050px] h-[348px] ml-[150px] pt-[80px] pb-[80px]">
            <div className="justify-center text-center py-10 text-black font-black space-y-10">
          <Image
            src="/Arrow 2.png"
            alt="arrow"
            width={73}
            height={50}
            className=" w-[73px] h-[50px] mx-auto"
          />
          <h1>WE Cant WAIT TO MEET YOU</h1>
          <h1 className="text-7xl">Lets Talk</h1>
          <button className="border rounded w-[200px] h-[50px] bg-[#23A6F0] text-white">
            Try it free now
          </button>
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


        
    )
}