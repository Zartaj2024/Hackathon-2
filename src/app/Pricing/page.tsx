import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="w-[1440px] h-[3634px] bg-[#FFFFFF] top-[-12625px] ml-[200px] ">
      <div className="w-[1440px] h-[1440px] bg-[#FAFAFA] ">
        <div className="w-[1050px] h-[1600px]  pt-[112px] pb-[112px]">
          <section className="ml-[150px] w-[1050px] bg-[#FAFAFA]">
            <div className="bg-[#FFFFFF] ">
              <div className="flex justify-between  items-center px-5 py-5">
                <div>
                  <Image
                    src="/Bandage.png"
                    alt="logo"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="text-gray-500 font-bold space-x-9">
                  <Link href="/">Home</Link>
                  <Link href="Page2">Product</Link>
                  <Link href="Pricing">Pricing</Link>
                  <Link href="Contact">Contact</Link>
                </div>
                <div className="flex gap-5 items-center">
                  <h1 className="font-bold text-blue-500 text-3sm">Login </h1>
                  <button className="bg-blue-400 text-white font-bold py-4 px-4 rounded hover:bg-blue-700">
                    become a member
                  </button>
                </div>
              </div>
              <div className="space-y-10">
                <div className="text-center font-bold text-gray-500 text-2xl">
                  <h5>PRICING</h5>
                </div>
                <div className="text-center font-bold text-black text-8xl">
                  <h1>Simple Pricing</h1>
                </div>
                <div className="flex justify-center items-center gap-5 text-center">
                  <Link href="/" className="text-black font-bold ">
                    Home
                  </Link>

                  <Link href="/Pricing" className="text-gray-500 font-bold">
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-black text-center font-bold text-6xl">
              Pricing
            </h1>
            <p className="text-gray-500 font-bold p-10 text-center ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <Image
              src="/switch.png"
              alt="switch"
              width={350}
              height={50}
              className="justify-center items-center mx-auto"
            />
            <div className="flex relative py-10 justify-center items-center  ">
              <div className="border text-center border-blue-500  rounded-xl w-[350px] h-[590px] justify-center items-center mt-[70px] ">
                <div className="mx-auto px-5 space-y-6 ">
                  <h2 className="font-bold text-black text-3xl py-10 px-5">
                    FREE
                  </h2>
                  <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                    Organize across all apps by hand
                  </h4>
                  <div className="flex">
                    <div className=" justify-center items-center space-x-3 mx-auto  flex">
                      <h2 className="text-[#23a6f0] font-bold text-5xl">0</h2>

                      <div className="justify-center items-center">
                        <div className="text-[#23a6f0]">
                          <h2 className="text-start font-bold text-2xl">$</h2>
                        </div>
                        <div>
                          <h2 className="font-bold text-[#23a6f0] ">
                            Per Month
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/features-list.png"
                      alt="list"
                      width={250}
                      height={150}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-blue-500 rounded-xl w-[350px] h-[590px] justify-center items-center space-y-7">
                <div className="text-center mx-auto px-5 space-y-6 ">
                  <h2 className="font-bold text-black text-3xl py-10 px-5">
                    STANDARD
                  </h2>
                  <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                    Organize across all apps by hand
                  </h4>
                  <div className="flex">
                    <div className=" justify-center items-center space-x-3 mx-auto  flex">
                      <h2 className="text-[#23a6f0] font-bold text-5xl">
                        9.99
                      </h2>

                      <div className="justify-center items-center">
                        <div className="text-[#23a6f0]">
                          <h2 className="text-start font-bold text-2xl">$</h2>
                        </div>
                        <div>
                          <h2 className="font-bold text-[#23a6f0] ">
                            Per Month
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/features-list.png"
                      alt="list"
                      width={250}
                      height={150}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-blue-500 rounded-xl w-[350px] h-[590px] justify-center items-center space-y-5 mt-[70px]">
                <div className="text-center mx-auto px-5 space-y-6 ">
                  <h2 className="font-bold text-black text-3xl py-10 px-5">
                    PREMIUM
                  </h2>
                  <h4 className="w-[150px] mx-auto text-gray-500 font-bold">
                    Organize across all apps by hand
                  </h4>
                  <div className="flex">
                    <div className=" justify-center items-center space-x-3 mx-auto  flex">
                      <h2 className="text-[#23a6f0] font-bold text-5xl">
                        19.99
                      </h2>

                      <div className="justify-center items-center">
                        <div className="text-[#23a6f0]">
                          <h2 className="text-start font-bold text-2xl">$</h2>
                        </div>
                        <div>
                          <h2 className="font-bold text-[#23a6f0] ">
                            Per Month
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/features-list.png"
                      alt="list"
                      width={250}
                      height={150}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </section>
          <div className=" bg-[#FAFAFA]  px-10 py-10 space-y-10 -mt-[300px] justify-center w-[1440px] h-[300px] absolute z-10 ">
            <div className="mt-[50px] space-y-10">
              <div>
                <h1 className="font-bold text-black text-xl justify-center text-center">
                  Trusted By Over 4000 Big Companies
                </h1>
              </div>
              <div className="w-[1440px] h-[500px]">
                <div className="flex flex-row gap-[30px] ml-[100px] items-center">
                  <Image
                    src="/hooli.png"
                    alt="Page23"
                    className="h-[50px] w-[160px]"
                    width={160}
                    height={50}
                  />
                  <Image
                    src="/lyft.png"
                    alt="Page23"
                    className="h-[60px] w-[160px]"
                    width={160}
                    height={60}
                  />
                  <Image
                    src="/leaf.png"
                    alt="Page23"
                    className="h-[75px] w-[155px]"
                    width={155}
                    height={75}
                  />
                  <Image
                    src="/strip.png"
                    alt="Page23"
                    className="h-[50px] w-[155px]"
                    width={155}
                    height={50}
                  />
                  <Image
                    src="/aws.png"
                    alt="Page23"
                    className="h-[65px] w-[155px]"
                    width={155}
                    height={65}
                  />
                  <Image
                    src="/alien.png"
                    alt="Page23"
                    className="h-[75px] w-[151px]"
                    width={155}
                    height={75}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[100px] space-y-10 ">
            <div className="  space-y-5 text-center ml-[350px]">
              <h1 className="font-bold text-5xl mx-auto text-black justify-center text-center">
                {" "}
                Pricing FAQs
              </h1>

              <p className="w-[400px] text-center mx-auto font-bold text-gray-500  ">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics
              </p>
            </div>
            <div className="space-y-[80px] w-[1440px] h-[500px]">
              <div className="flex  gap-10 text-black justify-center ">
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex  gap-10 text-black justify-center">
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex  gap-10 text-black justify-center ">
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className="w-[500px] font-bold space-y-5">
                  <div className="flex ">
                    <Image
                      src="/Arrow-2.png"
                      alt="switch"
                      width={10}
                      height={3}
                      className="justify-center items-center mx-auto text-blue-500"
                    />
                    <h1 className="text-2xl px-6 text-start">
                      the quick fox jumps over the lazy dog
                    </h1>
                  </div>
                  <p className="px-10 text-gray-500">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="ml-[350px] text-center font-bold mt-[200px] text-black ">
                Haven&apos;t got your answer? Contact our support
              </h1>
            </div>
          </div>

          <section className="bg-[#FFFFFF] mt-[100px] ml-[350px]">
            <div className="justify-center text-center py-20 space-y-[50px] font-bold text-black">
              <div>
                <h1 className="font-bold text-5xl text-black ">
                  Start your 14 days free trial
                </h1>
              </div>
              <div>
                <p className="w-[400px] mx-auto">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent.
                </p>
              </div>
              <div>
                <button className="border bg-blue-500 rounded w-[200px] h-[50px] font-bold text-white">
                  Try it free now
                </button>
              </div>
              <div>
                <Image
                  src="/Rsocial.png"
                  alt="social logo"
                  width={240}
                  height={50}
                  className="mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white w-full mt-[1440px]">
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
