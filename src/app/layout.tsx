import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aver Fulfillment Global - Giải Pháp Fulfillment Toàn Cầu",
  description:
    "Aver Fulfillment Global cung cấp dịch vụ fulfillment, kho vận và logistics xuyên biên giới tại Đông Nam Á. Với hơn 8 năm kinh nghiệm trong TMĐT.",
  keywords:
    "fulfillment, logistics, kho vận, thương mại điện tử, đông nam á, afg global",
  openGraph: {
    title: "Aver Fulfillment Global - Giải Pháp Fulfillment Toàn Cầu",
    description:
      "Aver Fulfillment Global cung cấp dịch vụ fulfillment, kho vận và logistics xuyên biên giới tại Đông Nam Á.",
    url: "https://averfulfillment.com",
    siteName: "Aver Fulfillment Global",
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
          <Footer />
        </main>
      </body>
    </html>
  );
}
