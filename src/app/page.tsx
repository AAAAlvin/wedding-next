// "use client";

// import { useState } from "react";
import Head from 'next/head';
import { MainAccount } from './mainaccount';
import { MainIntro } from './mainintro';
import { MainLocation } from './mainlocation';
import { MainTop } from './maintop';

export default function Main() {
  return (
    <>
      <Head>
        <meta property="og:title" content="웨딩 초대장" />
        <meta property="og:description" content="2025년 4월 26일, 유영현과 김아람의 결혼식에 초대합니다!" />
        <meta property="og:image" content="https://example.com/images/og-image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="웨딩 초대장" />
        <meta name="twitter:description" content="2025년 4월 26일, 유영현과 김아람의 결혼식에 초대합니다!" />
        <meta name="twitter:image" content="https://example.com/images/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <h1>Welcome to the Wedding Page!</h1>
      </div>
      
    <div>
      <div className="flex flex-col  items-center min-h-screen bg-neutral-100"> {/* 화면 중앙에 배치 */}
        <div className="relative w-[425px]">
          <MainTop/>
          <MainIntro />
          <MainLocation/>
          <MainAccount/>
          {/* <MainTitle title="GALLERY" subtitle="우리의 순간"/> */}
        </div>
      </div>
    </div>
    </>
  );
}

