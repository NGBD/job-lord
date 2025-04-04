import React from "react";
import Image from "next/image";

function Avantages() {
  return (
    <section className="max-w-[1320px] px-5 md:px-10 mx-auto flex justify-center items-center flex-col md:grid grid-cols-3 gap-10 md:items-start py-10 ">
      <Item
        image="/images/new1.png"
        title="Bán hàng xuyên biên giới với quy trình đơn giản"
        description="Đơn giản hóa quy trình bán hàng với một hệ thống thông minh"
      />
      <Item
        image="/images/new2.png"
        title="Khai phá thị trường tiềm năng
"
        description="Mở rộng thị trường và tiếp cận khách hàng mới, tăng tỷ lệ
bán hàng và doanh thu."
      />{" "}
      <Item
        image="/images/new3.png"
        title="A-Warehouse nhà kho thông minh"
        description="Lựa chọn hệ thống kho vận trải dài khắp Đông Nam Á."
      />
    </section>
  );
}

export default Avantages;

function Item({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-[#686868] flex flex-col gap-4 items-center justify-center">
      <Image
        src={image}
        alt="advantages"
        width={300}
        height={190}
        quality={100}
        className="object-cover w-[300px] h-[190px] rounded-[20px]"
      />
      <div className="font-bold text-[18px] text-center">{title}</div>
      <div className="text-[18px] max-w-[350px] text-center">{description}</div>
    </div>
  );
}
