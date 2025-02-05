// fetchDesignatedHeritageList.ts
import { parseStringPromise } from 'xml2js';

export const fetchDesignatedHeritageList = async (
  code: number,
  pageIndex: number,
  pageUnit: number
) => {
  try {
    const API_URL = 'http://www.khs.go.kr/cha/SearchKindOpenapiList.do';
    // 지정종목 코드와 페이지 정보를 함께 전달
    const url = `${API_URL}?ccbaKdcd=${code}&pageIndex=${pageIndex}&pageUnit=${pageUnit}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.statusText}`);
    }
    const xmlText = await response.text();
    const result = await parseStringPromise(xmlText);
    const items = result.result.item.map((item: any) => ({
      ccmaName: item.ccmaName[0],
      ccbaMnm1: item.ccbaMnm1[0],
      ccbaCtcdNm: item.ccbaCtcdNm[0],
      ccsiName: item.ccsiName[0],
      ccbaKdcd: item.ccbaKdcd[0],
      ccbaAsno: item.ccbaAsno[0],
      ccbaCtcd: item.ccbaCtcd[0],
    }));
    // 이미지 채우기 (기존 fetchHeritageList와 동일하게 처리)
    const itemsWithImages = await Promise.all(
      items.map(async (heritage: any) => {
        try {
          const imgResponse = await fetch(
            `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${heritage.ccbaKdcd}&ccbaAsno=${heritage.ccbaAsno}&ccbaCtcd=${heritage.ccbaCtcd}`
          );
          const imgXmlData = await imgResponse.text();
          const imgResult = await parseStringPromise(imgXmlData);
          const imageUrl =
            imgResult.result.item?.[0]?.imageUrl?.[0] ||
            'https://via.placeholder.com/150';
          return { ...heritage, imageUrl };
        } catch (err) {
          return { ...heritage, imageUrl: 'https://via.placeholder.com/150' };
        }
      })
    );
    const totalCnt = parseInt(result.result.totalCnt[0], 10);
    return { items: itemsWithImages, totalCnt };
  } catch (error) {
    console.error('Failed to fetch designated heritage list:', error);
    return { items: [], totalCnt: 0 };
  }
};
