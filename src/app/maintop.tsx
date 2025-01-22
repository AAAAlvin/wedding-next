
import Image from 'next/image';

export function MainTop() {
  return (
    <div>
      <div className="h-[700px] overflow-hidden bg-white">
        <div className="row-01 p-9">
          <div className="text-center">
            <div className="space-x-1 text-3xl text-gray-600">
              <span>2025 / 04 / 26</span>
            </div>
            <div>
              SATURDAY
            </div>
          </div>
        </div>

        <div className="row-02">
          <div className="relative w-full h-96"> {/* 부모 div에 크기 설정 */}
            <Image
              src="/images/pic1.jpg"
              alt="My Image"
              fill // 부모 div에 맞게 크기 조정
              style={{
                objectFit: "cover", // 이미지 비율 유지하며 부모 크기에 맞춤
                objectPosition: "top" // 이미지가 상단부터 나오도록 설정
              }}
            />
          </div>
        </div>

        <div className="row-03 p-6">
          <div className="text-center text-gray-600 font-gowun">
            <div className="space-x-1 text-2xl">
              <span>유영현 · 김아람</span>
            </div>
            <div className="p-3">
              2025년 04월 26일 토요일 오후 5시 30분
              <br />
              수원 노보텔 샴페인홀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}