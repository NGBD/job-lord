import React from "react";
import Image from "next/image";

function Event() {
  return (
    <section className="max-w-[1320px] flex flex-col gap-5 px-10 mx-auto py-10">
      <div className="text-center w-full text-[30px] font-bold uppercase">
        Những cột mốc đáng nhớ
      </div>
      <div className="text-center text-[18px] pb-5 w-[80%] mx-auto">
        AFG cung cấp giải pháp cho việc hoàn tất đơn hàng trên một hệ thống duy
        nhất giúp cho việc quản lý đơn hàng, tồn kho, hoàn trả theo thời gian
        thực.
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 items-start">
        <Item
          image="/images/about-us-one.webp"
          title=" 2022: Ban giám đốc và công sự sang  Philippines tìm hiểu thị trường và đăng ký kinh doanh "
        />
        <Item
          image="/images/about-us-two.webp"
          title="08/ 2023: Quyết định mở rộng
thị trường đầu tiên tại Philippines"
        />
        <Item
          image="/images/about-us-two.webp"
          title="01/11/2023: Quyết định mở rộng
thị trường Malaysia"
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 justify-center gap-10 items-start w-[80%] mx-auto">
        <Item
          image="/images/about-us-one.webp"
          title="02/2024: Quyết định mở rộng
thị trường Singapore"
        />
        <Item
          image="/images/about-us-two.webp"
          title="05/2024:  Quyết định mở rộng dịch vụ vận chuyển ĐNA-XNE Logistic "
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
