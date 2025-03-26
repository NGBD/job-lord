import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3889.846438672932!2d105.73057234449281!3d20.995451409445316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1742995838770!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-[1320px] px-5 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutUs />
          <ContactInfo />
          <Social />
        </div>
      </div>
      <div className="w-full flex justify-center pt-4">
        Copyright © Infinity Fulfillment - Chia Sẻ Kinh Nghiệm Bán Hàng Online
        Từ A ĐẾN Z
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
              alt="IFG Fulfillment Global"
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]"
            />
          </div>
          <div className="font-bold">
            Công ty cổ phần Infinity Fulfillment Global
          </div>
        </div>
      </div>
      <div className="text-sm">
        Công ty cổ phần Infinity Fulfillment Global là công ty cung cấp dịch vụ
        vận chuyển và vận hành hàng hoá xuyên quốc gia. Với hơn 8 năm kinh
        nghiệm vận hành TMĐT đa nền tảng, chúng tôi tự hào là đơn vị FFM uy tín,
        chuyên nghiệp và hiệu quả nhất. Hiện nay chúng tôi đã hiện diện tại 5
        quốc gia : Philippines, Malaysia, Indonesia, Singapore, Thái Lan.
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-2 md:gap-10 px-5 text-[15px]">
      <div className="font-bold md:h-[110px] flex items-end">Liên Hệ</div>
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Email :</p>{" "}
          <p className="underline text-blue-500">
            ifg.contact.services@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Hotline :</p>{" "}
          <p>0977.587.736</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold whitespace-nowrap">Địa chỉ trụ sở chính:</p>{" "}
          <p>
            Liền kề B9 -23, Khu B Gleximco, Đường Lê Trọng Tấn, Phường Dương
            Nội, Hà Đông, Hà Nội.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold whitespace-nowrap">Địa chỉ:</p>
          <ul className="list-disc ml-10">
            <li>KĐT Star City, Thaylin, Yangon, Myanmar.</li>
            <li>
              4 Soi Wachiratham 36, Bangchak, Khet Phra Khanong, Bangkok,
              Thailand
            </li>
            <li>Udomsuk Soi 50 Yak 7, BangNa, BangNa, Bangkok 10260</li>
            <li>Eden Value, Lahore, Pakistan</li>
            <li>Johor Bahru, Malaysia</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold whitespace-nowrap">Website :</p>{" "}
          <p className="whitespace-nowrap">https://infiniyfulfillment.com/</p>
        </div>
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col gap-2 md:gap-10 md:px-5">
      <div className="font-bold md:h-[110px] flex items-end">
        Fanpage Facebook
      </div>
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
