import React from "react";
import Image from "next/image";

function TermHero() {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/term-image.webp"
        alt="Warehouse Background"
        className="object-cover w-full h-full aspect-[1259/300]"
        width={1259}
        height={300}
        priority
        quality={100}
      />
    </section>
  );
}

export default TermHero;
