import React from "react";
import Image from "next/image";
import Link from "next/link";
import FullFillment from "./FullFillment";

function AboutUs() {
  return (
    <section>
      <div className="max-w-[1320px] px-5 md:px-10 mx-auto flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-[80px]">
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold italic text-[#0D9251]">
            Về chúng tôi
          </div>
          <div className="text-[22px] font-bold uppercase">
            Công ty cổ phần Infinity Fulfillment Global
          </div>
          <div className="text-[17px] max-w-[500px]">
            Công ty Cổ phần Infinity Fulfillment Global là một công ty chuyên
            cung cấp dịch vụ vận chuyển và quản lý hàng hóa xuyên quốc gia. Với
            hơn 8 năm kinh nghiệm trong việc vận hành thương mại điện tử (TMĐT)
            đa nền tảng, Infinity Fulfillment Global tự hào là đơn vị cung cấp
            dịch vụ Fulfillment (FFM) uy tín, chuyên nghiệp, và hiệu quả nhất
            trong ngành. Hiện nay, công ty đã mở rộng sự hiện diện của mình tại
            bốn quốc gia trong khu vực Đông Nam Á, bao gồm Philippines,
            Malaysia, Singapore, và Thái Lan, đáp ứng nhu cầu của thị trường và
            khách hàng ở nhiều quốc gia khác nhau.
            <Link href="/about-us">
              <button className="flex justify-center items-center bg-[#0D9251] text-white px-4 h-[24px] mt-3">
                Xem thêm
              </button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/about-us.jpg"
          alt="Warehouse Background"
          className="object-cover aspect-[600/400]"
          width={600}
          height={400}
          priority
          quality={100}
        />
      </div>
      <div className="max-w-[1320px] mx-auto md:pt-20 pt-10  flex justify-center md:px-[100px] px-5"></div>
      <FullFillment />
      <div className="max-w-[1320px] mx-auto md:pt-20 pt-10 flex justify-center md:px-[100px] px-5">
        <iframe
          src="https://drive.google.com/file/d/1XLB59OK2Nc0kT6IEDgKTHe09xZ3FWjf_/preview"
          className="object-cover w-full max-w-[1160px] aspect-[1160/580]"
          allow="autoplay"
          allowFullScreen
        />
      </div>
      {/* <div className="max-w-[1320px] mx-auto md:pt-20 pt-10 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-5 w-full items-center justify-center max-w-[1320px]">
          <Image
            src="/images/su-menh-images.jpg"
            alt="su-menh-image"
            className="object-cover md:w-[400px] w-[300px] aspect-[400/200]"
            width={400}
            height={200}
            priority
            quality={100}
          />
        </div>
        <div className="element-2 min-h-[40px] w-[1320px]"></div>
      </div> */}
    </section>
  );
}

export default AboutUs;
