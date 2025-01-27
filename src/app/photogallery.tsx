"use client"
import { JSX, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
];

export function PhotoGallery(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const openModal = (src: string): void => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="relative w-full">
      {/* 이미지 갤러리 */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(src)}
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
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="relative w-screen h-screen">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-3xl font-bold z-10"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      )}

    </div>
  );
}
