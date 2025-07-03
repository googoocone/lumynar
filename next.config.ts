import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["kr", "eng"], // 지원하는 로케일 (경로 접두사로 사용됨)
    defaultLocale: "kr", // 기본 로케일 (접두사가 없는 경우, 예: localhost:3000/ 일 때)
    localeDetection: false, // (선택 사항) 브라우저 언어 감지 비활성화.
    // IP 기반 리다이렉션을 직접 구현할 경우 false로 설정하는 것이 좋습니다.
  },
};

export default nextConfig;
