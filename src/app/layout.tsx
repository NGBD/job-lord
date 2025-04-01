import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FacebookIcon from "@/components/icons/FacebookIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ZaloIcon from "@/components/icons/ZaloIcon";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinity Fulfillment Global - Giải Pháp Fulfillment Toàn Cầu",
  description:
    "Infinity Fulfillment Global cung cấp dịch vụ fulfillment, kho vận và logistics xuyên biên giới tại Đông Nam Á. Với hơn 8 năm kinh nghiệm trong TMĐT.",
  keywords:
    "fulfillment, logistics, kho vận, thương mại điện tử, đông nam á, ifg global",
  openGraph: {
    title: "Infinity Fulfillment Global - Giải Pháp Fulfillment Toàn Cầu",
    description:
      "Infinity Fulfillment Global cung cấp dịch vụ fulfillment, kho vận và logistics xuyên biên giới tại Đông Nam Á.",
    url: "https://infiniyfulfillment.com",
    siteName: "Infinity Fulfillment Global",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={montserrat.className}>
        <main className="flex flex-col min-h-screen bg-white text-black">
          <Header />
          {children}
          <div className=" fixed md:bottom-[200px] md:right-[100px] bottom-[100px] right-[40px] z-[999999]">
            <div className="flex flex-col gap-5">
              <Link
                className="cursor-pointer bg-[#0D9251] rounded-full p-1 flex items-center justify-center border border-white"
                href="tel:+84977587736"
              >
                <PhoneIcon className="rotate-270" />
              </Link>
              <Link
                className="cursor-pointer flex items-center justify-center border border-white rounded-full bg-white"
                href={
                  "https://www.facebook.com/share/1945z3YzkM/?mibextid=wwXIfr"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon width={32} height={32} />
              </Link>
              <Link
                href="https://zalo.me/84977587736"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ZaloIcon width={32} height={32} />
              </Link>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
