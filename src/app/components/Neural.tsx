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

        


    <div className="bg-white py-12">
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



      </section>
    </div>
  );
}

