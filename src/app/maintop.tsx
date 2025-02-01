

import { FullImage } from './fullimage';
export function MainTop() {

  return (
      <>
        <div className='bg-white'>
          <div className="h-[700px] overflow-hiddenbg-white py-4">
            <div className="row-01 p-9">
              <div className="text-center">
                <div className="space-x-1 text-3xl text-gray-600">
                  <span>2025 / 04 / 26</span>
                </div>
                <div className='text-gray-600'>
                  SATURDAY
                </div>
              </div>
            </div>

            <div className="row-02">
              <FullImage imgPath="/images/pic1.avif"></FullImage>

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
        </div>

      </>
  );
}