'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Cover() {
    const [showGradient, setShowGradient] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);  // 2초 후에 페이드 아웃 시작
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* 그라데이션 배경 (2초 후 서서히 사라짐) */}
            {showGradient && (
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200 to-red-300 z-50 transition-opacity duration-1000 ${
                        isFadingOut ? "opacity-0" : "opacity-85"
                    }`}
                    onTransitionEnd={() => {
                        if (isFadingOut) {
                            setShowGradient(false); // 페이드 아웃 끝난 후에 숨기기
                        }
                    }}>

                    {/* 아이콘을 그라데이션 배경의 중앙에 배치 */}
                    <div className={`flex justify-center items-center w-full h-full ${isFadingOut ? "opacity-0" : "opacity-100"}}`}>
                        <FontAwesomeIcon
                            className="text-pink-200 w-20 h-20 z-50 animate-pulse" // 아이콘 크기 조정 및 애니메이션
                            icon={faHeart}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
