import React from "react";
import Image from "next/image";

function Culture() {
  return (
    <>
      <div className="max-w-[1320px] px-5 md:px-10 mx-auto flex flex-col items-center justify-center gap-3 py-5">
        <div className="text-[30px] uppercase font-bold">TẦM NHÌN</div>
        <div className="text-[18px] text-center">
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
          src="/images/new16.png"
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
        <div className="text-[18px] text-center">5 GIÁ TRỊ CỐT LÕI CỦA IFG</div>
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-r from-[#1e6e41] to-[#2a8653] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              1. KHÁCH HÀNG LÀ TRỌNG TÂM
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Chúng tôi đặt khách hàng lên hàng đầu, lắng nghe và thấu hiểu mọi
              nhu cầu, mang đến dịch vụ vượt trội và trải nghiệm tốt nhất.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e6e41] to-[#2a8653] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              2. An toàn và bảo mật tuyệt đối:
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Chúng tôi cam kết bảo vệ toàn diện hàng hóa và thông tin của khách
              hàng bằng các biện pháp an ninh nghiêm ngặt và công nghệ bảo mật
              tiên tiến. Sự an tâm của khách hàng là ưu tiên hàng đầu của chúng
              tôi.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e6e41] to-[#2a8653] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              3. Đổi mới và ứng dụng công nghệ:
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Chúng tôi không ngừng đổi mới và ứng dụng công nghệ số vào vận
              hành và quản trị, tối ưu hóa quy trình, nâng cao hiệu quả và mang
              đến giải pháp tiên tiến cho khách hàng. Sự đổi mới là động lực
              phát triển của IFG.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e6e41] to-[#2a8653] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              4. Chính trực và cẩn trọng:
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Chúng tôi hoạt động dựa trên nguyên tắc chính trực, minh bạch và
              cẩn trọng trong mọi hành động. Sự tin cậy và uy tín là nền tảng
              của mối quan hệ hợp tác bền vững
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e6e41] to-[#2a8653] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              5. Trách nhiệm và tin cậy:
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Chúng tôi cam kết thực hiện đúng trách nhiệm, đảm bảo tính tin cậy
              và sự hài lòng của khách hàng. Sự tin tưởng của khách hàng là tài
              sản quý giá nhất của IFG.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="max-w-[1320px] mx-auto pt-10 md:pt-20 flex justify-center p-5 md:p-[40px]">
        <Image
          src="/images/commited-image.jpg"
          alt="Warehouse Background"
          className="object-cover w-full max-w-[1160px] aspect-[1160/580]"
          width={1160}
          height={580}
          priority
          quality={100}
        />
      </div> */}
    </>
  );
}

export default Culture;
