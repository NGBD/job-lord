import React from "react";
import Image from "next/image";

function HeroService() {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/service.webp"
        alt="Warehouse Background"
        className="object-cover w-full h-full aspect-[1259/350]"
        width={1259}
        height={350}
        priority
        quality={100}
      />
    </section>
  );
}

export default HeroService;
