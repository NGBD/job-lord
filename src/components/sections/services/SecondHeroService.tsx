import React from "react";
import Image from "next/image";

function SecondHeroService() {
  return (
    <section className="relative flex items-center">
      <div className="w-full relative h-full aspect-[1259/350] text-white flex items-center justify-center">
        <Image
          src="/images/service-2.webp"
          alt="Warehouse Background"
          className="object-cover absolute top-0 left-0 w-full h-full aspect-[1259/350]"
          width={1259}
          height={350}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="text-[40px] lg:text-[60px] font-bold text-[#29ea8d] text-center uppercase z-10 md:py-0 py-10 max-w-[80%]">
          Quy trình xử lý Đơn Hàng và Vận chuyển tại Infinity Fulfillment Global
        </div>
      </div>
    </section>
  );
}

export default SecondHeroService;
