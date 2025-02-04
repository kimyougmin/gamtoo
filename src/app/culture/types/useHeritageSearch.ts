import { useState } from 'react';
import { fetchHeritageList } from './fetchHeritageList';

export function useHeritageSearch() {
  const [searchResults, setSearchResults] = useState<any[]>([]);  // 검색 결과 상태
  const [totalCnt, setTotalCnt] = useState(0); // 총 결과 개수 상태
  const [query, setQuery] = useState('');  // 검색어 상태

  const searchHeritage = async (newQuery?: string, pageIndex: number = 1) => {
    const searchQuery = newQuery ?? query;

    if (searchQuery.trim() === '') return;

    setQuery(searchQuery);  // 검색어 상태 업데이트
    console.log('🔍 검색어:', searchQuery);

    // API 호출 후 필터링된 결과 가져오기
    const { items, totalCnt } = await fetchHeritageList(pageIndex, 25, searchQuery);

    console.log('📢 검색된 항목들:', items); // 검색된 항목 출력
    console.log('📢 총 검색된 항목 수:', totalCnt);  // 총 항목 수 출력

    setSearchResults(items);  // 검색된 데이터로 상태 업데이트
    setTotalCnt(totalCnt);  // 총 개수 업데이트
    console.log('📢 검색 결과 업데이트 후:', items); // 상태 업데이트 후 값 확인
  };

  return { searchResults, totalCnt, searchHeritage };
}
