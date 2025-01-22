// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko"> {/* 언어 설정 */}
        <Head>
          {/* 메타데이터, 링크 등 추가 */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* OG 메타 태그 등 추가 가능 */}
          <meta property="og:title" content="유영현, 김아람 결혼합니다♥" />
          <meta property="og:description" content="2025년 4월 26일, 유영현과 김아람의 결혼식에 초대합니다!" />
          <meta property="og:image" content="https://example.com/images/og-image.jpg" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main /> {/* 페이지 콘텐츠 */}
          <NextScript /> {/* Next.js의 스크립트 삽입 */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
