import React from "react";

function FullFillment() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto pt-20 flex flex-col justify-center md:px-[100px] px-5 items-center">
        <div className="text-[23px] md:text-[40px] font-bold uppercase text-center">
          Dịch vụ Fulfillment có kho hàng riêng tiết <br /> kiệm một khoản chi
          phí
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-start md:h-[330px] h-fit text-[18px] mt-5">
          <div className="bg-[#0D9251] h-full rounded-2xl p-3 w-full md:max-w-[200px] text-white text-justify">
            - Chi phí kho bãi để quản lý từ kho bãi đến theo dõi hành trình đơn
            hàng , hệ thống thanh toán và bảo mật thông tin hách hàng, thuê nhân
            viên và mua vật tư phục vụ đóng gói ... đòi hỏi một khoản đầu tư chi
            phí khá lớn
          </div>
          <div className="bg-[#0D9251] h-full rounded-2xl p-3 w-full md:max-w-[200px] text-white text-justify">
            - Việc lựa chọn nhà cung cấp dịch vụ Infinity Fulfillment sẽ là một
            giải pháp tối ưu cho ngân sách của các doanh nghiệp lớn, nhỏ và các
            nhà bán lẻ TMĐT
          </div>{" "}
          <div className="bg-[#0D9251] h-full rounded-2xl p-3 w-full md:max-w-[200px] text-white text-justify">
            - Chúng tôi sẽ thay bạn hoàn thành các đơn hàng và bạn chỉ cần
            chuyên tâm với việc phát triển chiến lược kinh doanh, MKT và tập
            trung vào phát triển cửa hàng, tạo ra những đơn hàng mới
          </div>{" "}
          <div className="bg-[#0D9251] h-full rounded-2xl p-3 w-full md:max-w-[200px] text-white text-justify">
            - Đối với dịch vụ này, bạn chỉ cần trả phí dịch vụ bạn cần sử dụng
            mà không mất thêm bất cứ chi phí đầu tư nào khác
          </div>
        </div>
        <button className="bg-[#0D9251] text-white px-4 rounded-xl my-10 w-fit h-10 font-bold uppercase">
          Tìm hiểu thêm
        </button>
      </div>
      <div className="element min-h-[57px] w-full"></div>
      <div className="flex justify-center flex-col bg-[#0D9251]">
        <div className="text-[20px] text-center text-white font-bold h-[200px] pt-20 relative">
          Theo dõi, đo lường và tối ưu hóa hiệu suất kinh doanh của bạn
          <div className="triangle-mask max-h-[26px] max-w-[75px] absolute bottom-[-20px] left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="bg-[#EDEDED] w-full h-fit py-10 md:py-0 md:h-[280px] flex justify-center md:flex-row flex-col items-center md:gap-[100px] gap-10">
          <FulfillmentItem
            number={"8 000 000 +"}
            title="Đơn hàng hoàn thành"
            description="hàng năm"
          />
          <FulfillmentItem
            number={"5000 +"}
            title="Phản hồi tốt từ"
            description="khách hàng"
          />
          <FulfillmentItem
            number={"98%"}
            title=" Đơn hàng hoàn thành  "
            description="đúng hạn"
          />
          <FulfillmentItem
            number={"06+"}
            title=" Nhà kho trải khắp Đông"
            description=" Nam Á "
          />
        </div>
      </div>
    </>
  );
}

export default FullFillment;

function FulfillmentItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-fit h-fit">
      <div className="text-[32px] text-[#0D9251] font-bold">{number}</div>
      <div className="text-[18px] text-[#686868] font-bold">{title}</div>
      <div className="text-[18px] text-[#686868] font-bold">{description}</div>
    </div>
  );
}
