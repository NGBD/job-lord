import React from "react";
import Image from "next/image";

function Event() {
  return (
    <section className="max-w-[1320px] flex flex-col gap-5 px-5 md:px-10 mx-auto py-10">
      <div className="text-center w-full text-[20px] md:text-[30px] font-bold uppercase">
        Những cột mốc đáng nhớ
      </div>
      <div className="text-center text-[18px] pb-5 w-[80%] mx-auto">
        IFG cung cấp giải pháp cho việc hoàn tất đơn hàng trên một hệ thống duy
        nhất giúp cho việc quản lý đơn hàng, tồn kho, hoàn trả theo thời gian
        thực.
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 items-start">
        <Item
          image="/images/about-us-one.webp"
          title=" 2021 Ban giám đốc và công sự sang Brazil mở kho vận hành cho khách hàng tại Sao Paolo Brazil sau đó hỗ trợ khách hàng mở cửa hàng tại sàn TMĐT Mercado libre."
        />
        <Item
          image="/images/myanmar.jpg"
          title="02/ 2022: Quyết định mở rộng thị trường sang Myanmar."
        />
        <Item
          image="/images/about-us-two.webp"
          title="01/6/2023: Quyết định mở rộng thị trường Malaysia"
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 justify-center gap-10 items-start w-[80%] mx-auto">
        <Item
          image="/images/about-us-one.webp"
          title="09/2024: Quyết định mở rộng thị trường Indonesia"
        />
        <Item
          image="/images/about-us-two.webp"
          title="03/2024: Quyết định mở rộng mảng vận chuyển ký liên kết với công ty vận chuyển hàng hóa Qicheng Yuntong, Thâm Quyến."
        />
        <Item
          image="/images/about-us-one.webp"
          title="10/2024: Quyết định mở rộng thị trường tại Thái Lan và Campuchia."
        />
        <Item
          image="/images/bangladesh.jpg"
          title="01/12/2024: Quyết định mở rộng thị trường tại Pakistan và Bangladesh"
        />
      </div>
    </section>
  );
}

export default Event;

function Item({ image, title }: { image: string; title: string }) {
  return (
    <div className="text-black flex flex-col gap-4 items-center justify-center">
      <Image
        src={image}
        alt="advantages"
        width={300}
        height={190}
        quality={100}
        className="object-cover w-[300px] h-[190px] rounded-[20px]"
      />
      <div className="font-bold text-[18px] text-center">{title}</div>
    </div>
  );
}
