import React from "react";
import TermHero from "./TermHero";
import Download from "@/components/ui/Download";

function Terms() {
  return (
    <>
      <TermHero />
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 1: Phạm vi dịch vụ và Quy trình vận hành" />
        <ul>
          <li>Dịch vụ Logistics toàn diện:</li>
          <li>
            Lưu trữ, bảo quản, đóng gói và bàn giao hàng hóa theo tiêu chuẩn an
            toàn cao nhất.
          </li>
          <li>Giao hàng đến đối tác vận chuyển uy tín.</li>
          <li>Quy trình giao nhận minh bạch:</li>
          <li>
            Phương thức và tiến trình giao nhận được xác định rõ ràng cho từng
            đơn hàng, đảm bảo tính chính xác và hiệu quả.
          </li>
          <li>
            Mọi thỏa thuận được ghi nhận chi tiết trong Phụ lục Hợp đồng hoặc
            văn bản thỏa thuận giữa hai bên.
          </li>
        </ul>
      </div>
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 2: Phí dịch vụ" />
        <ul>
          <li>Cơ cấu phí: Theo bảng giá kèm Phụ lục Hợp đồng.</li>
          <li>
            Điều chỉnh giá: Có thể thay đổi theo thị trường hoặc quyết định của
            Bên A, thông báo trước 15 ngày.
          </li>
        </ul>
      </div>
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 3: Thanh toán" />
        <ul>
          <li>
            Hồ sơ đối soát: Gửi vào thời điểm thoả thuận, gồm danh sách đơn
            hàng, tổng hợp tiền hàng thu hộ, và chi phí dịch vụ.
          </li>
          <li>
            Phản hồi và thanh toán: Bên B phản hồi hồ sơ trước 12 giờ cùng ngày,
            nếu không có phản hồi, coi như đồng ý với hồ sơ. Thanh toán qua
            chuyển khoản hoặc tiền mặt.
          </li>
        </ul>
      </div>
      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 4: Bảo hiểm hàng hóa" />
        <ul>
          <li>
            Trách nhiệm cung cấp thông tin: Bên B cung cấp đầy đủ thông tin,
            nguồn gốc, giấy phép của hàng hóa.
          </li>
          <li>
            Bồi thường: Bên A không chịu trách nhiệm với hàng hóa không khai
            đúng giá trị, mất mát, hư hỏng trước khi giao đến kho Bên A.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 5: Nghiệm thu, kiểm tra và xác minh hàng hóa" />
        <ul>
          <li>
            Đảm bảo chất lượng: Bên B chịu trách nhiệm về chất lượng hàng hóa.
          </li>
          <li>
            Nghiệm thu: Hai bên nghiệm thu, kiểm tra hàng hóa tại kho Bên A,
            biên bản nghiệm thu là cơ sở thanh toán công nợ.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 6: Bồi thường thiệt hại" />
        <ul>
          <li>
            Nếu vi phạm, bên bị vi phạm thông báo yêu cầu khắc phục. Nếu không
            khắc phục trong thời hạn yêu cầu, bên vi phạm phải chịu phạt 8% giá
            trị phần nghĩa vụ hợp đồng bị vi phạm và bồi thường thiệt hại trong
            vòng 30 ngày.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 7: Trách nhiệm do vi phạm hợp đồng" />
        <ul>
          <li>
            Trách nhiệm bồi thường của Bên B: Khi có lỗi từ Bên B hoặc hàng hóa
            bị cấm vận chuyển.
          </li>
          <li>
            Trách nhiệm bồi thường của Bên A: Khi lỗi từ Bên A trong quá trình
            cung cấp dịch vụ.
          </li>
          <li>
            Thỏa thuận mức bồi thường: Có thể được thỏa thuận trong Phụ lục hợp
            đồng.
          </li>
          <li>
            Thời hạn bồi thường: Trong vòng 30 ngày từ khi xác định trách nhiệm.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 8: Bảo mật thông tin" />
        <ul>
          <li>
            Không tiết lộ thông tin liên quan đến hợp đồng mà không có sự đồng ý
            trước bằng văn bản của bên còn lại, trừ trường hợp pháp luật yêu
            cầu.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 9: Hiệu lực và chấm dứt hợp đồng" />
        <ul>
          <li>
            Hợp đồng có hiệu lực từ ngày ký đến ngày được thỏa thuận trong hợp
            đồng. Có thể chấm dứt trước thời hạn theo thỏa thuận hoặc các quy
            định tại Điều 7 và 10.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 10: Bất khả kháng" />
        <ul>
          <li>
            Các sự kiện bất khả kháng như thiên tai, chiến tranh, thay đổi luật
            pháp, v.v. Khi xảy ra, bên bị ảnh hưởng phải thông báo ngay và có nỗ
            lực khắc phục.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 11: Quyền và nghĩa vụ của Bên A" />
        <ul>
          <li>Cung cấp dịch vụ cho hàng hóa hợp pháp.</li>
          <li>Từ chối nhận hàng bị cấm hoặc không có chứng dẫn bảo quản.</li>
          <li>Đơn phương chấm dứt hợp đồng khi Bên B vi phạm.</li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 12: Quyền và nghĩa vụ của Bên B" />
        <ul>
          <li>Cung cấp thông tin và tài liệu đầy đủ về hàng hóa.</li>
          <li>
            Chịu trách nhiệm về nguồn gốc, chất lượng và tính hợp pháp của hàng
            hóa.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 13: Giải quyết tranh chấp" />
        <ul>
          <li>
            Ưu tiên giải quyết bằng thương lượng, nếu không giải quyết được
            trong vòng 30 ngày, sẽ giải quyết tại Tòa án nơi Bên A có trụ sở
            chính.
          </li>
        </ul>
      </div>

      <div className="max-w-[1320px] w-full mx-auto flex flex-col gap-5 justify-start items-start p-5">
        <TitleService title="Điều 14: Điều khoản chung" />
        <ul>
          <li>Luật áp dụng:</li>
          <li>Hợp đồng được điều chỉnh bởi pháp luật Việt Nam.</li>
          <li>Sửa đổi hợp đồng:</li>
          <li>
            Mọi sửa đổi, bổ sung hợp đồng phải được lập thành văn bản và ký bởi
            người có thẩm quyền của hai bên.
          </li>
          <li>Chuyển giao quyền và nghĩa vụ:</li>
          <li>
            Không được chuyển giao quyền và nghĩa vụ cho bên thứ ba mà không có
            sự đồng ý bằng văn bản của bên còn lại.
          </li>
        </ul>
      </div>
      <Download />
    </>
  );
}

export default Terms;

function TitleService({ title }: { title: string }) {
  return (
    <div className="flex items-center md:justify-start justify-center w-full">
      <div className="text-[20px] md:whitespace-nowrap font-bold text-[#0D9251] h-[52px] text-center flex items-center px-3 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        {title}
      </div>
    </div>
  );
}
