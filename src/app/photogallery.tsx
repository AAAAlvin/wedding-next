"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const images: string[] = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",  
];

export function PhotoGallery(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (index: number): void => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  };

  return (
    <div className="relative w-full">
      {/* 이미지 갤러리 */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              
            />
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-screen h-screen">
            <button
              onClick={closeModal}
              className="absolute top-4 right-7 text-white text-6xl font-bold z-10"
              aria-label="Close Modal"
            >
              &times;
            </button>
            {/* Swiper 슬라이더 */}
            <Swiper
              modules={[Scrollbar, Autoplay, A11y]}
              initialSlide={selectedImageIndex}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              scrollbar={{ draggable: true }}
              className="w-full h-full"
              loop={true}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
