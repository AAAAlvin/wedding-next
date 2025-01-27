import type { Metadata } from "next";
import { Crimson_Pro, Gowun_Dodum } from "next/font/google";
import "./globals.css";
// import { Bgm } from "./bgm";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ['latin'], // 필요한 서브셋 선택
});

const gowunDodum = Gowun_Dodum({
  variable: '--font-gowun-dodum',
  weight:["400"],
  subsets: ['latin'], // 필요한 서브셋 선택
});

export const metadata: Metadata = {
  title: "유영현, 김아람 결혼합니다♥",
  description: "4월 26일(토) 오후 5시30분\n수원노보텔, 샴페인홀",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.className} ${gowunDodum.variable} antialiased`}  // gowunDodum 추가
      >
        {children}
      </body>
    </html>
  );
}
