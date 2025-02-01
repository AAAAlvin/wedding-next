'use client'
import { useEffect, useState } from "react";

export default function CountdownTimer() {
    const targetDate = new Date("2025-04-26T15:30:00").getTime();
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center py-10">
            <div className="countdown flex space-x-2 text-center text-lg">
                <div>
                    <div className="text-sm text-neutral-500">DAYS</div>
                    <span className="text-xl text-neutral-500 font-semibold">{timeLeft.days >= 0 ? String(timeLeft.days).padStart(2, '0') : '00'}</span>
                </div>
                <div className="flex justify-center">
                    <span className="text-sm relative top-6">:</span>
                </div>
                <div>
                    <div className="text-sm text-neutral-500">HOUR</div>
                    <span className="text-xl text-neutral-500 font-semibold">{timeLeft.days >= 0 ? String(timeLeft.hours).padStart(2, '0') : '00'}</span>
                </div>
                <div className="flex justify-center">
                    <span className="text-sm relative top-6">:</span>
                </div>
                <div>
                    <div className="text-sm text-neutral-500">MIN</div>
                    <span className="text-xl text-neutral-500 font-semibold">{timeLeft.days >= 0 ? String(timeLeft.minutes).padStart(2, '0') : '00'}</span>
                </div>
                <div className="flex justify-center">
                    <span className="text-sm relative top-6">:</span>
                </div>
                <div>
                    <div className="text-sm text-neutral-500">SEC</div>
                    <span className="text-xl text-neutral-500 font-semibold">{timeLeft.days >= 0 ? String(timeLeft.seconds).padStart(2, '0') : '00'}</span>
                </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-neutral-500 font-gowun">
                {timeLeft.days >= 0
                    ? `영현, 아람의 결혼식이 ${timeLeft.days}일 남았습니다.`
                    : `영현, 아람의 결혼식이 ${Math.abs(timeLeft.days)}일 지났습니다.`}
            </div>
        </div>
    );
}
