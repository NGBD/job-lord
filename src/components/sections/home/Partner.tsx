import React from "react";
import Image from "next/image";

function PartnerCard({
  name,
  role,
  company,
  testimonial,
  image,
  rating,
}: {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}) {
  return (
    <div className="flex flex-col items-center justify-between text-center mx-auto p-4 max-w-[300px]">
      <p className="text-gray-700 italic mb-6">{`"${testimonial}"`}</p>
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="text-left">
            <h4 className="text-lg font-normal">{name}</h4>
            <div className="">
              <p className="text-sm text-gray-600">
                {role} {company}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-4 ml-20">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

function Partner() {
  const partners = [
    {
      name: "Mr. Hoàng",
      role: "FOUNDER",
      company: "BABY",
      testimonial:
        "Chúng tôi đã sử dụng dịch vụ hoàn tất đơn hàng của IFG trong nhiều năm tại Thái Lan, Malaysia và Philippines và thực sự hoạt động kinh doanh của chúng tôi đã có nhiều bước ngoặt to lớn. Dịch vụ theo quy trình rõ ràng, hiệu quả và luôn đảm bảo sản phẩm đến tay người tiêu dùng nhanh nhất. Chúng tôi đánh giá cao về điều này!",
      image: "/images/nam1.png",
      rating: 5,
    },
    {
      name: "Mrs. Nguyễn Hương",
      role: "CEO & FOUNDER",
      company: "PH4M VIỆT NAM",
      testimonial:
        "Vì tự kinh doanh online nên mình đã phân vân khi quyết định mở rộng kinh doanh sang các thị trường nước ngoài. Nhưng khi tìm hiểu và lựa chọn dịch vụ tại IFG thì thực sự ngoài mong đợi. Đội ngũ chuyên môn cao, phản hồi nhanh chóng đã giúp mình giảm bớt gánh nặng về logistics để tập trung hơn vào phát triển kinh doanh.",
      image: "/images/nu.png",
      rating: 5,
    },
    {
      name: "Mr. Văn Quân",
      role: "CEO",
      company: "XDP",
      testimonial:
        "Tôi đã sử dụng dịch vụ telesales của nhiều đơn vị khác nhau trước đây, nhưng đến với IFG thì thật sự nổi bật. Đội ngũ quốc tế chuyên môn cao và luôn cập nhật thông tin tức thì cho tôi về tiến độ. Tỉ lệ chốt đơn của chúng tôi đã cải thiện nhờ sự tận tình của đội ngũ.”",
      image: "/images/nam2.png",
      rating: 5,
    },
    {
      name: "Mr. Cường",
      role: "CEO & FOUNDER",
      company: "M.O.S",
      testimonial:
        "Chúng tôi đã tăng trưởng 30% doanh thu và tối ưu lợi nhuận khi tiếp cận đến thị trường nước ngoài nhờ dữ liệu bán hàng đã được xử lý gắn thẻ cuộc gọi và phân tích từ IFG.",
      image: "/images/nam5.png",
      rating: 5,
    },
    {
      name: "Mr. Mạnh",
      role: "FOUNDER",
      company: "Lysilk",
      testimonial:
        "Thay vì dành quá nhiều thời gian để xử lý data và có thể tập trung vào việc kinh doanh, IFG đã đưa ra giải pháp giúp chúng tôi hoàn thành đơn hàng từ lúc telesales đến kho bãi, vận chuyển và người tiêu dùng.",
      image: "/images/nam4.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ĐỐI TÁC</h2>
        <div className="flex flex-col items-center justify-center px-2 py-5 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <PartnerCard
              name={partners[0].name}
              role={partners[0].role}
              company={partners[0].company}
              testimonial={partners[0].testimonial}
              image={partners[0].image}
              rating={partners[0].rating}
            />
            <PartnerCard
              name={partners[1].name}
              role={partners[1].role}
              company={partners[1].company}
              testimonial={partners[1].testimonial}
              image={partners[1].image}
              rating={partners[1].rating}
            />
            <PartnerCard
              name={partners[2].name}
              role={partners[2].role}
              company={partners[2].company}
              testimonial={partners[2].testimonial}
              image={partners[2].image}
              rating={partners[2].rating}
            />
          </div>
          <div className="w-[700px] bg-gray-400 h-[1px] my-5 md:block hidden"></div>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <PartnerCard
              name={partners[3].name}
              role={partners[3].role}
              company={partners[3].company}
              testimonial={partners[3].testimonial}
              image={partners[3].image}
              rating={partners[3].rating}
            />
            <PartnerCard
              name={partners[4].name}
              role={partners[4].role}
              company={partners[4].company}
              testimonial={partners[4].testimonial}
              image={partners[4].image}
              rating={partners[4].rating}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
