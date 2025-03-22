import React from "react";
import Image from "next/image";

function DeliveryAbout() {
  return (
    <section>
      <div className=" mx-auto pt-5 flex flex-col items-center justify-center">
        <div className="text-[40px] text-center font-bold uppercase w-[60%]">
          Đối tác đồng hành cùng AFG fulfillment
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <Image
            src="/images/ninja.webp"
            alt="ninja"
            width={300}
            height={100}
            className="w-[300px] h-[100px] aspect-[300/90] object-cover"
            priority
            quality={100}
          />

          <Image
            src="/images/flash.webp"
            alt="flash"
            width={250}
            height={100}
            className="w-[250px] h-[100px] aspect-[250/90] object-cover rounded-2xl"
            priority
            quality={100}
          />
          <Image
            src="/images/jnt.webp"
            alt="jnt"
            width={350}
            height={100}
            className="w-[350px] h-[100px] aspect-[350/90] object-cover rounded-2xl"
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
      </div>
    </section>
  );
}

export default DeliveryAbout;
