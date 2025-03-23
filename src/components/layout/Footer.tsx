import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22317.008678083086!2d105.80885911815399!3d21.044518341641627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbo%20cong%20an!5e0!3m2!1svi!2s!4v1742653229385!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-[1320px] px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutUs />
          <ContactInfo />
          <Social />
        </div>
      </div>
      <div className="w-full flex justify-center pt-4">
        Copyright © Công ty cổ phần Aver Fulfillment Global
      </div>
    </footer>
  );
};

export default Footer;

function AboutUs() {
  return (
    <div className="flex items-center gap-10 flex-col px-5">
      <div className="flex items-center gap-10 flex-col">
        <div className="flex items-center flex-col">
          <div className="flex items-center w-[150px] h-[150px] overflow-hidden">
            <Image
              src="/images/main-logo.svg"
              alt="AFG Fulfillment Global"
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]"
            />
          </div>
          <div className="font-bold">
            Công ty cổ phần Aver Fulfillment Global
          </div>
        </div>
      </div>
      <div className="text-sm">
        Công ty cổ phần Aver Fulfillment Global là công ty cung cấp dịch vụ vận
        chuyển và vận hành hàng hoá xuyên quốc gia. Với hơn 8 năm kinh nghiệm
        vận hành TMĐT đa nền tảng, chúng tôi tự hào là đơn vị FFM uy tín, chuyên
        nghiệp và hiệu quả nhất. Hiện nay chúng tôi đã hiện diện tại 5 quốc gia
        : Philippines, Malaysia, Indonesia, Singapore, Thái Lan.
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-10 px-5 text-[15px]">
      <div className="font-bold h-[110px] flex items-end">Liên Hệ</div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Email :</p>{" "}
          <p className="underline text-blue-500">
            afg.fulfillment.services@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Hotline :</p>{" "}
          <p>a 038 565 8585</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold whitespace-nowrap">Địa chỉ:</p>
          <ul className="">
            <li>
              Lot 17 Blk 1 Phase 8-G Ather St., Greenwoods Executive Village,
              San Juan, Taytay, Rizal, Region IV-A (CALABARZON), 1920
            </li>
            <li>
              4 Soi Wachiratham 36, Bangchak, Khet Phra Khanong, Bangkok,
              Thailand
            </li>
            <li>
              JL PORIS INDAH,RUKO B9 No 11,Cipondoh Indah,Cipondoh, Tangerang.(
              sebelum MUTIARA BANGSA 1 SCHOOL) 15148 Fanpage Tiktok Jalan
              Permas, Bandar Baru Permas Jaya 81750 Masai, Johor No.4,4A, 6 & 6A
              Jalan Permas 1/2, Bandar Baru Permas jaya 81750 Masai ,Johor.,
              Masai
            </li>
            <li>
              - Tầng 25 toà nhà Viwaseen, 48 P. Tố Hữu, Trung Văn, Nam Từ Liêm,
              Hà Nội, Việt Nam, Hanoi,{" "}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Website :</p>{" "}
          <p className="whitespace-nowrap">https://averfulfillment.com/</p>
        </div>
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col gap-10 px-5">
      <div className="font-bold h-[110px] flex items-end">Fanpage Facebook</div>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhtfulfillmentlogistics.vn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="130"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="font-bold flex items-end">Fanpage Tiktok</div>
      <div className="w-[340px]">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@ht.van.chuyen"
          data-unique-id="ht.van.chuyen"
          data-embed-type="creator"
          style={{ maxWidth: "500px", minWidth: "288px" }}
        >
          {" "}
          <section>
            {" "}
            <a
              target="_blank"
              href="https://www.tiktok.com/@ht.van.chuyen?refer=creator_embed"
            >
              @ht.van.chuyen
            </a>{" "}
          </section>{" "}
        </blockquote>{" "}
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    </div>
  );
}
