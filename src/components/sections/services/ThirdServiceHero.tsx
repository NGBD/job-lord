import React from "react";
import Image from "next/image";

function ThirdServiceHero() {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/third-hero-service.webp"
        alt="Warehouse Background"
        className="object-cover w-full h-full aspect-[1900/810]"
        width={1900}
        height={810}
        priority
        quality={100}
      />
    </section>
  );
}

export default ThirdServiceHero;
