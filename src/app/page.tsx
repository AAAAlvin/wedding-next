"use client";

// import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
]

export default function Main() {
  return (
    <div>
      <div className="flex flex-col  items-center min-h-screen bg-neutral-100"> {/* 화면 중앙에 배치 */}
        <div className="relative w-[425px]">
          <MainPage/>
          <MainIntro />
          <MainLocation/>
          {/* <MainTitle title="GALLERY" subtitle="우리의 순간"/> */}
        </div>
      </div>
    </div>
  );
}

export function MainPage() {
  return (
    <div>
      <div className="h-[700px] overflow-hidden bg-white">
        <div className="row-01 p-9">
          <div className="text-center">
            <div className="space-x-1 text-3xl text-gray-600">
              <span>2025 / 04 / 26</span>
            </div>
            <div>
              SATURDAY
            </div>
          </div>
        </div>

        <div className="row-02">
          <div className="relative w-full h-96"> {/* 부모 div에 크기 설정 */}
            <Image
              src="/images/pic1.jpg"
              alt="My Image"
              fill // 부모 div에 맞게 크기 조정
              style={{ 
                objectFit: "cover", // 이미지 비율 유지하며 부모 크기에 맞춤
                objectPosition: "top" // 이미지가 상단부터 나오도록 설정
              }}
            />
          </div>
        </div>

        <div className="row-03 p-6">
          <div className="text-center text-gray-600 font-gowun">
              <div className="space-x-1 text-2xl">
                <span>유영현 · 김아람</span>
              </div>
              <div className="p-3">
                2025년 04월 26일 토요일 오후 5시 30분
                <br/>
                수원 노보텔 샴페인홀
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export function MainIntro() {
  return (
    <div>
      <div className="bg-white">
          <MainTitle title="GALLERY" subtitle="우리의 순간"/>
          <PhotoGallery/>
      </div>
    </div>
  );
}

export function MainLocation() {
  return (
    <div className="bg-white">
      <div className="bg-white p-1">
          <MainTitle title="LOCATION" subtitle="오시는길"/>
          <div className="row-03 p-6">
          <div className="text-center text-gray-600 font-gowun">
              <div className="space-x-1 text-2xl font-bold">
                <span>수원 노보텔, 샴페인홀</span>
              </div>
              <div className="p-3">
              경기 수원시 팔달구 덕영대로 902
                <br/>
                <br/>
                Tel. 010-3432-5887
              </div>
            </div>
          </div>
      </div>
      <Map></Map>

    </div>
  );
}

export function PhotoGallery() {
  // const [isExpanded, setIsExpanded] = useState(false); // 상태 추가

  // const toggleHeight = () => {
  //   setIsExpanded((prev) => !prev); // 높이 확장/축소 토글
  // };

  return (
    <div className="relative">
      {/* 이미지 갤러리 */}
      <div className="grid grid-cols-2 gap-4 p-4 transition-all duration-500 ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative ${
              index % 2 === 0 ? "h-60" : "h-80"
            } overflow-hidden rounded-lg shadow-md`}
          >
            {/* 이미지 */}
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* 버튼 클릭 시 갤러리 높이 확장 */}
      {/* <div className="text-center mt-4">
        <button
          onClick={toggleHeight}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isExpanded ? "접기" : "확장"}
        </button>
      </div> */}
    </div>
  );
}

export function MainTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <div className="row-01 p-1">
        <div className="text-center">
          <span className="text-rose-400 text-opacity-60 tracking-widest">{title}</span>
        </div>
      </div>

      <div className="row-02">
        <div className="text-center">
          <span className="text-rose-400 font-gowun text-xl font-bold">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export function Map() {
  return (
    <div className="flex justify-center h-80">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3175.12361179637!2d126.99650397585998!3d37.26849577211727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1737547104288!5m2!1sko!2skr"
          height="300"
          width="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
