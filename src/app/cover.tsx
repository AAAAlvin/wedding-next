'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Bgm } from "./bgm"; // Bgm 컴포넌트 import

export default function Cover() {
    const [showGradient, setShowGradient] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [showNextComponent, setShowNextComponent] = useState(false); // Bgm 컴포넌트를 표시할 상태

    const message = "영현,아람 결혼합니다!"; // 출력할 문구

    useEffect(() => {
        // 2초 후 페이드 아웃 시작
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2000);

        return () => clearTimeout(fadeOutTimer);
    }, []);

    return (
        <>
            {/* 페이드 아웃 후에 Bgm 컴포넌트를 표시 */}
            {showNextComponent && (
                <Bgm />  
            )}

            {/* 아이콘 & 텍스트 중앙 정렬 */}
            {!showNextComponent && (
            <div className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"} z-[9999]`}>
                <FontAwesomeIcon
                    className="text-pink-200 drop-shadow-xl w-20 h-20 animate-heartbeat" 
                    icon={faHeart}
                />
                {/* 문구를 바로 표시 */}
                <p className="text-white text-2xl font-semibold mt-4 font-gowun">{message}</p>
            </div>
            )}

            {/* 그라데이션 배경 */}
            {showGradient && (
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200 to-red-300 z-50 transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-85"}`}
                    onTransitionEnd={() => {
                        if (isFadingOut) {
                            setShowGradient(false); // 그라데이션 숨기기
                            setShowNextComponent(true); // 페이드 아웃 후 Bgm 표시
                        }
                    }}
                />
            )}

            {/* Tailwind 커스텀 애니메이션 추가 */}
            <style>
                {`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }
                .animate-heartbeat {
                    animation: heartbeat 1.5s infinite ease-in-out;
                }
                `}
            </style>
        </>
    );
}
