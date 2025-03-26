import React from "react";
import Image from "next/image";

function HeroService() {
  return (
    <section className="flex items-center">
      <div className="w-full relative h-full aspect-[1259/350] max-h-[300px] text-white flex items-center justify-center">
        <Image
          src="/images/service-3.webp"
          alt="Warehouse Background"
          className="object-cover absolute top-0 left-0 w-full h-full aspect-[1259/350]"
          width={1259}
          height={350}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="text-[40px] md:text-[60px] font-bold text-[#29ea8d] text-center md:py-0 py-10 uppercase z-10">
          Quy trình lưu trữ Hàng Hoá
        </div>
      </div>
    </section>
  );
}

export default HeroService;
