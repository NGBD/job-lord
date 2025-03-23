import React from "react";
import HeroAboutUs from "./HeroAboutUs";
import Event from "./Event";
import CommitedAbount from "./CommitedAbount";
import DeliveryAbout from "./DeliveryAbout";
import FeedBack from "./FeedBack";
import Image from "next/image";
import Download from "@/components/ui/Download";

function AboutUs() {
  return (
    <>
      <HeroAboutUs />
      <Event />
      <CommitedAbount />
      <div className="max-w-[1320px] mx-auto flex justify-center px-5 md:px-[40px]">
        <Image
          src="/images/process.webp"
          alt="Warehouse Background"
          className="object-cover w-full max-w-[1240px] aspect-[1240/690]"
          width={1240}
          height={690}
          priority
          quality={100}
        />
      </div>
      <DeliveryAbout />
      <FeedBack />
      <Download />
    </>
  );
}

export default AboutUs;
