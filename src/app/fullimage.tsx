import Image from 'next/image';
import SvgWave from './svgwave';

export function FullImage({
    imgPath,
    altText = "Image",
  }: {
    imgPath: string;
    altText?: string;
  }) {
    return (
      <div className="relative w-full h-96 overflow-hidden">
        {/* SVG 웨이브 (이미지 상단에 겹치게) */}
        <div className="absolute top-0 left-0 w-full h-auto max-h-[50px] z-10">
          <SvgWave  scaleY={-1}/>
        </div>

        {/* 이미지 (배경) */}
        <Image
          src={imgPath}
          alt={altText}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          className="z-0"
        />

        {/* 하단 SVG (정방향) */}
        <div className="absolute bottom-0 left-0 w-full h-auto max-h-[50px] z-10">
          <SvgWave scaleY={1} />
        </div>
      </div>
    );
  }