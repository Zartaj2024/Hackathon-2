import React from "react";
import Image from "next/image";
import Link from "next/link";
const posts = [
  {
    id: 1,
    image: "/road.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    image: "/car.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 3,
    image: "/umbrella.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
];
export default function Neural() {
  return (
    <div>
      <section className="py-[30px] ml-[150px]">
        <div className="container mx-auto px-4 flex gap-[30px]">
          <div className="w-1/2">
            <Image
              src="/hero-cover-1.png"
              alt="Neural Universe"
              width={600}
              height={400}
              className="rounded-none object-cover"
            />
          </div>
          <div className="font-bold w-[350px] flex flex-col justify-center">
            <h2 className="text-[40px] leading-[50px] font-bold text-[#252B42] mb-[30px]">
              Part of the Neural Universe
            </h2>
            <p className="text-[#737373] mb-[30px] text-xl">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex gap-[10px]">
              <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 border rounded text-white w-[150px] h-[50px] text-center justify-center">
                BUY NOW
              </button>
              <button className="text-[#2DC071] border-2 border-[#2DC071] hover:bg-[#2DC071]/10 rounded text-center justify-center w-[150px] h-[50px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        


    <div className="bg-white py-12 mr-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[#6dc4f5] text-indigo-600 font-semibold tracking-wide uppercase">
            Practice Advice
          </h2>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Posts
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {posts.map((post) => (
              <div key={post.id} className="relative border border-gray-200 rounded-lg shadow">
                <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                  NEW
                </div>
                <div>
                  <Image
                    className="h-48 w-full object-cover"
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="mt-4 space-y-8 py-4 px-4">
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span className="text-[#6dc4f5]">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                  </div>
                  <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {post.description}
                  </p>
                  <div className="mt-2 flex gap-[140px] items-center text-sm text-gray-500">
                    <div className="flex gap-1">
                      <Image src="/icon1.png" alt="Date icon" width={16} height={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex">
                      <Image src="/icon2.png" alt="Comments icon" width={16} height={16} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="mt-2 text-gray-500 hover:text-indigo-900 text-sm font-bold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      </section>
    </div>
  );
}

