// "use client";

// import { useState } from "react";
import { Account } from '@/components/account';
// import { MainAccount } from './mainaccount';
import { MainIntro } from './mainintro';
import { MainLocation } from './mainlocation';
import { MainTop } from './maintop';
import { Comment } from './maincomment';

export default function Main() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center min-h-screen bg-neutral-100"> {/* 화면 중앙에 배치 */}
          <div className="relative w-full">
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

