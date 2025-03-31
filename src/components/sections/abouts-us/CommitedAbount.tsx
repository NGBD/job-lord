import React from "react";
import Image from "next/image";

function CommitedAbount() {
  return (
    <div className="max-w-[1320px] items-center flex flex-col md:grid md:grid-cols-2 gap-5 px-5 md:px-10 mx-auto py-10">
      <div className="flex flex-col gap-5">
        <ul className="list-disc ">
          <li className="md:text-[26px] font-bold uppercase">
            Cam kết của chúng tôi
          </li>
        </ul>
        <div className="text-[18px] max-w-[500px] flex flex-col gap-5">
          <div>
            Bảo mật: IFG luôn luôn đặt niềm tin của khách hàng và uy tín của
            công ty lên đầu. Cam kết bảo mật thông tin của khách hàng và đối
            tác.
          </div>
          <div>
            Tin cậy: AFG luôn tuân thủ theo hợp đồng, đảm bảo tuyệt đối về vấn
            đề rủi ro cho khách hàng trong toàn bộ quá trình vận hành.
          </div>
          <div>
            Sáng tạo: Luôn làm việc bài bản theo quy trình vận hành đã được tối
            ưu bằng đội ngũ nhân sự bản địa am hiểu văn hóa lối sống kết hợp
            cùng tư duy định hướng chiến lược của đội nghũ lãnh đạo tại Việt
            Nam.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded-4xl">
        <Image
          src="/images/main-logo.svg"
          alt="Warehouse Background"
          className="object-cover aspect-[650/350]"
          width={650}
          height={400}
          priority
          quality={100}
        />
      </div>
    </div>
  );
}

export default CommitedAbount;
