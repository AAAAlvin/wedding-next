import React from "react";

const SvgWave = ({ scaleY = 1 }: { scaleY: number }) => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 220"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition duration-300 ease-in-out delay-150`}
        style={{ transform: `scaleY(${scaleY})` }} // scaleY 동적 적용
      >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#f6f5f4" />
          <stop offset="95%" stopColor="#ede6e4" />
        </linearGradient>
      </defs>

      <style>
        {`
          .path-0 {
            animation: pathAnim-0 4s linear infinite;
          }
          @keyframes pathAnim-0 {
            0% { d: path("M 0,600 L 0,150 C 70.5,170 141,190 236,198 C 331,206 450,202 560,186 C 670,170 769,143 872,140 C 975,137 1081,158 1176,164 C 1271,170 1356,160 1440,150 L 1440,600 L 0,600 Z"); }
            50% { d: path("M 0,600 L 0,150 C 77,155 154,159 259,143 C 364,127 496,90 592,110 C 688,130 748,206 834,207 C 920,208 1032,135 1137,113 C 1242,91 1341,121 1440,150 L 1440,600 L 0,600 Z"); }
            100% { d: path("M 0,600 L 0,150 C 70.5,170 141,190 236,198 C 331,206 450,202 560,186 C 670,170 769,143 872,140 C 975,137 1081,158 1176,164 C 1271,170 1356,160 1440,150 L 1440,600 L 0,600 Z"); }
          }
        `}
      </style>

      <path
        d="M 0,600 L 0,150 C 70.5,170 141,190 236,198 C 331,206 450,202 560,186 C 670,170 769,143 872,140 C 975,137 1081,158 1176,164 C 1271,170 1356,160 1440,150 L 1440,600 L 0,600 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
    </svg>
  );
};

export default SvgWave;
