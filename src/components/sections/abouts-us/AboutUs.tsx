import React from "react";
import HeroAboutUs from "./HeroAboutUs";
import Event from "./Event";
import CommitedAbount from "./CommitedAbount";
import DeliveryAbout from "./DeliveryAbout";
import FeedBack from "./FeedBack";
function AboutUs() {
  return (
    <>
      <HeroAboutUs />
      <Event />
      <CommitedAbount />
      <DeliveryAbout />
      <FeedBack />
      <div className="w-full h-[200px] bg-[#086E3B] flex flex-col items-center justify-center">
        <div className="flex flex-col w-[60%]">
          <div className="text-[17px] text-white">Contact us</div>
          <div className="text-[30px] text-white font-bold">
            {" "}
            Tìm kiếm giải pháp Fulfilllment toàn diện?{" "}
          </div>
          <div className="flex w-full justify-end pt-3">
            <button className="h-[46px] bg-white text-[#086E3B] font-bold px-10">
              TAI BANG GIA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
