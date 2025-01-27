"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { faVolumeDown, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

export function Bgm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <nav className="fixed w-full max-w-96 mx-auto p-4 z-50">
      <div className="flex justify-end items-center">
        <div>
            <FontAwesomeIcon
            className="text-neutral-700"
            onClick={togglePlay}
            icon={isPlaying ? faVolumeUp : faVolumeDown} // 아이콘 변경
            />
        </div>
      </div>
    </nav>
  );
}
