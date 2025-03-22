import React from "react";
import Image from "next/image";

function CommitedAbount() {
  return (
    <div className="max-w-[1320px] flex flex-col md:grid md:grid-cols-2 gap-5 px-10 mx-auto py-10">
      <div className="flex flex-col gap-5">
        <ul className="list-disc ">
          <li className="text-[26px] font-bold uppercase">
            Cam kết của chúng tôi
          </li>
        </ul>
        <div className="text-[17px] max-w-[500px] flex flex-col gap-5">
          <div>
            Uy tín: AFG luôn đề cao chữ tín và đặt vấn đề Bảo mật dữ liệu - lợi
            ích của đối tác lên hàng đầu
          </div>
          <div>
            An toàn: AFG luôn tuân thủ theo hợp đồng, đảm bảo tuyệt đối thông
            tin và sự an toàn của khách hàng
          </div>
          <div>
            Chuyên nghiệp: Luôn làm việc bài bản theo quy trình, đưa ra giải
            pháp tối ưu và hiệu quả nhất cho khách hàng
          </div>
        </div>
      </div>
      <Image
        src="/images/main-logo.svg"
        alt="Warehouse Background"
        className="object-cover max-w-[550px] max-h-[400px]"
        width={600}
        height={400}
        priority
        quality={100}
      />
    </div>
  );
}

export default CommitedAbount;
