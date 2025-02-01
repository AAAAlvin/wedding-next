import CountdownTimer from "./countdowntimer";

export default function Calendar() {
    // 2025년 4월 달력 데이터
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const daysInMonth = 30;
    const firstDayOfMonth = 2; // 2025년 4월 1일은 화요일 (0: 일요일, 1: 월요일, ...)
    const targetDate = 26; // 특정 날짜 (예: 26일)
  
    // 날짜 배열 생성
    const calendar = [];
    let dayCount = 1;
    
    for (let i = 0; i < 5; i++) { // 마지막 줄 제거
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCount > daysInMonth) {
          week.push(null);
        } else {
          week.push(dayCount++);
        }
      }
      calendar.push(week);
    }
  
    return (
      <div className='bg-white p-4'>
        <div className="h-[600px] overflow-hidden bg-white py-4">
          <div className="text-center p-9">
            <div className="text-2xl text-gray-600 space-x-1">
              <span>2025.04.26</span>
            </div>
            <div className='text-gray-600 text-base font-gowun py-1'>
              토요일 오후 5시 30분
            </div>
          </div>
          
          {/* 달력 테이블 */}
          <div className="flex justify-center">
            <table className="border-collapse border-t border-b border-gray-200 w-3/4 text-center">
              <thead>
                <tr className="bg-white font-gowun text-sm">
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className={`py-2 ${index === 0 ? 'text-red-500' : 'text-gray-600'}`}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.map((week, i) => (
                  <tr key={i}>
                    {week.map((day, j) => (
                      <td 
                        key={j} 
                        className={`py-2 h-8 w-8 ${day === targetDate ? 'rounded-full bg-red-300 text-white text-bold' : ''} ${j === 0 ? 'text-red-500' : 'text-gray-600'}`}
                      >
                        {day ? day : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CountdownTimer></CountdownTimer>
        </div>
      </div>
    );
  }
