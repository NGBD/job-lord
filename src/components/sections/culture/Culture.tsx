import React from "react";
import Image from "next/image";

function Culture() {
  return (
    <>
      <div className="max-w-[1320px] px-10 mx-auto flex flex-col items-center justify-center gap-3 py-5">
        <div className="text-[30px] uppercase font-bold">TẦM NHÌN</div>
        <div className="text-[17px] text-center">
          Dẫn đầu trong việc kết nối, vận hành và tối ưu hóa chuỗi giá trị để
          giúp doanh nghiệp Việt Nam chinh phục thị trường <br /> Đông Nam Á và
          vươn ra thế giới
        </div>
        <Image
          src="/images/culture-1.webp"
          alt="culture"
          width={1320}
          height={690}
        />
      </div>
      <div className="max-w-[1320px] px-10 mx-auto flex flex-col items-center justify-center gap-3 py-5">
        <div className="text-[30px] uppercase font-bold">SỨ MỆNH</div>
        <div className="text-[17px] text-center">
          AFG không vận hành hành đơn hàng, AFG vận hành chuỗi giá trị giúp kinh
          tế Việt Nam mở rộng phát triển ở Đông Nam Á một cách mạnh mẽ, bền vững
          và hiệu quả.
        </div>
        <Image
          src="/images/about-us-image.webp"
          alt="culture"
          width={1320}
          height={690}
          className="object-cover aspect-[1320/690] rounded-[60px]"
        />
      </div>
      <div className="max-w-[1320px] mx-auto pt-20 flex justify-center p-[40px]">
        <Image
          src="/images/committed-image.webp"
          alt="Warehouse Background"
          className="object-cover w-full max-w-[1160px] aspect-[1160/580]"
          width={1160}
          height={580}
        />
      </div>
    </>
  );
}

export default Culture;
