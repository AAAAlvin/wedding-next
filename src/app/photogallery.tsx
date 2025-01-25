
import Image from "next/image";
const images = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
]

export function PhotoGallery() {
    // const [isExpanded, setIsExpanded] = useState(false); // 상태 추가
  
    // const toggleHeight = () => {
    //   setIsExpanded((prev) => !prev); // 높이 확장/축소 토글
    // };
  
    return (
      <div className="relative w-full"> {/* 부모 div에 크기 설정 */}
        {/* 이미지 갤러리 */}
        <div className="grid grid-cols-2 gap-4 p-4 transition-all duration-500 ">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? "h-80" : "h-80"
              } overflow-hidden rounded-lg shadow-md`}
            >
              {/* 이미지 */}
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
  
        {/* 버튼 클릭 시 갤러리 높이 확장 */}
        {/* <div className="text-center mt-4">
          <button
            onClick={toggleHeight}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isExpanded ? "접기" : "확장"}
          </button>
        </div> */}
      </div>
    );
  }