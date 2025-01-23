"use client";
// 외부
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

// 내부
import buttonGroup from "@/types/buttonGroup";
import { useEffect } from "react";
import heritageData from "@/types/heritageData";

//기타
import Image from "next/image";

function ButtonGroup() {
  const buttonInfo: buttonGroup[] = [
    {
      destination: "역사 퀴즈",
      bgColor: "#CD933A",
    },
    {
      destination: "행사 일정",
      bgColor: "#5E9399",
    },
    {
      destination: "문화재 보기",
      bgColor: "#C47540",
    },
    {
      destination: "QnA",
      bgColor: "#468854",
    },
  ];

  return (
    <div className="flex flex-row gap-16">
      {buttonInfo.map(({ destination, bgColor }, index) => (
        <div
          key={index}
          className={`rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl opacity-90`}
          style={{ backgroundColor: bgColor }} // 동적 배경색 설정
        >
          <button className="flex flex-col justify-center items-start w-[170px] h-20 p-4">
            <span className="text-xl font-semibold">{destination}</span>
            <div className="flex gap-1 justify-center items-center">
              <span className="font-semibold text-xs">자세히보기</span>
              <ArrowRightCircleIcon className="size-6 stroke-[2]" />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

function Card() {
  return (
    // 카드 리스트들을 차지하는 영역
    <div className="flex flex-row justify-center items-center gap-9">
      {heritageData.map((item, index) => (
        // 카드 한장의 너비와 높이를 차지하는 영역
        <div
          className="flex flex-col w-[280px] h-[320px] rounded-md overflow-hidden shadow-[5px_5px_5px_#ccc8c8]"
          key={index}
        >
          {/* 이미지가 차지하는 영역 */}
          <div className="relative w-[280px] h-[230px] mb-1">
            {/* 1. relative와 w-[220px] h-[200px]: 부모 컨테이너를 상대 위치로 설정하고, 너비를 화면 전체로 확장합니다.
                - 즉 div의 너비를 220px, 높이를 200px 설정한다
                - 자식인 이미지는 부모 컨터에이너를 꽉 채운다 */}
            <Image
              src={item.imageUrl}
              alt={item.name}
              layout="fill" // 부모 컨테이너를 채우도록 설정
              objectFit="cover"
              objectPosition="center top" // 상단 중심 정렬
            />
            {/* 1. layout="fill": Next.js <Image> 컴포넌트가 부모 컨테이너를 채우도록 설정합니다.
                2. objectFit="cover": 이미지를 비율을 유지하며 컨테이너를 꽉 채웁니다.
                3. objectPosition="top center": 이미지의 상단 중심을 기준으로 잘립니다. */}
          </div>

          {/* 유형, 이름, 주소를 세로로 정렬하기 위해 flex flex-col 사용 */}
          <div className="flex flex-col justify-center gap-1 ml-2">
            <span className="text-[#4F6CF3] text-xs font-bold">
              {item.designation}
            </span>
            <span className="text-black text-base font-bold">{item.name}</span>
            <div className="flex flex-row items-center">
              <MapPinIcon className="size-5 text-black" />
              <span className="text-black text-xs font-bold">
                {item.address}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex flex-row justify-center items-center bg-white px-4 py-3 sm:px-6 mt-4">
      <div className="hidden sm:flex sm:flex-1 sm:items-center">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex rounded-md shadow-xs"
        >
          <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <ChevronLeftIcon className="size-5" />
          </span>
          <span
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            2
          </span>
          <span className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
            3
          </span>
          <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <ChevronRightIcon aria-hidden="true" className="size-5" />
          </span>
        </nav>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    console.log(heritageData);
  }, []);
  return (
    <div className="main ">
      <div className="z-0 relative w-full h-[450px]">
        <Image
          src="https://cdn.pixabay.com/photo/2022/10/08/14/03/gyeongbokgung-palace-7507027_1280.jpg"
          alt="Gyeongbokgung Palace"
          layout="fill" // 부모 컨테이너를 채우도록 설정
          objectFit="cover"
          objectPosition="top" // 상단 중심 정렬
        />
        {/* 제목 */}
        <div className="flex flex-col gap-5 justify-center items-center absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-5xl text-white">
          <div className="">
            {" "}
            <span className="font-semibold text-6xl">감투 </span>
            <span className="font-semibold text-2xl">
              {" "}
              : [ 감춰진 역사 투어]
            </span>
          </div>
          {/* 검색창 */}
          <div className="relative flex flex-row">
            <input
              className="opacity-75 w-[550px] px-8 rounded-2xl h-10  text-lg font-semibold text-black"
              placeholder="검색어를 입력해주세요"
              type="text"
            />{" "}
            <button className="absolute top-2 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* 버튼 */}
          <div className="absolute top-[180px]">
            <ButtonGroup />
          </div>
        </div>
      </div>
      {/* 문화재 리스트 */}
      <div className="mt-11 mx-6">
        {/* 버튼 전부를 감싸는 태그 */}
        <div className="contentWrapper flex flex-row justify-between items-end border-b">
          {/* 왼쪽 */}
          <div className="flex flex-col pb-1">
            <div className=" text-[#F09AFF]">
              A REPRESENTATIVE CULTURAL HERITAGE
            </div>
            <div className="flex flex-row items-center gap-9">
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="41"
                  fill="none"
                >
                  <path
                    fill="#606060"
                    d="M15.908.515c-.522.448-.145 1.667.741 2.407l.607.51-.947 1.366c-1.384 2.032-1.676 2.23-4.42 3.011-1.445.407-5.088 1.22-6.643 1.47-1.008.166-1.36.406-1.36.927 0 .438.255.688.971.938.292.104.486.323.863.98.631 1.073 1.13 1.656 2.1 2.428.948.77 2.26 1.48 3.51 1.907.984.333 2.599.73 3.048.73.219.01.195.062-.206.354-.632.479-1.883 1.031-3.073 1.344-1.785.48-2.95.615-6.06.667l-2.902.062-.34.292c-.668.563-.376 1.417.595 1.803.365.135.522.292.741.74 1.13 2.22 3.801 4.595 6.436 5.71l.996.428v4.23H6.643c-3.352 0-3.96.021-4.19.167-.316.188-.364.678-.085.917.158.125.182.573.182 2.71v2.563h-.79c-.691 0-.837.032-1.104.26-.328.282-.316.616.048.866.28.187 60.489.187 60.768 0 .365-.25.377-.584.049-.865-.267-.23-.413-.26-1.166-.26h-.85v-2.533c0-2.407.012-2.553.243-2.73.28-.22.316-.553.073-.844-.17-.188-.377-.198-4.19-.23l-4.02-.03v-4.211l1.045-.459c2.684-1.177 5.149-3.355 6.315-5.575.291-.552.437-.708.813-.854.947-.375 1.239-1.188.644-1.782l-.292-.292-2.902-.063c-3.084-.072-4.42-.218-6.157-.677-1.336-.365-3.352-1.323-3.352-1.605 0-.041.231-.104.523-.146.825-.114 3-.77 3.85-1.167 2.003-.938 3.46-2.22 4.383-3.855.377-.667.559-.886.85-.98.692-.25.96-.5.96-.927 0-.261-.085-.459-.243-.584-.146-.115-1.105-.354-2.514-.625-3.498-.688-6.096-1.355-7.347-1.886-.826-.355-1.3-.834-2.332-2.345l-.935-1.355.595-.49c.911-.76 1.287-1.959.753-2.417-.51-.438-1.069-.177-1.226.573-.255 1.188-.766 1.386-3.862 1.542-2.927.136-17.257.136-20.183 0-3.097-.156-3.692-.396-3.85-1.553-.085-.708-.728-1-1.239-.562Zm12.084 3.512c2.623.03 6.52.01 9.727-.073 2.95-.063 5.477-.094 5.622-.052.17.041.62.593 1.288 1.552 1.13 1.636 1.773 2.272 2.83 2.751.97.448 3.217 1.063 5.95 1.647l2.343.5-.643.198c-2.66.771-6.51 1.23-12.241 1.428-3.85.135-19.831.135-23.68 0-5.575-.198-9.473-.657-12.12-1.428l-.644-.198 2.344-.49c2.684-.573 4.954-1.198 5.95-1.657 1.057-.479 1.7-1.115 2.83-2.74.57-.824 1.093-1.522 1.178-1.553.085-.031 1.226-.042 2.526-.01 1.3.03 4.335.083 6.74.125Zm26.947 7.971c-.826 1.21-2.186 2.293-3.753 2.97-.68.303-2.453.824-3.06.918l-.522.073V13.03l.4-.052c.207-.031.912-.104 1.543-.167 1.13-.114 4.323-.635 5.04-.823.206-.052.376-.104.4-.104.025-.01 0 .052-.048.114Zm-45.224.397c.972.166 2.332.364 3.036.427 2.052.177 1.822-.031 1.822 1.667v1.47l-.45-.073c-.91-.136-2.66-.699-3.558-1.126-.971-.469-2.672-1.824-3.084-2.46l-.231-.354.352.063c.194.042 1.142.208 2.113.386Zm36.432 2.626v1.854H37.16v-1.219c0-1.302-.121-1.594-.656-1.594-.631.01-.801.375-.801 1.709v1.104H26.352v-1.24c0-1.177-.012-1.26-.267-1.406-.364-.22-.656-.209-.947.041-.219.188-.243.344-.243 1.407v1.198H16.03v-3.699H46.147v1.845Zm1.032 3.574c1.032.657 1.894 1.032 3.352 1.449 1.748.5 3.218.687 5.683.76 2.44.073 2.453.125.121.646-4.663 1.053-10.322 1.438-22.272 1.543-11.925.093-19.381-.188-24.955-.96-1.967-.28-4.433-.791-4.967-1.041-.291-.136-.182-.146 1.142-.157 4.116-.01 7.432-.781 9.715-2.24l.728-.469H46.45l.729.469ZM8.622 23.222c5.003.719 11.998 1.052 22.466 1.052 12.338 0 20.074-.469 25.114-1.51.607-.126 1.117-.21 1.117-.178 0 .021-.255.375-.57.792-1.106 1.417-2.976 2.887-4.615 3.595l-.523.22v-.261c0-.146-.133-.386-.303-.521l-.292-.26H11.16l-.291.26c-.17.135-.304.375-.304.52v.261l-.51-.219c-1.652-.719-3.619-2.25-4.651-3.636-.304-.386-.547-.73-.547-.761 0-.021.51.062 1.13.187.607.125 1.797.334 2.635.459Zm41.508 4.877.036.656H12.022v-.604c0-.334.037-.646.085-.677.037-.042 8.61-.063 19.03-.052l18.956.03.037.647ZM14.45 31.413v1.406H12.022V30.006H14.451v1.407Zm5.343 0v1.406h-3.886v-1.333c0-.74.037-1.376.085-1.407.037-.042.911-.073 1.943-.073h1.858v1.407Zm4.008.416c0 1.553-.024 1.824-.182 1.824-.146 0-.182-.135-.182-.615 0-.708-.158-.875-.753-.823-.292.02-.438.104-.559.313-.121.219-.243.291-.522.291h-.352V30.006h2.55v1.823Zm3.886 0v1.824H25.259V30.006H27.688v1.823Zm5.343 0v1.824h-3.886V30.006h3.886v1.823Zm3.886 0v1.824H34.49V30.006h2.428v1.823Zm4.008-.416v1.406H40.5c-.243 0-.425-.052-.425-.125 0-.229-.401-.5-.741-.5-.498 0-.765.396-.68.99.06.375.048.47-.097.47-.158 0-.182-.282-.182-1.825v-1.823h2.55v1.407Zm5.222 0v1.406H42.382V30.006H46.147v1.407Zm4.007 0v1.406h-2.55V30.006h2.55v1.407Zm-28.295 2.99c0 .188-.085 1.345-.207 2.554l-.194 2.22H4.007v-2.48c0-1.366.037-2.523.085-2.554.037-.042 4.056-.073 8.926-.073h8.84v.334Zm36.189 2.22v2.553H40.694l-.06-.552a98.085 98.085 0 0 1-.195-2 111.63 111.63 0 0 0-.194-2.012l-.061-.542h17.864v2.553ZM38.86 35.164v.26H23.316v-.52H38.86v.26Zm.122 1.824v.313H23.073v-.24c0-.136.037-.282.085-.313.037-.041 3.62-.073 7.955-.073h7.869v.313Zm.218 1.897.037.291H22.952v-.625l8.112.02 8.1.032.036.282Z"
                  />
                  <path
                    fill="#606060"
                    d="M18.447 14.052c-.328.291-.352.354-.352 1.156 0 .959.097 1.178.607 1.407.45.198 2.587.219 3.036.02.51-.218.753-.75.704-1.573-.036-.646-.085-.74-.437-1.01-.389-.292-.425-.303-1.797-.303-1.385 0-1.409 0-1.761.303Zm2.562 1.208c0 .25-.036.26-.728.26-.693 0-.729-.01-.729-.26s.036-.26.729-.26c.692 0 .728.01.728.26ZM29.558 13.853c-.498.167-.656.51-.656 1.407 0 1.344.316 1.553 2.356 1.49 1.215-.031 1.3-.042 1.615-.323.316-.271.34-.344.34-1.178 0-.875-.012-.896-.4-1.198-.389-.292-.425-.302-1.7-.292-.717 0-1.421.042-1.555.094Zm2.259 1.407c0 .25-.037.26-.729.26s-.728-.01-.728-.26.036-.26.728-.26.729.01.729.26ZM40.317 13.884c-.437.188-.607.553-.607 1.345 0 1.334.376 1.584 2.344 1.521 1.311-.031 1.323-.031 1.676-.375.315-.302.352-.406.352-1.073 0-.834-.194-1.24-.668-1.428-.425-.167-2.708-.156-3.097.01Zm2.307 1.376c0 .25-.036.26-.728.26s-.729-.01-.729-.26.037-.26.729-.26.728.01.728.26Z"
                  />
                </svg>
                <span className="font-semibold text-3xl text-black">
                  문화재
                </span>
              </div>
              <span className="font-semibold text-base text-black">
                우리 나라의 자랑스러운{" "}
                <span className="text-[#F09AFF]">유산</span>들을 살펴보세요{" "}
              </span>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="rightContent text-black flex flex-row gap-16 pb-[17px]">
            <div className="flex flex-row gap-1 items-center">
              <CheckIcon className="size-5" />
              <button>최신등록</button>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <CheckIcon className="size-5" />
              <button>무형 문화재</button>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <CheckIcon className="size-5" />
              <button>유형 문화재</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-4 mx-3">
          {" "}
          <Card />
          <Pagination />
        </div>
      </div>
    </div>
  );
}