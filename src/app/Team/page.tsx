import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="w-[1440px] h-[3603px] ml-[195px]">
      <div className="w-[1440px] h-[384px] bg-[#FFFFFF]">
        <div className="w-[1322px] h-[91px]">
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

        <div className="w-[870px]  h-[280px] mt-[104px] ml-[285px] pt-50 pb-50">
          <div className="w-[788px] ml-[195px] ml-[195px] h-[180px]">
            <div className="w-[788px] h-[180px] ml-[50px] space-y-10 ">
              <h5 className="w-[111px] h-[24px] ml-[195px] font-montserrat text-[13px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                WHAT WE DO
              </h5>
              <h1 className="w-[788px] h-[20px] font-montserrat text-[40px] font-bold leading-[24px] tracking-[0.2px] ml-[px]">
                Innovation tailored for you
              </h1>
              <div className="w-[122px] h-[44px] pt-10 pb-10 gap-[15px] flex flex-row ml-[190px] items-center">
                <Link
                  href="/"
                  className="w-[43px] h-[24px] font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none"
                >
                  Home
                </Link>
                <Image
                  src="/Arrow-2.png"
                  alt="logo"
                  width={9}
                  height={16}
                  className="w-[9px] h-[16px]  "
                />
                <h6 className="w-[40px] h-[24px] font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                  Team
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[530px] mt-[50px]">
        <div className="w-[1440px] h-[530px]">
          <div className="flex justify-center items-center gap-2 ">
            <Image
              src="/tpic1.png"
              alt="pic1"
              width={700}
              height={530}
              className="w-[700px] h-[530px]"
            />
            <div className="space-y-2">
              <div>
                <Image src="/tpic2.png" alt="pic2" width={361} height={270} />
              </div>
              <div>
                <Image src="/tpic4.png" alt="pic3" width={361} height={270} />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <Image src="/tpic3.png" alt="pic4" width={361} height={270} />
              </div>
              <div>
                <Image src="/tpic5.png" alt="pic5" width={361} height={270} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[1759px]">
        <div className="w-[1050px] h-[1769px] ml-[195px] pt-[112px] pb-[112px]">
          <div className="w-[607px] h-[50px] ml-[400px]">
            <div className="w-[607px] h-[50px]">
              <h2 className="w-[316px] h-[50px] font-montserrat text-[40px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                Meet Our Team
              </h2>
            </div>
          </div>

          <div className="w-[1034px] h-[383px] gap-[30px] flex flex-row">
            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t4.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t5.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t6.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1034px] h-[383px] gap-[30px] flex flex-row">
            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t3.jpg"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t7.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t1.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1034px] h-[383px] gap-[30px] flex flex-row">
            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t2.jpg"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t8.png"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[316px] h-[383px] justify-center items-center">
              <div className="w-[316px] h-[383px] bg-[#FFFFFF] ">
                <Image
                  src="/t9.jpg"
                  alt="pic5"
                  width={316}
                  height={231}
                  className="w-[316px] h-[231px]"
                />
                <div className="w-[316px] h-[152px] p-[30px] items-center space-y-5">
                  <h5 className="w-[83px] h-[24px] mx-auto font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Username
                  </h5>
                  <h6 className="w-[77px] h-[24px] mx-auto font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none">
                    Profession
                  </h6>
                  <Image
                    src="/social2.png"
                    alt="pic5"
                    width={200}
                    height={24}
                    className="w-[200px] h-[24px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[442px] bg-[#FFFFFF]">
        <div className="w-[1050px] h-[442px] ml-[250px]  ">
          <div className="flex flex-row w-[607px] h-[282px] mb-[250px] ml-[195px]">
            <div className="w-[547px] h-[282px]">
              <h2 className="w-[547px] h-[50px]  font-montserrat text-[40px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none ">
                Start your 14 days free trial
              </h2>
              <div>
                
                <p className="w-[411px] h-[40px]  font-montserrat text-[14px] mx-auto font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor{" "}
                </p>
                <p className="w-[411px] h-[40px] ml-[120px] font-montserrat text-[14px] mx-auto font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-from-font decoration-skip-ink-none text-[#737373]">
                  do met sent. RELIT official consequent.
                </p>
              </div>
              <button className=" w-[186px] h-[52px] rounded-[5px] pt-15 pb-15 bg-[#23A6F0] text-white ml-[170px]">
                Try it free now
              </button>
              <Image
                src="/Rsocial.png"
                alt="pic5"
                width={242}
                height={50}
                className="w-[242px] h-[50px] ml-[140px] mt-10"
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
