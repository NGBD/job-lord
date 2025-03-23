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
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-5 md:p-[40px]">
        <TitleService title="1. Nhận hàng từ Đối Tác" />
        <SecondContentItem
          image="/images/service-1.webp"
          bigTitle="Thỏa thuận và Lịch trình Nhận hàng:"
          content1="IFG hợp tác chặt chẽ với đối tác để xác lập các điều khoản và lịch trình nhận hàng chi tiết giao đầu mối kho vận tại thị trường trực tiếp giám sát. Thông tin lô hàng, số lượng, loại sản phẩm và ngày giao hàng sẽ được xác nhận trước khi vận chuyển, đảm bảo quy trình diễn ra suôn sẻ và hiệu quả."
          bigTitleSecond="Vận chuyển hàng hóa quốc tế từ Trung Quốc và Việt Nam: Giải pháp Logistics tin cậy từ IFG"
          content6={
            "IFG cung cấp dịch vụ vận chuyển hàng hóa quốc tế liền mạch với các đối tác vận chuyển uy tín hàng đầu tại Trung Quốc và Việt Nam,vận chuyển hàng hóa an toàn đến mạng lưới kho bãi chiến lược của chúng tôi tại Đông Nam Á. Chúng tôi hợp tác với các đối tác logistics uy tín hàng đầu, đảm bảo hàng hóa được vận chuyển an toàn, nhanh chóng và đúng hẹn. IFG cam kết mang đến giải pháp logistics toàn diện, tối ưu hóa chuỗi cung ứng và nâng cao hiệu quả kinh doanh cho đối tác."
          }
          bigTitleThird="Khi hàng đến kho:"
          content11={
            "1. Xác nhận nhận hàng: Khi hàng đến kho IFG, nhân viên kiểm tra sơ bộ. Xác nhận số lượng, loại hàng so với thông tin đối tác. Báo cáo ngay mọi sai lệch để xử lý nếu có."
          }
          content12={
            "2. Kiểm tra chi tiết: Kiểm tra kỹ lưỡng chất lượng, tình trạng hàng hóa. Phân loại hàng hóa theo quy định. Ghi nhận thông tin vào hệ thống quản lý kho."
          }
          content13={
            "3.Lưu kho: Sắp xếp hàng hóa vào vị trí lưu trữ phù hợp. Đảm bảo điều kiện lưu trữ an toàn, đúng tiêu chuẩn.Cập nhật số lượng tồn kho lên hệ thống."
          }
        />
        <TitleService title="2. Lưu trữu hàng hóa an toàn" />
        <SecondContentItem
          reverseDirection={true}
          image="/images/service-2.webp"
          bigTitle="Lưu trữ Kho bãi Chuyên nghiệp:"
          content1="IFG cung cấp dịch vụ lưu trữ kho bãi tối ưu, đảm bảo hàng hóa được bảo quản trong môi trường phù hợp (nhiệt độ, độ ẩm). Hệ thống quản lý kho hiện đại của chúng tôi giúp sắp xếp hàng hóa khoa học, truy xuất nhanh chóng, mang lại hiệu quả cao cho đối tác."
          bigTitleSecond="Quản lý kho thông minh: Kiểm soát toàn diện, truy cập tức thì:"
          content6="Tại IFG, chúng tôi áp dụng hệ thống quản lý kho tiên tiến, ghi nhận chi tiết mọi thông tin về sản phẩm, từ số lô, ngày nhập kho, vị trí lưu trữ đến tình trạng hàng hóa. Đối tác của IFG có thể hoàn toàn yên tâm khi mọi thông tin đều được cập nhật minh bạch và có thể truy cập tức thì thông qua hệ thống quản lý khách hàng chuyên biệt. IFG cam kết mang đến sự an tâm tuyệt đối và khả năng kiểm soát toàn diện cho đối tác, giúp tối ưu hóa chuỗi cung ứng và nâng cao hiệu quả kinh doanh."
          bigTitleThird="An ninh và Bảo hiểm: An tâm tuyệt đối cho hàng hóa của bạn"
          content11="IFG cam kết bảo vệ toàn diện hàng hóa của đối tác bằng hệ thống an ninh đa lớp hiện đại và chương trình bảo hiểm toàn diện. Kho hàng của chúng tôi được trang bị các giải pháp an ninh tiên tiến, ngăn chặn hiệu quả các rủi ro như cháy nổ, trộm cắp và hư hỏng. IFG mang đến sự an tâm tuyệt đối, giúp đối tác tập trung phát triển kinh doanh mà không phải lo lắng về sự an toàn của hàng hóa."
        />
        <TitleService title="3. Truy xuất và quản lý hàng hóa" />
        <SecondContentItem
          image="/images/service-3.webp"
          bigTitle="Yêu cầu Truy xuất Hàng hóa: Quy trình đơn giản, đáp ứng nhanh chóng"
          content1="Tại IFG, chúng tôi hiểu rằng thời gian là yếu tố then chốt trong kinh doanh. Vì vậy, quy trình yêu cầu truy xuất hàng hóa của chúng tôi được thiết kế tối ưu, đảm bảo sự tiện lợi và hiệu quả tối đa. Đối tác có thể dễ dàng gửi yêu cầu thông qua hệ thống quản lý trực tuyến hoặc liên hệ trực tiếp với đội ngũ hỗ trợ chuyên nghiệp của IFG. Mọi thông tin chi tiết về sản phẩm cần xuất sẽ được xử lý nhanh chóng và chính xác, đảm bảo hàng hóa được giao đúng thời gian và địa điểm yêu cầu. IFG cam kết mang đến trải nghiệm dịch vụ xuất sắc, giúp đối tác tối ưu hóa chuỗi cung ứng và nâng cao năng lực cạnh tranh."
          bigTitleSecond="Xuất kho và Giao hàng: Quy trình tinh gọn, đảm bảo đúng hẹn"
          content6="IFG cam kết thực hiện quy trình xuất kho và giao hàng một cách nhanh chóng và chính xác. Khi nhận được yêu cầu từ đối tác, chúng tôi sẽ tiến hành đóng gói chuyên nghiệp, dán nhãn đúng quy chuẩn và hoàn thiện các thủ tục giấy tờ cần thiết. Hàng hóa sau đó sẽ được vận chuyển đến địa điểm chỉ định, tuân thủ nghiêm ngặt lịch trình đã thỏa thuận. AFG mang đến giải pháp giao hàng tin cậy, giúp đối tác tối ưu hóa thời gian và nâng cao sự hài lòng của khách hàng."
          bigTitleThird="Báo cáo và Cập nhật: Thông tin minh bạch, hỗ trợ quyết định kinh doanh"
          content3="IFG cam kết cung cấp thông tin minh bạch và kịp thời cho đối tác thông qua các báo cáo định kỳ. Chúng tôi cung cấp báo cáo chi tiết về tình trạng hàng hóa, bao gồm số lượng tồn kho, lịch sử xuất nhập và các thông tin liên quan. Những báo cáo này giúp đối tác nắm bắt chính xác tình hình kinh doanh, từ đó đưa ra các quyết định chiến lược hiệu quả. IFG tin rằng, sự minh bạch và thông tin chính xác là nền tảng để xây dựng mối quan hệ hợp tác bền vững và thành công."
          bigTitleFourth="Quy trình quản lý kho tối ưu: Nền tảng vững chắc cho sự thành công của đối tác"
          content15="Tại IFG, chúng tôi thiết kế quy trình quản lý kho toàn diện, đảm bảo hàng hóa của đối tác được lưu trữ và bảo quản an toàn tuyệt đối. Chúng tôi cam kết tối ưu hóa chuỗi cung ứng, mang lại sự hài lòng tối đa cho khách hàng cuối cùng. IFG không chỉ cung cấp dịch vụ kho bãi chuyên nghiệp, mà còn là đối tác chiến lược, đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững tại thị trường Đông Nam Á đầy tiềm năng."
        />
      </div>
      <SecondHeroService />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          image="/images/service-6.webp"
          secondMainTitle="1.Xử lý Đơn Hàng"
          bigTitle="Nhận Đơn Hàng:"
          content1={
            "Hệ thống quản lý đơn hàng tích hợp: Kiểm soát toàn diện, cập nhật theo thời gian thực IFG tự hào sở hữu hệ thống quản lý đơn hàng tiên tiến, tích hợp liền mạch giữa ba bộ phận: Telesale, Kho hàng và Vận đơn - Xử lý trực tiếp. Mọi thay đổi trạng thái đơn hàng đều được cập nhật theo thời gian thực, đảm bảo tính chính xác và minh bạch. Khách hàng có thể dễ dàng theo dõi toàn bộ quy trình, từ khi đặt hàng đến khi nhận hàng, mang đến sự an tâm và tin tưởng tuyệt đối. IFG cam kết mang đến trải nghiệm dịch vụ vượt trội, tối ưu hóa hiệu quả hoạt động và nâng cao sự hài lòng của khách hàng."
          }
          content2={
            "Ghi nhận đơn hàng chính xác tuyệt đối: Nền tảng cho quy trình xử lý hoàn hảo Tại IFG, chúng tôi hiểu rằng sự chính xác trong từng chi tiết đơn hàng là yếu tố then chốt để đảm bảo quy trình xử lý diễn ra suôn sẻ. Mọi thông tin, từ mã sản phẩm, số lượng, địa chỉ giao hàng đến phương thức thanh toán, đều được ghi nhận một cách tỉ mỉ và chính xác tuyệt đối. Chúng tôi loại bỏ hoàn toàn khả năng sai sót, đảm bảo từng đơn hàng được xử lý một cách hoàn hảo, mang đến sự hài lòng tối đa cho khách hàng."
          }
          bigTitleSecond="Xác Nhận Đơn Hàng:"
          content6={
            "Tương tác chủ động với khách hàng: Xây dựng niềm tin, củng cố sự hài lòng Tại IFG, chúng tôi coi trọng việc xây dựng mối quan hệ bền chặt với khách hàng. Sau khi nhận đơn hàng, chúng tôi sẽ chủ động liên lạc qua điện thoại hoặc tin nhắn SMS để xác nhận thông tin chi tiết. Cuộc gọi xác nhận không chỉ giúp đảm bảo tính chính xác của đơn hàng, mà còn là cơ hội để chúng tôi lắng nghe và giải đáp mọi thắc mắc của khách hàng. Chúng tôi tin rằng, sự tương tác chủ động này giúp củng cố niềm tin, tăng cường sự hài lòng và xây dựng mối quan hệ hợp tác lâu dài với khách hàng."
          }
          content7={
            "Kiểm tra và Điều chỉnh Linh hoạt: Đảm bảo đơn hàng chính xác đến từng chi tiết Tại IFG, chúng tôi hiểu rằng sự linh hoạt là yếu tố quan trọng để đảm bảo sự hài lòng của khách hàng. Nếu có bất kỳ thông tin nào cần điều chỉnh, chẳng hạn như địa chỉ giao hàng hoặc số điện thoại, chúng tôi sẽ cập nhật ngay lập tức vào hệ thống. Quy trình kiểm tra và điều chỉnh linh hoạt này đảm bảo mọi đơn hàng đều được xử lý chính xác, loại bỏ hoàn toàn rủi ro sai sót và mang đến trải nghiệm dịch vụ tốt nhất cho khách hàng."
          }
        />
        <SecondContentItem
          reverseDirection={true}
          image="/images/service-8.webp"
          mainTitle="2. Vận Chuyển Nội Địa và Quản Lý Dòng Tiền"
          bigTitle="Hợp Tác với Các Đơn Vị Vận Chuyển:"
          content1={
            "Hợp tác với các đối tác vận chuyển hàng đầu: Giao hàng nhanh chóng, an toàn tuyệt đối IFG đặt sự hài lòng của khách hàng lên hàng đầu, vì vậy chúng tôi chỉ hợp tác với các đơn vị vận chuyển uy tín và chuyên nghiệp nhất trên thị trường. Chúng tôi tự hào là đối tác chiến lược của J&T, JNT, Ninja Van, Royal Express và nhiều đơn vị vận chuyển hàng đầu khác. Sự hợp tác này đảm bảo hàng hóa của quý khách được giao đến tay người nhận một cách an toàn, nhanh chóng và đúng hẹn. IFG cam kết mang đến trải nghiệm giao hàng vượt trội, giúp khách hàng an tâm và tin tưởng tuyệt đối."
          }
          content2={
            "Đóng gói chuyên nghiệp, bảo vệ tối đa: An tâm trên mọi hành trình Tại IFG, chúng tôi hiểu rằng hàng hóa của bạn là tài sản quý giá. Vì vậy, chúng tôi áp dụng quy trình đóng gói nghiêm ngặt, tuân thủ các tiêu chuẩn bảo vệ hàng hóa cao nhất. Mỗi sản phẩm đều được đóng gói một cách tỉ mỉ, sử dụng các vật liệu chuyên dụng để đảm bảo an toàn tuyệt đối, ngăn ngừa mọi rủi ro hư hỏng trong quá trình vận chuyển. IFG cam kết mang đến dịch vụ đóng gói chuyên nghiệp, giúp khách hàng hoàn toàn yên tâm về sự an toàn của hàng hóa trên mọi hành trình."
          }
          content3={
            "Theo dõi chủ động, cập nhật tức thì: An tâm trên từng chặng đường giao hàng Tại IFG, chúng tôi áp dụng hệ thống theo dõi đơn hàng tiên tiến, đảm bảo sự minh bạch và chủ động trong từng bước giao hàng. Hệ thống của chúng tôi tự động cập nhật trạng thái đơn hàng theo thời gian thực, cung cấp thông tin chi tiết về quá trình vận chuyển cho cả đối tác và khách hàng. Các thông báo bao gồm ngày giao hàng dự kiến, trạng thái giao hàng (đang vận chuyển, đã giao, gặp sự cố, v.v.), giúp khách hàng luôn nắm bắt được tình hình và an tâm trên từng chặng đường. IFG cam kết mang đến trải nghiệm giao hàng minh bạch, tin cậy và chuyên nghiệp."
          }
        />
        <SecondContentItem
          image="/images/service-9.webp"
          bigTitle="Thu Hộ COD:"
          content1={
            "Thu tiền mặt an toàn và bảo mật: Đảm bảo giao dịch tin cậy: Khi khách hàng lựa chọn phương thức thanh toán khi nhận hàng (COD), IFG phối hợp chặt chẽ với các đối tác vận chuyển uy tín để đảm bảo quy trình thu tiền mặt diễn ra an toàn và bảo mật. Nhân viên giao hàng được đào tạo chuyên nghiệp sẽ thực hiện giao dịch thu tiền mặt trực tiếp từ khách hàng tại thời điểm giao hàng. Chúng tôi áp dụng các biện pháp an ninh nghiêm ngặt để bảo vệ thông tin và tiền mặt trong suốt quá trình giao dịch, đảm bảo sự an tâm tuyệt đối cho cả khách hàng và đối tác. IFG cam kết mang đến dịch vụ thu tiền mặt tin cậy, an toàn và hiệu quả, đáp ứng mọi nhu cầu thanh toán của khách hàng."
          }
          content2={
            "Đối soát và chuyển đổi tiền tệ tối ưu: Minh bạch, hiệu quả, tối đa hóa lợi nhuận: Tại IFG, chúng tôi cam kết mang đến quy trình đối soát và chuyển đổi tiền tệ minh bạch, hiệu quả và tối ưu hóa lợi ích cho đối tác. Số tiền thu được từ dịch vụ thanh toán khi nhận hàng (COD) sẽ được chuyển về IFG và quy đổi sang VND với tỷ giá cạnh tranh nhất trên thị trường. Báo cáo đối soát chi tiết sẽ được gửi đến đối tác, cung cấp thông tin đầy đủ về các giao dịch và số tiền đã chuyển đổi. Quy trình này đảm bảo tính chính xác và minh bạch trong quản lý dòng tiền, giúp đối tác an tâm và tập trung vào phát triển kinh doanh."
          }
          content3={
            "Chuyển khoản an toàn và minh bạch: Đảm bảo quản lý tài chính hiệu quả: Với kinh nghiệm 10  năm của cổ đông IFG trong lĩnh vực ngân hàng, IFG hiểu rõ tầm quan trọng của sự an toàn và bảo mật trong các giao dịch tài chính. Sau khi trừ đi phí dịch vụ, số tiền còn lại sẽ được chuyển khoản an toàn và minh bạch cho đối tác theo lịch trình thỏa thuận. Chúng tôi áp dụng các tiêu chuẩn bảo mật nghiêm ngặt, tuân thủ các quy định của ngân hàng để đảm bảo mọi giao dịch đều được thực hiện một cách chính xác và an toàn. Quy trình chuyển khoản được thiết kế tối ưu, giúp đối tác dễ dàng kiểm soát và quản lý tài chính một cách hiệu quả. IFG cam kết mang đến dịch vụ chuyển khoản tin cậy, an toàn và minh bạch, giúp đối tác an tâm tập trung vào phát triển kinh doanh."
          }
        />
      </div>
      <ThirdServiceHero />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          bigTitle="Đối Tác Vận Chuyển Tin Cậy:"
          image="/images/service-7.webp"
          content1="Hợp tác chiến lược với Qicheng Yuntong: Vận chuyển quốc tế an toàn và hiệu quả: IFG tự hào lựa chọn Qicheng Yuntong (QY) làm đối tác vận chuyển quốc tế chiến lược, dựa trên uy tín và chuyên môn vượt trội của QY trong ngành. Với mạng lưới vận chuyển rộng khắp toàn cầu và kinh nghiệm dày dặn trong việc xử lý các lô hàng quốc tế đa dạng, QY đảm bảo hàng hóa của khách hàng được vận chuyển an toàn, nhanh chóng và hiệu quả. Sự hợp tác này là cam kết của IFG trong việc mang đến dịch vụ vận chuyển quốc tế chất lượng cao, đáp ứng mọi nhu cầu của khách hàng."
          content2="Vận chuyển an toàn, đúng hẹn: Cam kết từ Qicheng Yuntong: Qicheng Yuntong (QY) cam kết mang đến dịch vụ vận chuyển quốc tế an toàn và đúng hẹn, đảm bảo sự hài lòng tuyệt đối cho khách hàng. Chúng tôi áp dụng các quy trình vận chuyển chuẩn mực, kết hợp với công nghệ theo dõi tiên tiến, để đảm bảo hàng hóa được vận chuyển một cách an toàn và đến đúng thời gian đã cam kết. QY luôn đặt sự tin cậy và hiệu quả lên hàng đầu, mang đến cho khách hàng trải nghiệm vận chuyển quốc tế vượt trội."
        />
      </div>
      <SecondHeroService />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 justify-center p-[40px]">
        <SecondContentItem
          reverseDirection={true}
          image="/images/service-10.webp"
          mainTitle="1. Hỗ Trợ Set Up Kho Bãi và Văn Phòng"
          bigTitle="Tìm Kiếm và Thiết Lập Địa Điểm:"
          content1="Tìm kiếm địa điểm: IFG hỗ trợ đối tác tìm kiếm các vị trí kho bãi và văn phòng với giá thuê hợp lý. Chúng tôi có mạng lưới rộng lớn và kiến thức sâu sắc về thị trường bất động sản tại Đông Nam Á, giúp đối tác chọn được vị trí phù hợp với nhu cầu kinh doanh."
          content2="Thiết lập và trang bị: Sau khi tìm được địa điểm, IFG sẽ hỗ trợ thiết lập cơ sở hạ tầng, trang bị các thiết bị cần thiết và thiết kế không gian làm việc tối ưu, đảm bảo môi trường làm việc chuyên nghiệp và hiệu quả."
        />
        <SecondContentItem
          secondMainTitle="2. Set Up và Đào Tạo Đội Ngũ Nhân Sự"
          bigTitle="Hỗ Trợ Xây Dựng Đội Ngũ:"
          content1="Tuyển dụng và set up: IFG giúp đối tác tuyển dụng và set up đội ngũ nhân sự, từ quản lý đến nhân viên vận hành. Chúng tôi cung cấp quy trình tuyển dụng chuẩn mực và hỗ trợ thiết lập các hệ thống quản lý nhân sự hiệu quả."
          content2="Công nghệ tiên tiến: Để tối ưu hóa hiệu suất làm việc, IFG trang bị cho đội ngũ các công cụ công nghệ tiên tiến, từ phần mềm quản lý kho hàng, hệ thống CRM, đến các công cụ hỗ trợ làm việc từ xa."
          bigTitleSecond="Đào Tạo Nhân Sự:"
          content6="Khóa đào tạo: IFG cung cấp các khóa đào tạo chuyên sâu về quy trình vận hành, kỹ năng bán hàng, dịch vụ khách hàng, và quản lý kho bãi. Những khóa đào tạo này giúp nhân sự của đối tác làm việc hiệu quả và nâng cao năng suất."
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
                địa như J&T, Flash và các đối tác khác, IFG giúp đối tác thiết
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
          content1="Mở công ty: IFG cung cấp dịch vụ tư vấn và hỗ trợ đối tác trong quá trình mở công ty tại các quốc gia Đông Nam Á. Chúng tôi đảm bảo quá trình này diễn ra nhanh chóng và tuân thủ các quy định pháp lý địa phương."
          content2="Hoàn thiện giấy tờ pháp lý: IFG hỗ trợ đối tác hoàn thiện các thủ tục pháp lý cần thiết, bao gồm đăng ký kinh doanh, giấy phép hoạt động, và các giấy tờ liên quan khác, giúp đối tác khởi đầu kinh doanh thuận lợi."
          bigTitleSecond="Hỗ Trợ Dòng Tiền:"
          content6="Quản lý tài chính: IFG cung cấp các dịch vụ quản lý dòng tiền, bao gồm quản lý thu chi, báo cáo tài chính, và tối ưu hóa dòng tiền. Chúng tôi đảm bảo rằng dòng tiền của đối tác luôn được quản lý an toàn, giảm thiểu rủi ro tài chính và hỗ trợ trong việc hoạch định chiến lược tài chính dài hạn."
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
      <div className="text-[20px] text-center md:text-left md:whitespace-nowrap font-bold text-[#0D9251] min-h-[52px] flex items-center px-3 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        {title}
      </div>
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
  bigTitle,
  bigTitleSecond,
  mainTitle,
  secondMainTitle,
  bigTitleThird,
  content11,
  content12,
  content13,
  content14,
  bigTitleFourth,
  content15,
  content16,
  content17,
  content18,
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
  bigTitle?: string;
  bigTitleSecond?: string;
  mainTitle?: string;
  secondMainTitle?: string;
  bigTitleThird?: string;
  content11?: string;
  content12?: string;
  content13?: string;
  content14?: string;
  bigTitleFourth?: string;
  content15?: string;
  content16?: string;
  content17?: string;
  content18?: string;
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
        {bigTitleThird && (
          <h3 className="text-[18px] font-bold">{bigTitleThird}</h3>
        )}
        <ul className="text-[18px] flex flex-col gap-2 list-disc">
          {content11 && <li>{content11}</li>}
          {content12 && <li>{content12}</li>}
          {content13 && <li>{content13}</li>}
          {content14 && <li>{content14}</li>}
        </ul>
        {bigTitleFourth && (
          <h3 className="text-[18px] font-bold">{bigTitleFourth}</h3>
        )}
        <ul className="text-[18px] flex flex-col gap-2 list-disc">
          {content15 && <li>{content15}</li>}
          {content16 && <li>{content16}</li>}
          {content17 && <li>{content17}</li>}
          {content18 && <li>{content18}</li>}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        {secondMainTitle && <TitleService title={secondMainTitle} />}
        <Image
          src={image}
          alt="Warehouse Background"
          className={`object-cover rounded-3xl md:max-w-[600px] w-full`}
          width={600}
          height={400}
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
