import React from "react";
import Image from "next/image";

function HeroCareer() {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/careers-image.webp"
        alt="Warehouse Background"
        className="object-cover w-full h-full aspect-[2500/600]"
        width={2500}
        height={600}
        priority
        quality={100}
      />
    </section>
  );
}

export default HeroCareer;
