import Image from 'next/image';

export function FullImage({
    imgPath,
    altText = "Image",
  }: {
    imgPath: string;
    altText?: string;
  }) {
    return (
      <div className="relative w-full h-96"> {/* 부모 div에 크기 설정 */}
        <Image
          src={imgPath} // 동적으로 전달된 이미지 경로 사용
          alt={altText} // 동적으로 전달된 altText 사용
          fill // 부모 div에 맞게 이미지 크기 조정
          style={{
            objectFit: "cover", // 이미지 비율 유지하며 부모 크기에 맞춤
            objectPosition: "top", // 이미지가 상단부터 나오도록 설정
          }}
        />
      </div>
    );
  }

// "/images/pic1.jpg"