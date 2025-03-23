import React from "react";
import HeroCareer from "./HeroCareer";

function Careers() {
  return (
    <>
      <HeroCareer />
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start px-5 py-10">
        <TitleService title="1.Nhân viên kinh doanh" />
        <div className="w-full flex flex-col gap-3">
          <h3 className="font-bold">Mô tả công việc:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              Lên kế hoạch và thực hiện các chiến dịch truyền thông và xây dựng
              hình ảnh cho công ty.
            </li>
            <li>
              Tổ chức, chịu trách nhiệm về hiệu quả truyền thông, xây dựng
              thương hiệu của Công ty.
            </li>
            <li>
              Quản lý và chịu trách nhiệm về nội dung các kênh truyền thông bên
              ngoài và nội bộ: website, fanpage,...
            </li>
            <li>
              Chịu trách nhiệm sản xuất, triển khai nội dung và phân phối các
              sản phẩm truyền thông nội bộ trên các kênh nội bộ
            </li>
            <li>
              Theo dõi và báo cáo tiến độ, kết quả của các sự kiện đang diễn ra
            </li>
            <li>Các công việc khác theo sự phân công của BLĐ.</li>
          </ul>

          <h3 className="font-bold mt-3">Yêu cầu:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Có laptop</li>
            <li>
              Nam/nữ, Tốt nghiệp Đại học các chuyên ngành về: Truyền thông,
              Marketing, Báo chí, v.v...
            </li>
            <li>Có tối thiểu 2 năm kinh nghiệm ở vị trí tương đương.</li>
            <li>Kỹ năng sáng tạo và đổi mới</li>
            <li>Kỹ năng tổ chức và làm việc độc lập.</li>
            <li>Kỹ năng về đàm phán, thuyết phục và trình bày tốt.</li>
            <li>
              Năng động, sáng tạo, có định hướng chi tiết trong công việc.
            </li>
            <li>Có khả năng phân tích, khả năng tự học, có gu thẩm mỹ.</li>
            <li>Trung thực, trách nhiệm, chuyên nghiệp.</li>
          </ul>

          <h3 className="font-bold mt-3">Quyền lợi được hưởng</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              Lương cứng 20-30tr ( có thể cao hơn tùy năng lực) + phụ cấp +
              Thưởng
            </li>
            <li>
              Được công ty chi trả 100% chi phí các khóa đào tạo tham gia bên
              ngoài.
            </li>
            <li>Thưởng Tết hấp dẫn, thưởng các ngày Lễ.</li>
            <li>Lương thâm niên, Đóng BHXH</li>
            <li>Môi trường năng động, nhiệt tình, thân thiện.</li>
            <li>Du lịch 1 lần/ năm.</li>
            <li>
              Hưởng các chính sách đãi ngộ đặc biệt tại công ty (Mua hàng nội
              bộ, Đào tạo về kỹ năng mềm, Thư viện miễn phí, Du lịch, ...)
            </li>
          </ul>

          <div className="mt-3">
            <p>
              <strong>Thời gian làm việc:</strong> Từ thứ 2 đến sáng thứ 7 (
              8h00 đến 17h00), nghỉ trưa 1h00p)
            </p>
            <p>
              <strong>Địa chỉ làm việc:</strong>
            </p>
            <p>
              Cơ sở 1: tầng 25, toà Viwaseen Tower, số 48 Tố Hữu, Trung Văn, Nam
              Từ Liêm
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;

function TitleService({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-start w-full mb-5">
      <div className="text-[20px] whitespace-nowrap font-bold text-[#0D9251] h-[52px] flex items-center px-3 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        {title}
      </div>
    </div>
  );
}
