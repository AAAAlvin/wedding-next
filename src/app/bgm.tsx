"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export function Bgm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVisible, setIsVisible] = useState(true); // text visibility 상태 관리

  // Audio 객체를 한 번만 생성
  if (!audioRef.current && typeof Audio !== "undefined") {
    audioRef.current = new Audio("/audio/bgm.mp3");
    audioRef.current.loop = true; // 배경음악 반복 재생
  }

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 페이지 로드 후 1초 뒤에 텍스트 숨기기
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 1초 후에 bgm-text 숨기기
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  return (
    <nav
      className={`fixed w-full max-w-96 mx-auto p-2 z-50 text-center transition-all duration-300 ${
        isVisible ? "bg-neutral-700" : "bg-white"
      } opacity-80 h-10`}
    >
      <div className="flex justify-between items-center">
        <div></div>
        <span
          id="bgm-text"
          className={`font-bold text-sm font-gowun transition-opacity ${
            isVisible
              ? "text-white opacity-100" // 처음 렌더링 시 흰색 폰트
              : "text-neutral-700 opacity-0" // 사라지면서 색상 변경
          }`}
        >
          배경음악이 준비되어 있습니다.
        </span>
        <div className="">
          <FontAwesomeIcon
            className={`${isVisible ? "text-neutral-200" : "text-neutral-700"}`}
            onClick={togglePlay}
            icon={isPlaying ? faVolumeUp : faVolumeDown} // 아이콘 변경
          />
        </div>
      </div>
    </nav>
  );
}
