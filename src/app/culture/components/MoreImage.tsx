"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { parseStringPromise } from "xml2js"; // xml을 json으로 변환

const MoreImage = () => {
  const searchParams = useSearchParams();

  const ccbaKdcd = searchParams.get("ccbaKdcd");
  const ccbaAsno = searchParams.get("ccbaAsno");
  const ccbaCtcd = searchParams.get("ccbaCtcd");

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!ccbaKdcd || !ccbaAsno || !ccbaCtcd) {
      console.error("❌ 필수 쿼리 파라미터가 없습니다.");
      return;
    }

    const fetchImages = async () => {
      try {
        console.log("📡 API 요청 보내는 중...");
        const response = await axios.get(
          `http://www.khs.go.kr/cha/SearchImageOpenapi.do`,
          {
            params: { ccbaKdcd, ccbaAsno, ccbaCtcd },
          }
        );

        console.log("✅ API 응답 성공:", response.data);

        // XML -> JSON 변환
        const result = await parseStringPromise(response.data);
        console.log("🛠 변환된 JSON 데이터:", result);

        // 변환된 데이터 구조 확인
        console.log("📝 구조 확인:", result?.result?.item);

        // 이미지 URL 추출 (각각의 item에서 imageUrl을 다 추출하여 합침)
        const imageList = result?.result?.item?.reduce((acc: string[], item: any) => {
          if (Array.isArray(item.imageUrl)) {
            acc.push(...item.imageUrl); // 이미지 URL 배열을 합침
          }
          return acc;
        }, []) || [];

        console.log("🖼️ 추출된 이미지 리스트:", imageList);

        if (imageList.length === 0) {
          console.error("❌ 이미지가 존재하지 않습니다!");
        } else {
          setImages(imageList.slice(0, 5)); // 5개만 표시
        }
      } catch (error) {
        console.error("❌ API 요청 실패:", error);
      }
    };

    fetchImages();
  }, [ccbaKdcd, ccbaAsno, ccbaCtcd]);

  return (
    <div>
    <div className="w-full p-6 mt-6 overflow-x-auto h-[60vh]">
      <h1 className="text-[#FF5DAB] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-20">
        SEE MORE
      </h1>
      <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-20 mt-3">
        이미지 더보기
      </h1>
      <div className="w-[92%] h-[1px] bg-gray-400 ml-20 mb-5" />
      <div className="w-[89vw] h-[20%] ml-[5%] flex items-center justify-start max-w-full flex-wrap">
        <div className="flex flex-wrap gap-14">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`문화재 이미지 ${index}`}
                className="w-[17%] h-auto object-cover"
              />
            ))
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default MoreImage;
