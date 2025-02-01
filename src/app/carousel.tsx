// components/Carousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/pic1.avif", alt: "Image 1" },
  { id: 2, src: "/images/pic2.avif", alt: "Image 2" },
  { id: 3, src: "/images/pic3.avif", alt: "Image 3" },
  { id: 4, src: "/images/pic4.avif", alt: "Image 3" },
  { id: 5, src: "/images/pic5.avif", alt: "Image 3" },
  { id: 6, src: "/images/pic6.avif", alt: "Image 3" },
  { id: 7, src: "/images/pic7.avif", alt: "Image 3" },
  { id: 8, src: "/images/pic8.avif", alt: "Image 3" },
  { id: 9, src: "/images/pic9.avif", alt: "Image 3" },
  { id: 10, src: "/images/pic3.avif", alt: "Image 3" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 슬라이드 이미지 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
      {images.map((img) => (
        <div key={img.id} className="relative w-full h-64">
          <Image
            src={img.src}
            alt={`Image ${img.id}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}

      </div>

      {/* 좌우 화살표 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ▶
      </button>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
