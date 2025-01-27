// "use client";
import type { Metadata } from "next";

import { Account } from '@/components/account';
import { MainIntro } from './mainintro';
import { MainLocation } from './mainlocation';
import { MainTop } from './maintop';
import { Comment } from './maincomment';
// import Head from "next/head";  // 잘못된 임포트 -> next/document에서 next/head로 변경
import { Bgm } from './bgm';

// import Carousel from './carousel';

export const metadata: Metadata = {
  title: "유영현, 김아람 결혼합니다♥",
  description: "4월 26일(토) 오후 5시30분\n수원노보텔, 샴페인홀",
};

export default function Main() {
  return (
    <>
      {/* <Head>
      <meta property="og:url" content="https://www.wedding-yh-ahram.site/"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="영현♥아람 결혼합니다!" />
        <meta property="og:description" content="4월 26일(토) 오후 5시30분" />
      </Head> */}

      <div>
        <div className="flex flex-col items-center min-h-screen bg-neutral-100"> {/* 화면 중앙에 배치 */}
          <div className="relative max-w-96">
            {/* <Carousel/> */}
            <Bgm></Bgm>
            <MainTop/>
            <MainIntro />
            <MainLocation/>
            <Comment/>
            <Account/>
            {/* <MainTitle title="GALLERY" subtitle="우리의 순간"/> */}
          </div>
        </div>
      </div>
    </>
  );
}

