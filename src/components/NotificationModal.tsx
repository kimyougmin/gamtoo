import React from 'react';
import GagsiMaskIcon from "@/components/quiz/svg/GagsiMaskIcon";


export default function NotificationModal() {
  const [comment, setComment] = React.useState()
  return (
    <div className="absolute z-50 bg-white w-[500px] top-[90px] right-0 border pb-2 max-w-full overflow-scroll">
      <div className="pt-4 pl-4 pr-4">
        <p className="text-black font-semibold text-3xl">알림</p>
        <div className="flex mt-4">
          <p className="text-[#9D53FF] w-[51px] h-[34px] bg-[#DAD1E6] rounded-3xl text-center leading-8 text-sm">모두</p>
          <p className="text-black ml-6 text-sm leading-8">읽지 않음</p>
        </div>
        <div className="flex justify-between mt-6">
          <p className="text-black text-2xl">항목</p>
          <p className="text-[#9D53FF]">모두 보기</p>
        </div>
      </div>
      <div className="flex hover:bg-[#DCDCDC] rounded-xl w-[480px] mt-2 ml-auto mr-auto p-2">
        <div>
          <div className="w-[75px] h-[75px] rounded-full border-4 overflow-hidden content-center border-black">
            <GagsiMaskIcon width={68} height={75} color={"#00000"}/>
          </div>
          <div
            className="relative -top-7 -right-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-1 rounded-full w-[31px] h-[31px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6 z-50 m-auto">
              <path
                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
            </svg>
          </div>
        </div>
        <div className="ml-5">
          <p className="text-black">문화제1님이 회원님의 글에 좋아요를 남겼습니다.</p>
          <p className="text-black">‘어떤 글제목이들어가면 들어간 제목이 여기서 출됩니다 너무 긴 경우는’</p>
          <p className="text-[#9D53FF]">2시간</p>
        </div>
      </div>
      <div className="flex hover:bg-[#DCDCDC] rounded-xl w-[480px] mt-2 ml-auto mr-auto p-2">
        <div>
          <div className="w-[75px] h-[75px] rounded-full border-4 overflow-hidden content-center border-black">
            <GagsiMaskIcon width={68} height={75} color={"#00000"}/>
          </div>

          <div
            className="relative -top-7 -right-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-1 rounded-full w-[31px] h-[31px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6 m-auto">
              <path
                d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
              <path
                d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
            </svg>
          </div>
        </div>
        <div className="ml-5">
          <p className="text-black">문화제1님이 회원님의 글에 좋아요를 남겼습니다.</p>
          <p className="text-black">‘어떤 글제목이들어가면 들어간 제목이 여기서 출됩니다 너무 긴 경우는’</p>
          <p className="text-[#9D53FF]">2시간</p>
        </div>
      </div>
    </div>
  );
}
