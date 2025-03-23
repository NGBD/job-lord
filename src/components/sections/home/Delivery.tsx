import React from "react";
import Image from "next/image";
function Delivery() {
  return (
    <section>
      <div className="mx-auto pt-5 flex flex-col items-center justify-center">
        <div className="md:text-[40px] text-[23px] text-center font-bold uppercase w-[80%]">
          Các đơn vị vận chuyển AFG Fulfillment đang hợp tác
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center md:gap-10 mt-10">
          <Image
            src="/images/ninja.webp"
            alt="ninja"
            width={300}
            height={100}
            className="aspect-[300/90] object-cover"
            priority
            quality={100}
          />

          <Image
            src="/images/flash.webp"
            alt="flash"
            width={250}
            height={100}
            className=" aspect-[250/90] object-cover rounded-2xl"
            priority
            quality={100}
          />
          <Image
            src="/images/jnt.webp"
            alt="jnt"
            width={350}
            height={100}
            className="aspect-[350/90] object-cover rounded-2xl"
            priority
            quality={100}
          />
          <Image
            src="/images/royal.png"
            alt="royal"
            width={90}
            height={90}
            className="w-[90px] h-[90px] aspect-[90/90] object-cover rounded-2xl"
            priority
            quality={100}
          />
        </div>
        <div className="element min-h-[57px] w-full mt-10"></div>
      </div>
    </section>
  );
}

export default Delivery;
