import React from "react";
import Image from "next/image";

function Culture() {
  return (
    <>
      <div className="max-w-[1320px] px-5 md:px-10 mx-auto flex flex-col items-center justify-center gap-3 py-5">
        <div className="text-[30px] uppercase font-bold">TẦM NHÌN</div>
        <div className="text-[17px] text-center">
          FG tiên phong kiến tạo hệ sinh thái logistics thông minh, kết nối tinh
          hoa Việt Nam với thị trường Đông Nam Á và vươn tầm toàn cầu. Trở thành
          đối tác chiến lược hàng đầu, mang đến giải pháp tối ưu, thúc đẩy sự
          phát triển bền vững cho doanh nghiệp Việt Nam trên trường quốc tế. IFG
          tối ưu hóa chuỗi cung ứng, cung cấp dịch vụ logistics toàn diện, hiệu
          quả và đáng tin cậy. IFG đồng hành cùng doanh nghiệp Việt Nam, mở rộng
          cơ hội kinh doanh, chinh phục thị trường Đông Nam Á và vươn ra thế
          giới. IFG không ngừng đổi mới, ứng dụng công nghệ tiên tiến, nâng cao
          chất lượng dịch vụ, mang đến trải nghiệm vượt trội cho khách hàng.
        </div>
        <Image
          src="/images/culture-1.jpg"
          alt="culture"
          width={1320}
          height={690}
          className="object-cover aspect-[1320/690] rounded-[60px]"
          priority
          quality={100}
        />
      </div>
      <div className="max-w-[1320px] px-5 md:px-10 mx-auto flex flex-col items-center justify-center gap-3 py-5">
        <div className="text-[30px] uppercase font-bold">SỨ MỆNH</div>
        <div className="text-[17px] text-center">
          IFG không vận hành hành đơn hàng, IFG vận hành chuỗi giá trị giúp kinh
          tế Việt Nam mở rộng phát triển ở Đông Nam Á một cách mạnh mẽ, bền vững
          và hiệu quả.
        </div>
        {/* <Image
          src="/images/about-us-image.webp"
          alt="culture"
          width={1320}
          height={690}
          className="object-cover aspect-[1320/690] rounded-[60px]"
        /> */}
      </div>
      <div className="max-w-[1320px] mx-auto pt-10 md:pt-20 flex justify-center p-5 md:p-[40px]">
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
