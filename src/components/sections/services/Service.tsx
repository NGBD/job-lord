import React from "react";
import HeroService from "./HeroService";
import Image from "next/image";
import SecondHeroService from "./SecondHeroService";
import ThirdServiceHero from "./ThirdServiceHero";
import Download from "@/components/ui/Download";
function Service() {
  return (
    <>
      <HeroService />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <TitleService title="1. Nhận hàng từ Đối Tác" />
        <ContentService
          image="/images/service-1.webp"
          content1="Thỏa thuận và lên lịch nhận hàng: AFG sẽ làm việc với đối tác để thống nhất các điều khoản và thời gian nhận hàng. Thông tin về lô hàng, số lượng, loại sản phẩm và ngày giao hàng sẽ được xác nhận trước khi vận chuyển."
          content2={
            "Vận chuyển hàng hóa: Đối tác sẽ gửi hàng từ Việt Nam hoặc các địa điểm khác đến kho của AFG tại nước ngoài. Hàng hóa sẽ được vận chuyển thông qua các dịch vụ logistics đáng tin cậy để đảm bảo an toàn và đúng hạn."
          }
          content3={
            "Xác nhận nhận hàng: Khi lô hàng đến kho của AFG, nhân viên kho sẽ tiến hành kiểm tra sơ bộ và xác nhận số lượng, loại hàng theo thông tin từ đối tác. Mọi sai lệch sẽ được báo cáo ngay lập tức để xử lý kịp thời."
          }
        />
        <TitleService title="2. Kiểm Tra và Phân Loại Hàng Hóa" />
        <ContentService
          reverseDirection={true}
          image="/images/service-2.webp"
          content1="Kiểm tra chất lượng và số lượng: Hàng hóa sẽ được kiểm tra kỹ lưỡng để đảm bảo không bị hư hỏng trong quá trình vận chuyển. Kiểm tra này bao gồm việc xác định tình trạng bao bì, sản phẩm bên trong, và đối chiếu với đơn đặt hàng"
          content2="Phân loại hàng hóa: Sau khi kiểm tra, hàng hóa sẽ được phân loại theo các tiêu chí như loại sản phẩm, kích thước, trọng lượng, và điều kiện bảo quản. Quá trình này giúp tối ưu hóa việc lưu trữ và truy xuất hàng hóa sau này."
        />
        <TitleService title="3. Lưu Trữ Hàng Hóa An Toàn" />
        <ContentService
          image="/images/service-3.webp"
          content1="Lưu trữ trong kho: Sản phẩm sẽ được lưu trữ trong các khu vực kho phù hợp với điều kiện bảo quản yêu cầu (ví dụ: nhiệt độ, độ ẩm). Hệ thống quản lý kho hiện đại của AFG đảm bảo hàng hóa được sắp xếp khoa học, dễ dàng truy xuất."
          content2="Quản lý kho: Tất cả các sản phẩm lưu trữ sẽ được ghi nhận vào hệ thống quản lý kho, bao gồm thông tin chi tiết về số lô, ngày nhập kho, vị trí lưu trữ và tình trạng hàng hóa. Đối tác có thể truy cập thông tin này qua hệ thống quản lý khách hàng để kiểm tra tình trạng hàng hóa bất cứ lúc nào."
          content3="An ninh và bảo hiểm: Kho hàng của AFG được trang bị hệ thống an ninh hiện đại và bảo hiểm để bảo vệ hàng hóa khỏi các rủi ro như cháy nổ, trộm cắp, hoặc hư hỏng."
        />
        <TitleService title="4. Truy Xuất và Quản Lý Hàng Hóa" />
        <ContentService
          reverseDirection={true}
          image="/images/service-4.webp"
          content1="Yêu cầu truy xuất hàng hóa: Khi đối tác cần xuất hàng, họ chỉ cần gửi yêu cầu truy xuất thông qua hệ thống hoặc liên hệ với đội ngũ hỗ trợ của AFG. Thông tin chi tiết về sản phẩm cần xuất sẽ được kiểm tra và xác nhận."
          content2="Chuẩn bị và giao hàng: AFG sẽ tiến hành xuất hàng theo yêu cầu của đối tác, bao gồm đóng gói, dán nhãn và chuẩn bị giấy tờ cần thiết. Hàng hóa sau đó sẽ được giao đến địa điểm yêu cầu theo lịch trình đã định."
          content3="Báo cáo và cập nhật: AFG cung cấp báo cáo định kỳ về tình trạng hàng hóa, bao gồm số lượng tồn kho, hàng hóa đã xuất và các thông tin liên quan khác để đối tác có thể quản lý và điều chỉnh kế hoạch kinh doanh hiệu quả."
          content4="Quy trình này được thiết kế để đảm bảo rằng hàng hóa của đối tác được quản lý và lưu trữ an toàn, giúp tối ưu hóa chuỗi cung ứng và đảm bảo sự hài lòng của khách hàng cuối cùng. AFG cam kết cung cấp dịch vụ chất lượng cao, hỗ trợ các đối tác phát triển kinh doanh bền vững tại thị trường Đông Nam Á."
        />
      </div>
      <SecondHeroService />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          image="/images/service-6.webp"
          secondMainTitle="1.Xử lý Đơn Hàng"
          bigTitle="Nhận Đơn Hàng:"
          content1={
            "Tích hợp hệ thống: AFG có hệ thống quản lý đơn hàng cho 3 bộ phận:Telesale, kho hàng, vận đơn- xử lý trực tiếp. Các đơn hàng cập nhật trạng thái real time trên hệ thống. Tất cả quy trình khách hàng có thể nắm được và theo dõi"
          }
          content2={
            "Ghi nhận chi tiết đơn hàng: Mọi chi tiết của đơn hàng, bao gồm mã sản phẩm, số lượng, địa chỉ giao hàng, và phương thức thanh toán, được ghi nhận chính xác. Điều này đảm bảo không có sai sót trong quá trình xử lý."
          }
          bigTitleSecond="Xác Nhận Đơn Hàng:"
          content6={
            "Liên lạc với khách hàng: AFG sẽ gọi điện hoặc gửi tin nhắn SMS để xác nhận đơn hàng với khách hàng. Cuộc gọi xác nhận không chỉ giúp kiểm tra lại thông tin giao hàng mà còn tạo cơ hội để giải đáp mọi thắc mắc của khách hàng, củng cố lòng tin và sự hài lòng."
          }
          content7={
            "Kiểm tra và điều chỉnh: Nếu có bất kỳ thông tin nào cần chỉnh sửa (ví dụ: địa chỉ giao hàng, số điện thoại), AFG sẽ cập nhật ngay lập tức trong hệ thống để đảm bảo đơn hàng được xử lý chính xác."
          }
        />
        <SecondContentItem
          reverseDirection={true}
          image="/images/service-8.webp"
          mainTitle="2. Vận Chuyển Nội Địa và Quản Lý Dòng Tiền"
          bigTitle="Hợp Tác với Các Đơn Vị Vận Chuyển:"
          content1={
            "Lựa chọn đối tác vận chuyển: AFG hợp tác với các đơn vị vận chuyển uy tín như J&T, Flash, và nhiều đối tác khác để đảm bảo hàng hóa được giao đến khách hàng một cách an toàn và nhanh chóng."
          }
          content2={
            "Xử lý đóng gói: Hàng hóa được đóng gói cẩn thận theo các tiêu chuẩn bảo vệ hàng hóa nhằm tránh hư hỏng trong quá trình vận chuyển."
          }
          content3={
            "Theo dõi và thông báo: Hệ thống của AFG theo dõi tình trạng của từng đơn hàng và cung cấp cập nhật về quá trình giao hàng cho cả đối tác và khách hàng. Thông báo bao gồm ngày giao hàng dự kiến, trạng thái giao hàng (đang vận chuyển, đã giao, gặp sự cố, v.v.)."
          }
        />
        <SecondContentItem
          image="/images/service-9.webp"
          bigTitle="Thu Hộ COD:"
          content1={
            "Thu tiền mặt: Trong trường hợp khách hàng chọn thanh toán khi nhận hàng (COD), nhân viên giao hàng của đối tác vận chuyển sẽ thu tiền mặt từ khách hàng tại thời điểm giao hàng."
          }
          content2={
            "Chuyển đổi và báo cáo đối soát: Số tiền thu được từ COD sẽ được chuyển về AFG, sau đó chuyển đổi thành VNĐ và báo cáo đối soát chi tiết sẽ được gửi tới đối tác. Quá trình này giúp đảm bảo sự minh bạch và chính xác trong quản lý dòng tiền."
          }
          content3={
            "Chuyển khoản cho đối tác: Số tiền sau khi trừ đi phí dịch vụ sẽ được AFG chuyển khoản cho đối tác theo lịch trình thỏa thuận, giúp đối tác dễ dàng kiểm soát và quản lý tài chính."
          }
        />
      </div>
      <ThirdServiceHero />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          bigTitle="Đối Tác Vận Chuyển Tin Cậy:"
          image="/images/service-7.webp"
          content1="XNE: AFG lựa chọn XNE làm đối tác vận chuyển quốc tế vì sự uy tín và chuyên nghiệp trong ngành. XNE có mạng lưới vận chuyển rộng khắp và kinh nghiệm trong việc xử lý các lô hàng quốc tế"
          content2="Đảm bảo an toàn và đúng hẹn: XNE cam kết vận chuyển hàng hóa đến đúng hẹn và bảo đảm an toàn cho hàng hóa, nhờ vào các quy trình vận chuyển chuẩn mực và công nghệ theo dõi tiên tiến"
        />
      </div>
      <SecondHeroService />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          reverseDirection={true}
          image="/images/service-10.webp"
          mainTitle="1. Hỗ Trợ Set Up Kho Bãi và Văn Phòng"
          bigTitle="Tìm Kiếm và Thiết Lập Địa Điểm:"
          content1="Tìm kiếm địa điểm: AFG hỗ trợ đối tác tìm kiếm các vị trí kho bãi và văn phòng với giá thuê hợp lý. Chúng tôi có mạng lưới rộng lớn và kiến thức sâu sắc về thị trường bất động sản tại Đông Nam Á, giúp đối tác chọn được vị trí phù hợp với nhu cầu kinh doanh."
          content2="Thiết lập và trang bị: Sau khi tìm được địa điểm, AFG sẽ hỗ trợ thiết lập cơ sở hạ tầng, trang bị các thiết bị cần thiết và thiết kế không gian làm việc tối ưu, đảm bảo môi trường làm việc chuyên nghiệp và hiệu quả."
        />
        <SecondContentItem
          secondMainTitle="2. Set Up và Đào Tạo Đội Ngũ Nhân Sự"
          bigTitle="Hỗ Trợ Xây Dựng Đội Ngũ:"
          content1="Tuyển dụng và set up: AFG giúp đối tác tuyển dụng và set up đội ngũ nhân sự, từ quản lý đến nhân viên vận hành. Chúng tôi cung cấp quy trình tuyển dụng chuẩn mực và hỗ trợ thiết lập các hệ thống quản lý nhân sự hiệu quả."
          content2="Công nghệ tiên tiến: Để tối ưu hóa hiệu suất làm việc, AFG trang bị cho đội ngũ các công cụ công nghệ tiên tiến, từ phần mềm quản lý kho hàng, hệ thống CRM, đến các công cụ hỗ trợ làm việc từ xa."
          bigTitleSecond="Đào Tạo Nhân Sự:"
          content6="Khóa đào tạo: AFG cung cấp các khóa đào tạo chuyên sâu về quy trình vận hành, kỹ năng bán hàng, dịch vụ khách hàng, và quản lý kho bãi. Những khóa đào tạo này giúp nhân sự của đối tác làm việc hiệu quả và nâng cao năng suất."
          content7="Tiết kiệm chi phí: Bằng cách đào tạo nhân sự nội bộ, đối tác có thể giảm thiểu chi phí và đảm bảo rằng đội ngũ của họ có đủ kỹ năng để đáp ứng các yêu cầu công việc."
          image="/images/service-11.jpeg"
        />

        <div
          className={`max-w-[1320px] mx-auto flex flex-col md:grid items-start justify-center gap-[80px] md:grid-cols-2 `}
        >
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3 justify-between items-center h-full gap-y-10 mt-10">
              <Image
                src="/images/jnt.webp"
                alt="Warehouse Background"
                width={600}
                height={400}
                priority
                quality={100}
                className="w-[200px] aspect-[370/100]"
              />
              <Image
                src="/images/ninja.webp"
                alt="Warehouse Background"
                width={600}
                height={400}
                priority
                quality={100}
                className="w-[200px] aspect-[370/190]"
              />
              <Image
                src="/images/flash.webp"
                alt="Warehouse Background"
                width={600}
                height={400}
                priority
                quality={100}
                className="w-[200px] aspect-[370/190]"
              />{" "}
              <Image
                src="/images/royal.png"
                alt="Warehouse Background"
                width={600}
                height={400}
                priority
                quality={100}
                className="w-[200px] aspect-[2/1] rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <TitleService title="3. Kết Nối với Đơn Vị Vận Chuyển Nội Địa" />
            <h3 className="text-[18px] font-bold">Hỗ Trợ Set Up Tài Khoản:</h3>
            <ul className="text-[18px] flex flex-col gap-2 list-disc">
              <li>
                Thiết lập tài khoản: Là đại lý của nhiều đơn vị vận chuyển nội
                địa như J&T, Flash và các đối tác khác, AFG giúp đối tác thiết
                lập tài khoản vận chuyển với mức chiết khấu ưu đãi. Điều này
                không chỉ giúp giảm chi phí vận chuyển mà còn tăng cường khả
                năng quản lý đơn hàng
              </li>
              <li>
                Quản lý đơn hàng: Với hệ thống quản lý đơn hàng tiên tiến, đối
                tác có thể dễ dàng theo dõi và điều phối các đơn hàng, đảm bảo
                hàng hóa được giao đến khách hàng một cách nhanh chóng và an
                toàn.
              </li>
            </ul>
          </div>
        </div>
        <SecondContentItem
          secondMainTitle="4. Hỗ Trợ Lập Công Ty và Pháp Lý, Quản Lý Dòng Tiền"
          bigTitle="Dịch Vụ Lập Công Ty và Pháp Lý:"
          content1="Mở công ty: AFG cung cấp dịch vụ tư vấn và hỗ trợ đối tác trong quá trình mở công ty tại các quốc gia Đông Nam Á. Chúng tôi đảm bảo quá trình này diễn ra nhanh chóng và tuân thủ các quy định pháp lý địa phương."
          content2="Hoàn thiện giấy tờ pháp lý: AFG hỗ trợ đối tác hoàn thiện các thủ tục pháp lý cần thiết, bao gồm đăng ký kinh doanh, giấy phép hoạt động, và các giấy tờ liên quan khác, giúp đối tác khởi đầu kinh doanh thuận lợi."
          bigTitleSecond="Hỗ Trợ Dòng Tiền:"
          content6="Quản lý tài chính: AFG cung cấp các dịch vụ quản lý dòng tiền, bao gồm quản lý thu chi, báo cáo tài chính, và tối ưu hóa dòng tiền. Chúng tôi đảm bảo rằng dòng tiền của đối tác luôn được quản lý an toàn, giảm thiểu rủi ro tài chính và hỗ trợ trong việc hoạch định chiến lược tài chính dài hạn."
          image="/images/service-12.webp"
        />
      </div>
      <Download />
    </>
  );
}

export default Service;

function TitleService({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center w-full mb-5">
      <div className="text-[20px] whitespace-nowrap font-bold text-[#0D9251] h-[52px] flex items-center px-3 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        {title}
      </div>
    </div>
  );
}

function ContentService({
  image,
  content1,
  content2,
  content3,
  content4,
  content5,
  reverseDirection = false,
  width = 600,
  height = 400,
}: {
  image: string;
  content1: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  reverseDirection?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`max-w-[1320px] mx-auto flex flex-col md:grid items-center justify-center gap-[80px] md:grid-cols-2 ${
        reverseDirection ? "md:[&>img]:order-first" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <ul className="text-[18px] flex flex-col gap-5 list-disc">
          {content1 && <li>{content1}</li>}
          {content2 && <li>{content2}</li>}
          {content3 && <li>{content3}</li>}
          {content4 && <li>{content4}</li>}
          {content5 && <li>{content5}</li>}
        </ul>
      </div>
      <Image
        src={image}
        alt="Warehouse Background"
        className={`object-cover max-w-[${width}px] max-h-[${height}px]`}
        width={width}
        height={height}
        priority
        quality={100}
      />
    </div>
  );
}

function SecondContentItem({
  image,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
  content9,
  content10,
  reverseDirection = false,
  width = 600,
  height = 400,
  bigTitle,
  bigTitleSecond,
  mainTitle,
  secondMainTitle,
}: {
  image: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
  content8?: string;
  content9?: string;
  content10?: string;
  reverseDirection?: boolean;
  width?: number;
  height?: number;
  bigTitle?: string;
  bigTitleSecond?: string;
  mainTitle?: string;
  secondMainTitle?: string;
}) {
  return (
    <div
      className={`max-w-[1320px] mx-auto flex flex-col md:grid items-start justify-center gap-[80px] md:grid-cols-2 ${
        reverseDirection ? "md:[&>div:last-child]:order-first" : ""
      }`}
    >
      <div className="flex flex-col gap-2 items-start">
        {mainTitle && <TitleService title={mainTitle} />}
        {bigTitle && <h3 className="text-[18px] font-bold">{bigTitle}</h3>}
        <ul className="text-[18px] flex flex-col gap-2 list-disc">
          {content1 && <li>{content1}</li>}
          {content2 && <li>{content2}</li>}
          {content3 && <li>{content3}</li>}
          {content4 && <li>{content4}</li>}
          {content5 && <li>{content5}</li>}
        </ul>
        {bigTitleSecond && (
          <h3 className="text-[18px] font-bold">{bigTitleSecond}</h3>
        )}
        <ul className="text-[18px] flex flex-col gap-2 list-disc">
          {content6 && <li>{content6}</li>}
          {content7 && <li>{content7}</li>}
          {content8 && <li>{content8}</li>}
          {content9 && <li>{content9}</li>}
          {content10 && <li>{content10}</li>}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        {secondMainTitle && <TitleService title={secondMainTitle} />}
        <Image
          src={image}
          alt="Warehouse Background"
          className={`object-cover max-w-[${width}px] max-h-[${height}px] rounded-3xl`}
          width={width}
          height={height}
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
