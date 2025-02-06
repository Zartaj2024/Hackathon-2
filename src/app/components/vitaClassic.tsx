import React from "react";
import Image from "next/image";
import Neural from "./Neural";
const VitaClassic = () => {
  return (
    <section className="bg-[#23856D] w-]1440px] h-[800px] text-white">
        <div className="container mx-auto px-4 py-20 flex items-center">
          <div className="w-[550px] font-bold ml-[50px] space-y-10">
            <span className="mb-[30px] block text-2xl">SUMMER 2020</span>
            <h2 className="text-7xl  font-bold mb-[30px]">Vita Classic Product</h2>
            <p className="mb-[30px] text-xl">We know how large objects will act, but things on a small scale.</p>
            <div className="flex items-center gap-[30px]">
              <span className="text-2xl font-bold">$16.48</span>
              <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 border-none text-white px-10 py-[15px] h-auto">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-1/2 ml-[400px]">
            <Image
              src="/shop-hero.png"
              alt="Vita Classic Product"
              width={500}
              height={600}
              className="object-cover pt-[50px]"
            />
          </div>
        </div> <Neural/>
      </section>
     
  );
};

export default VitaClassic;
