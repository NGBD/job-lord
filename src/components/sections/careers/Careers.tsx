import React from "react";
import HeroCareer from "./HeroCareer";

function Careers() {
  return (
    <>
      <HeroCareer />
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start px-5 py-10">
        <TitleService title="CƠ HỘI NGHỀ NGHIỆP: CHUYÊN VIÊN TRUYỀN THÔNG & XÂY DỰNG THƯƠNG HIỆU" />
        <div className="w-full flex flex-col gap-3">
          <p>
            Bạn là một chuyên gia truyền thông sáng tạo, đam mê xây dựng thương
            hiệu và chinh phục thị trường? Hãy gia nhập đội ngũ năng động của
            chúng tôi!
          </p>
          <h3 className="font-bold">Mô tả công việc:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              Xây dựng và triển khai các chiến lược truyền thông đối phá, nâng
              tầm hình ảnh thương hiệu trên thị trường.
            </li>
            <li>
              Quản lý và tối ưu hóa hiệu quả các kênh truyền thông nội bộ và bên
              ngoài (website, fanpage,...).
            </li>
            <li>
              Sản xuất và phân phối nội dung sáng tạo trên các tin phẩm truyền
              thông nội bộ.
            </li>
            <li>
              Tổ chức và giám sát các sự kiện truyền thông, đảm bảo tiến độ và
              hiệu quả tối ưu.
            </li>
            <li>
              Phân tích và báo cáo kết quả các hoạt động truyền thông, đề xuất
              cải tiến liên tục.
            </li>
            <li>Thực hiện các nhiệm vụ khác theo yêu cầu của Ban Lãnh đạo.</li>
          </ul>

          <h3 className="font-bold mt-3">Yêu cầu:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Sở hữu laptop cá nhân.</li>
            <li>
              Tốt nghiệp Đại học chuyên ngành Truyền thông, Marketing, Báo chí
              hoặc các ngành liên quan.
            </li>
            <li>Tối thiểu 2 năm kinh nghiệm ở vị trí tương đương.</li>
            <li>Khả năng sáng tạo, đổi mới và tư duy chiến lược.</li>
            <li>
              Kỹ năng tổ chức, làm việc độc lập và làm việc nhóm hiệu quả.
            </li>
            <li>Kỹ năng đàm phán, thuyết phục và trình bày xuất sắc.</li>
            <li>
              Năng động, sáng tạo, ý tưởng và có định hướng chi tiết trong công
              việc.
            </li>
            <li>Khả năng phân tích, tự học và có gu thẩm mỹ tốt.</li>
            <li>Trung thực, trách nhiệm và chuyên nghiệp.</li>
          </ul>

          <h3 className="font-bold mt-3">Quyền lợi:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              Mức lương cạnh tranh: 10 triệu - 35 triệu VNĐ (hoặc cao hơn tùy
              theo năng lực) + phụ cấp + thưởng hiệu suất.
            </li>
            <li>
              Cơ hội phát triển bản thân: Được công ty tài trợ 100% chi phí các
              khóa đào tạo chuyên sâu.
            </li>
            <li>
              Chế độ đãi ngộ hấp dẫn: Thưởng Tết, thưởng Lễ, lương thâm niên,
              BHXH.
            </li>
            <li>
              Môi trường làm việc chuyên nghiệp: Năng động, nhiệt tình, thân
              thiện.
            </li>
            <li>
              Chế độ phúc lợi toàn diện: Du lịch 2 lần/năm, mua hàng nội bộ, đào
              tạo kỹ năng mềm, thư viện miễn phí,...
            </li>
          </ul>

          <div className="mt-3">
            <p>
              <strong>Thời gian làm việc:</strong> Thứ 2 - sáng thứ 7 (8h00 -
              18h00, nghỉ trưa 1h30p)
            </p>
            <p>
              <strong>Địa chỉ làm việc:</strong>
            </p>
            <p>
              Liền kề B9 -23, Khu B Gleximco, Đường Lê Trọng Tấn, Phường Dương
              Nội, Hà Đông, Hà Nội.
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
      <div className="text-[20px] text-center md:text-left md:whitespace-nowrap font-bold text-[#0D9251] min-h-[52px] flex items-center px-3 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        {title}
      </div>
    </div>
  );
}
