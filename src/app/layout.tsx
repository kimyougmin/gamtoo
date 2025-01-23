"use client";

import { useRouter } from "next/navigation";
import "./globals.css";

// 외부
// 알림 아이콘입니다.
import {
  UserCircleIcon,
  BellAlertIcon,
  BellSlashIcon,
} from "@heroicons/react/20/solid";

import QuizPage from "./quiz/page";
import QuizRanking from "./quizRanking/page";

// 감투 아이콘
function GamtooIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="53" fill="none">
      <path
        fill="#000"
        d="m43.59 2.215-1.05 1.073 1.05-1.073Zm26.958 5.728 1.427.464-1.427-.464Zm-.964-1.15-.09-1.497.09 1.497ZM66.25 14.01l-1.321-.71 1.321.71Zm.325-.408.95 1.161-.95-1.16Zm-23.222 1.186-.355-1.457.355 1.457Zm.473 0 .354-1.457-.354 1.457Zm-23.566-.865.95-1.161-.95 1.161Zm.326.408-1.32.714 1.32-.714Zm-3.334-7.22L17.17 8.61l.083-1.498ZM43.59 2.216l1.05 1.073-1.05-1.073ZM42.54 1.143c-1.011.99-2.573 1.835-4.587 2.518-1.997.677-4.334 1.159-6.791 1.486-4.917.654-10.166.668-13.827.466l-.166 2.996c3.792.21 9.237.197 14.388-.488 2.577-.343 5.118-.86 7.359-1.619 2.223-.754 4.259-1.782 5.722-3.214L42.54 1.143ZM14.861 8.728c.967 2.974 3.17 5.308 4.45 6.355l1.9-2.322c-1.024-.837-2.77-2.726-3.497-4.96l-2.853.927Zm4.406 6.316c.897 1.656 2.738 2.452 4.562 2.85 1.89.413 4.17.49 6.5.383 4.675-.213 9.894-1.182 13.38-2.032l-.711-2.915c-3.373.823-8.388 1.749-12.806 1.95-2.217.102-4.2.016-5.723-.317-1.588-.347-2.31-.88-2.564-1.347l-2.638 1.428ZM64.929 13.3c-.263.489-.988 1.032-2.535 1.404-1.49.359-3.43.48-5.601.418-4.33-.126-9.256-.975-12.613-1.791l-.708 2.915c3.495.85 8.637 1.74 13.234 1.874 2.292.067 4.53-.052 6.39-.499 1.8-.433 3.594-1.26 4.476-2.9l-2.643-1.42Zm4.193-5.82c-.727 2.235-2.473 4.124-3.496 4.961l1.899 2.322c1.28-1.047 3.482-3.38 4.45-6.355l-2.853-.927ZM42.54 3.289c1.465 1.433 3.484 2.445 5.684 3.172 2.215.733 4.72 1.211 7.257 1.516 5.072.609 10.43.54 14.192.314l-.18-2.994c-3.658.219-8.822.281-13.655-.299-2.416-.29-4.709-.736-6.672-1.385-1.979-.655-3.519-1.481-4.528-2.469l-2.098 2.145Zm2.549-1.073h-3 3Zm0 0h-3 3Zm-.452-1.072c-.95-.93-2.549-.257-2.549 1.072h3c0 1.328-1.599 2-2.548 1.072l2.097-2.144Zm-2.097 0a1.5 1.5 0 0 1 2.097 0l-2.097 2.144a1.5 1.5 0 0 0 2.098 0L42.54 1.143Zm2.549 1.072c0-1.329-1.6-2.001-2.55-1.072l2.099 2.144c-.95.929-2.55.256-2.55-1.072h3Zm-.45-1.072a1.5 1.5 0 0 1 .45 1.072h-3c0 .394.155.784.45 1.073l2.1-2.145Zm27.335 7.264c.583-1.795-.966-3.202-2.48-3.111l.178 2.994a.526.526 0 0 1-.426-.19.662.662 0 0 1-.125-.62l2.853.927Zm-4.403 6.312c.007-.013.008-.013.002-.005a.315.315 0 0 1-.049.048l-1.9-2.322a2.836 2.836 0 0 0-.696.86l2.642 1.42Zm-23.863 1.526a.51.51 0 0 1-.237 0l.708-2.915a2.48 2.48 0 0 0-1.182 0l.71 2.915ZM19.31 15.083a.325.325 0 0 1-.049-.048c-.005-.007-.003-.005.005.01l2.638-1.43a2.847 2.847 0 0 0-.695-.854l-1.9 2.322Zm-1.976-9.47c-1.508-.083-3.058 1.32-2.474 3.115l2.853-.928a.66.66 0 0 1-.124.62.521.521 0 0 1-.42.189l.165-2.996Zm27.303-2.326a1.5 1.5 0 0 0 .451-1.072h-3a1.5 1.5 0 0 1 .451-1.072l2.098 2.144Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M17.604 28.507c-.457-1.697-1.323-3.333-2.72-4.4a31.08 31.08 0 0 1-4.283-3.945c-2.71-3.039.76-6.178 4.733-5.289 7.81 1.747 18.34 1.903 28.045-3.863v-.001h.002c9.705 5.767 20.236 5.611 28.045 3.864 3.973-.889 7.443 2.25 4.733 5.289a31.091 31.091 0 0 1-4.282 3.945c-1.397 1.067-2.264 2.703-2.721 4.4a12.54 12.54 0 0 1-.435 1.316c-.547 1.393-1.952 2.15-3.446 2.248l-20.887 1.365a.06.06 0 0 0-.056.062.06.06 0 0 1-.063.062l-.889-.059-.889.059a.06.06 0 0 1-.063-.062.06.06 0 0 0-.056-.062L21.485 32.07c-1.494-.098-2.899-.855-3.446-2.248a12.54 12.54 0 0 1-.435-1.316Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="m43.38 33.501.098-1.496-.098-.007-.098.007.098 1.496Zm-21.895-1.43.098-1.497-.098 1.497Zm20.887 1.365-.097 1.496.097-1.496Zm.12.123-.098-1.496.097 1.496Zm1.777 0 .098-1.496-.098 1.496Zm.119-.123.098 1.496-.098-1.496Zm24.333-3.613-1.396-.549 1.396.549Zm-3.446 2.248.098 1.497-.098-1.497Zm6.602-7.964-.91-1.192.91 1.192ZM43.381 11.01l1.499-.065-1.499.065Zm0 0 .767-1.289-.767 1.29Zm0 0 1.499-.065-1.499.065Zm-.002 0 1.499.066-1.499-.066Zm0 0-.767-1.289.767 1.29Zm0 0 1.499.066-1.499-.066Zm-32.778 9.153-1.12.998 1.12-.998Zm-1.12.998a32.59 32.59 0 0 0 4.492 4.14l1.82-2.385a29.586 29.586 0 0 1-4.072-3.752L9.48 21.16ZM42.614 9.72c-9.27 5.508-19.375 5.384-26.952 3.69l-.655 2.927c8.043 1.799 19 1.987 29.139-4.038L42.612 9.72Zm2.265 1.355-2.998-.131 2.998.131Zm.002-.131-2.998.131 2.998-.131Zm-2.265 1.355c10.14 6.025 21.096 5.837 29.139 4.038l-.655-2.928c-7.577 1.695-17.682 1.82-26.951-3.689l-1.533 2.58Zm32.425 6.864a29.586 29.586 0 0 1-4.073 3.752l1.82 2.385a32.588 32.588 0 0 0 4.491-4.14l-2.239-1.997Zm-7.333 8.954c-.11.413-.242.802-.382 1.157l2.792 1.097c.177-.45.345-.944.487-1.473l-2.897-.781Zm-2.53 2.457L44.29 31.939l.196 2.993 20.887-1.364-.196-2.994Zm-21.895 4.424.889.058.196-2.993-.89-.058-.195 2.993Zm0-2.993-.888.058.195 2.993.889-.058-.196-2.993Zm-21.894 1.563 20.887 1.364.195-2.993-20.887-1.365-.195 2.994Zm-5.232-4.67c.143.529.31 1.023.487 1.473l2.792-1.096a11.04 11.04 0 0 1-.383-1.158l-2.896.78Zm5.427 1.676c-1.105-.072-1.875-.605-2.148-1.3l-2.792 1.097c.822 2.093 2.862 3.073 4.744 3.197l.196-2.994Zm22.344 2.987a1.56 1.56 0 0 0-1.457-1.622l-.195 2.993a1.44 1.44 0 0 1-1.346-1.498l2.998.127Zm-1.533-1.498a1.44 1.44 0 0 1 1.533 1.498l-2.998-.127a1.56 1.56 0 0 0 1.66 1.622l-.195-2.993Zm.44 1.498a1.44 1.44 0 0 1 1.532-1.498l-.195 2.993a1.56 1.56 0 0 0 1.66-1.622l-2.998.127Zm1.456-1.622a1.56 1.56 0 0 0-1.457 1.622l2.998-.127a1.44 1.44 0 0 1-1.346 1.498l-.195-2.993Zm23.035-2.665c-.273.695-1.043 1.228-2.148 1.3l.196 2.994c1.882-.123 3.922-1.104 4.744-3.197l-2.792-1.096Zm3.642-6.36c-1.745 1.333-2.748 3.307-3.26 5.203l2.897.78c.404-1.498 1.133-2.796 2.183-3.597l-1.82-2.385Zm.787-6.577c1.564-.35 2.865.133 3.47.754.287.295.395.588.397.85.003.262-.098.68-.581 1.222l2.238 1.997c.872-.977 1.353-2.09 1.343-3.245-.01-1.152-.51-2.158-1.247-2.916-1.447-1.486-3.867-2.129-6.275-1.59l.655 2.928Zm-29.872-5.262a1.5 1.5 0 0 0 .733 1.224l1.533-2.579c.427.254.71.71.732 1.224l-2.998.131Zm2.264 1.224a1.5 1.5 0 0 1-2.264-1.224l2.998-.131a1.5 1.5 0 0 0-2.265-1.225l1.531 2.58Zm-1.532 0a1.5 1.5 0 0 0 1.532 0l-1.531-2.58a1.5 1.5 0 0 1 1.53 0l-1.531 2.58Zm2.264-1.224a1.5 1.5 0 0 1-2.264 1.224l1.532-2.58a1.5 1.5 0 0 0-2.266 1.225l2.998.131Zm-.733 1.224a1.5 1.5 0 0 0 .733-1.224l-2.998-.131a1.5 1.5 0 0 1 .732-1.224l1.533 2.58Zm-30.172 13c1.05.802 1.779 2.1 2.183 3.599l2.896-.781c-.51-1.896-1.514-3.87-3.259-5.202l-1.82 2.385Zm-2.252-6.136c-.484-.542-.585-.96-.582-1.221.002-.263.11-.556.398-.851.604-.621 1.905-1.104 3.47-.754l.654-2.928c-2.408-.539-4.828.104-6.274 1.59-.739.758-1.238 1.764-1.248 2.916-.01 1.155.471 2.268 1.343 3.245l2.239-1.997Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.598 43.657c-.173-1.061-.722-2.051-1.617-2.647-2.865-1.907-6.81-5.217-9.207-9.21-1.248-2.081 1.016-3.95 3.323-3.196 8.914 2.915 23.474 4.763 36.796-2.506a.144.144 0 0 0 .075-.12.144.144 0 0 1 .214-.118.143.143 0 0 0 .14 0 .144.144 0 0 1 .215.119c.002.05.03.095.075.119 13.322 7.269 27.881 5.42 36.796 2.506 2.306-.754 4.57 1.115 3.323 3.195-2.396 3.994-6.343 7.304-9.208 9.211-.894.596-1.444 1.586-1.617 2.647a13.182 13.182 0 0 1-1.324 3.926c-.409.778-1.23 1.21-2.108 1.266l-24.779 1.55a.082.082 0 0 0-.076.085.082.082 0 0 1-.087.086l-1.28-.08-1.28.08a.082.082 0 0 1-.086-.086.082.082 0 0 0-.077-.085l-24.778-1.55c-.878-.055-1.7-.488-2.108-1.266a13.18 13.18 0 0 1-1.325-3.926Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="m43.252 50.49.094-1.498-.094-.005-.093.005.093 1.498Zm-26.22-1.642-.095 1.498.094-1.497ZM41.808 50.4l-.093 1.497.093-1.497Zm.164.17-.094-1.496.094 1.497Zm2.559 0 .094-1.496-.094 1.497Zm.163-.17.094 1.497-.094-1.497Zm26.887-2.816 1.328.697-1.328-.697Zm-2.108 1.266-.094-1.497.094 1.497Zm5.05-7.839-.832-1.248.831 1.248Zm-1.618 2.647-1.48-.241 1.48.24ZM43.611 26.098l-.718 1.317.718-1.317Zm-.718 0-.718-1.317.718 1.317ZM11.981 41.01l-.83 1.249.83-1.249Zm1.617 2.647-1.48.241 1.48-.241ZM1.488 32.57c2.556 4.26 6.703 7.718 9.662 9.688l1.663-2.497c-2.771-1.845-6.516-5.007-8.752-8.734L1.488 32.57Zm40.687-7.79c-12.823 6.996-26.912 5.242-35.612 2.397L5.63 30.03c9.13 2.984 24.16 4.926 37.982-2.615l-1.437-2.634Zm.718 2.634c13.822 7.541 28.852 5.6 37.981 2.615l-.932-2.852c-8.7 2.845-22.79 4.599-35.612-2.397l-1.437 2.634Zm39.551 3.613c-2.236 3.727-5.981 6.889-8.752 8.734l1.663 2.497c2.96-1.97 7.106-5.428 9.662-9.688l-2.573-1.543ZM71.426 43.416a11.682 11.682 0 0 1-1.172 3.47l2.656 1.394a14.678 14.678 0 0 0 1.477-4.382l-2.961-.482Zm-2.046 3.936-24.778 1.55.187 2.994 24.778-1.55-.187-2.994Zm-26.221 4.635 1.28.08.187-2.994-1.28-.08-.187 2.994Zm0-2.995-1.28.08.187 2.995 1.28-.08-.187-2.995Zm-26.222 1.354 24.779 1.55.187-2.994-24.778-1.55-.188 2.994Zm-4.82-6.448a14.68 14.68 0 0 0 1.477 4.382l2.656-1.395a11.682 11.682 0 0 1-1.171-3.47l-2.961.483Zm5.008 3.453c-.474-.03-.76-.247-.875-.466l-2.655 1.395c.703 1.339 2.06 1.985 3.342 2.066l.188-2.994Zm26.26 3.2a1.582 1.582 0 0 0-1.482-1.649l-.187 2.994a1.418 1.418 0 0 1-1.329-1.478l2.998.133Zm-1.506-1.478a1.418 1.418 0 0 1 1.506 1.478l-2.998-.133c-.041.94.741 1.708 1.68 1.649l-.188-2.994Zm1.241 1.478a1.418 1.418 0 0 1 1.506-1.478l-.188 2.994c.939.059 1.72-.71 1.68-1.649l-2.998.133Zm1.482-1.649c-.86.054-1.52.787-1.482 1.649l2.997-.133a1.418 1.418 0 0 1-1.328 1.478l-.187-2.994Zm25.652-2.017c-.115.219-.4.437-.874.467l.187 2.994c1.282-.08 2.64-.727 3.343-2.066l-2.656-1.395Zm3.438-7.123c-1.303.867-2.04 2.26-2.266 3.654l2.961.482c.119-.728.481-1.315.968-1.639l-1.663-2.497Zm7.182-9.732c.677-.222 1.249-.027 1.52.22a.53.53 0 0 1 .187.303c.011.068.015.221-.137.475l2.573 1.543c.472-.787.661-1.648.527-2.491a3.52 3.52 0 0 0-1.134-2.053c-1.125-1.02-2.839-1.382-4.468-.849l.932 2.852Zm-38.836-3.985c.026.58.355 1.097.855 1.37l1.437-2.634c.412.225.684.651.705 1.132l-2.997.132Zm2.019 1.123c-.866.486-1.973-.096-2.019-1.123l2.997-.133c-.054-1.24-1.395-1.95-2.447-1.36l1.469 2.616Zm-1.609 0c.5.28 1.11.28 1.609 0l-1.47-2.616a1.357 1.357 0 0 1 1.33 0l-1.469 2.616Zm2.019-1.123c-.046 1.027-1.153 1.61-2.019 1.123l1.469-2.616c-1.052-.59-2.393.12-2.448 1.36l2.998.133Zm-.855 1.37c.5-.273.829-.79.855-1.37l-2.998-.133c.022-.48.294-.906.706-1.13l1.437 2.633ZM11.15 42.259c.487.324.85.91.968 1.639l2.96-.482c-.226-1.394-.962-2.787-2.265-3.654l-1.663 2.497ZM4.06 31.028c-.151-.254-.147-.407-.136-.475a.53.53 0 0 1 .186-.303c.272-.247.844-.442 1.52-.22l.933-2.852c-1.63-.533-3.343-.17-4.468.85-.57.516-1 1.218-1.134 2.052-.134.843.055 1.704.527 2.491l2.573-1.543Z"
      />
    </svg>
  );
}

// 각시탈 아이콘
function Gaksital() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="none">
      <rect
        width="70"
        height="70"
        x="2.5"
        y="2.5"
        stroke="#000"
        stroke-width="5"
        rx="35"
      />
      <path
        fill="#000"
        d="M21.618.221c-1.728.454-3.354 1.729-4.13 3.208-.382.703-5.157 14.107-5.611 15.747-.557 1.949-.674 3.59-.674 9.258v5.537h-.556c-1.348 0-2.974.908-3.53 1.963-.162.278-.323.38-.645.38-1.304 0-2.93 1.202-3.296 2.432C3.044 39.201 3 42.98 3 54.245v14.882h2.344V39.376l.366-.366c.527-.527.806-.41 1.055.44.44 1.48 2.197 2.724 3.881 2.724h.557v3.34c0 3.706.117 4.424.908 5.918.616 1.157 2.007 2.446 3.238 2.974.966.425.981.44 1.215 1.245.132.44.528 1.567.894 2.49 1.685 4.292 4.175 8.115 7.105 10.928 10.825 10.385 25.664 6.694 33.12-8.233.366-.717.688-1.435.717-1.567.03-.205-.205-.366-.966-.688-.557-.235-1.026-.425-1.055-.396-.015.015-.454.879-.981 1.934-3.502 6.914-8.716 11.235-14.81 12.304-3.78.66-8.013-.307-11.44-2.607-6.109-4.102-10.372-11.763-11.734-21.123-.366-2.476-.366-8.262-.015-10.62.367-2.33.923-4.776 1.51-6.607.277-.85.497-1.611.497-1.684 0-.074-.468-.308-1.04-.528l-1.04-.38-.205.512c-.674 1.597-1.772 6.24-2.11 8.833-.439 3.472-.321 8.496.279 12.012.147.85.25 1.567.22 1.597-.117.131-1.201-1.158-1.538-1.832l-.352-.717v-8.936c0-9.507.03-10.005.747-12.876 1.304-5.259 4.102-10.092 7.881-13.667 3.56-3.369 7.31-5.39 11.88-6.372 2.11-.454 5.962-.454 8.071 0 2.652.571 5.39 1.655 7.354 2.9.425.279.79.499.82.499.03 0 .337-.44.689-.967.512-.791.586-.982.41-1.099a57.92 57.92 0 0 0-1.51-.893l-1.288-.762.073-.82c.132-1.48 1.01-2.769 2.373-3.487 1.01-.542 2.754-.556 3.736-.044.85.44 1.567 1.114 1.918 1.817.161.307 1.421 3.735 2.784 7.617 2.168 6.138 3.047 8.936 3.061 9.77 0 .118-.38-.542-.85-1.464-1.04-2.066-2.109-3.721-3.647-5.64-1.245-1.538-3.78-4.087-3.984-4-.073.03-.425.411-.791.85l-.674.806L54.4 14.27c.938.967 2.022 2.153 2.388 2.637 3.281 4.35 5.288 9.404 5.83 14.795.103 1.054.147 4.409.117 9.594l-.044 7.984-.498.923c-.425.776-1.274 1.757-1.406 1.61-.015-.028.088-.746.235-1.596 2.02-11.836-1.378-24.404-8.629-31.963-5.624-5.83-12.978-7.91-19.877-5.61-2.989 1.01-5.347 2.476-7.896 4.922-1.728 1.67-3.574 3.911-3.369 4.087.425.366 1.655 1.186 1.758 1.172.073 0 .659-.674 1.318-1.495 4.263-5.39 10.342-8.027 16.245-7.06 5.054.82 9.58 4.028 13.052 9.228 5.303 7.984 7.002 19.366 4.395 29.59-.206.806-.47 1.743-.586 2.08-.132.367-.161.66-.088.703.234.147 1.787.66 1.977.66.103 0 .293-.381.425-.85.234-.835.234-.835 1.201-1.26 1.963-.864 3.618-2.944 4.014-5.053.088-.425.146-2.227.146-3.985v-3.208h.557c1.685 0 3.442-1.245 3.882-2.724.249-.85.527-.967 1.055-.44l.366.366V69.127h2.343V54.245c0-11.09-.043-15.044-.175-15.47-.381-1.303-1.934-2.46-3.267-2.46-.351 0-.513-.088-.674-.381-.556-1.055-2.182-1.963-3.53-1.963h-.557v-5.537c0-5.669-.117-7.31-.673-9.258-.455-1.64-5.23-15.044-5.61-15.747-.792-1.509-2.418-2.754-4.19-3.223-3.604-.937-7.368 1.436-8.13 5.142-.147.66-.22.791-.41.718-.718-.278-2.842-.835-4.029-1.055-1.845-.337-5.976-.351-7.793-.014-1.157.22-3.34.79-4.057 1.069-.19.073-.264-.059-.41-.718-.777-3.72-4.57-6.108-8.189-5.127ZM25.12 2.77c1.465.732 2.373 2.095 2.402 3.56l.015.864-1.377.79c-2.11 1.217-3.574 2.33-5.464 4.146-2.68 2.578-4.6 5.157-6.225 8.35-.425.835-.777 1.465-.777 1.392 0-.074.132-.689.279-1.377.293-1.29 5.053-14.942 5.566-15.923.469-.923 1.48-1.729 2.651-2.11.645-.22 2.227-.058 2.93.308ZM11.203 38.087v1.787l-.674-.087c-1.01-.103-1.596-.748-1.596-1.7 0-1.069.688-1.743 1.801-1.758l.47-.014v1.772Zm55.723-1.2c.38.395.454.57.454 1.186 0 .966-.586 1.611-1.597 1.714l-.674.087V36.271l.674.088c.498.044.806.19 1.143.527Z"
      />
      <path
        fill="#000"
        d="M36.69 16.628c-3.324 1.2-4.291 5.302-1.83 7.748.967.967 1.83 1.319 3.296 1.304 1.054 0 1.362-.058 1.992-.38 1.098-.572 1.567-1.026 2.124-2.051.44-.835.483-1.04.498-2.168 0-1.465-.352-2.33-1.319-3.296-1.2-1.201-3.251-1.7-4.76-1.157Zm2.389 2.314c1.508.63 1.874 2.593.703 3.765-1.641 1.655-4.336.175-3.911-2.14.263-1.376 1.874-2.196 3.207-1.625ZM18.966 25.197c-.337.644-.586 1.2-.556 1.23.117.103 1.875.952 1.992.952.058 0 .351-.483.644-1.084.6-1.215.645-1.098-.644-1.83l-.835-.47-.6 1.202ZM27.844 27.16c-2.784.703-5.405 3.193-6.519 6.167-.38.996-.747 2.754-.747 3.589v.57h2.344v-.556c0-.293.102-.996.22-1.553.79-3.706 3.94-6.372 7.163-6.035 1.435.147 2.46.747 3.955 2.3 1.172 1.23 1.274 1.377 1.186 1.802-.205.996-.146.952-1.069.732-1.64-.395-3.457-.19-4.863.528-.279.146-1.333.835-2.33 1.538-2.138 1.494-3.544 2.212-4.643 2.358l-.791.088V41.046l.879-.102c1.772-.205 3.34-.938 5.874-2.769.835-.6 1.816-1.245 2.183-1.42.776-.396 2.255-.543 3.222-.308.484.102.674.102.762-.03.205-.322.132.103-1.128 6.373-.938 4.658-1.245 6.474-1.245 7.353V51.3l-1.348 1.333c-.893.865-1.743 1.553-2.46 1.948-1.817 1.026-4.102 1.656-5.963 1.656h-.776v2.387l1.436-.087a14.776 14.776 0 0 0 9.448-4.204l1.04-1.011 1.07.981c1.493 1.363 2.24 1.817 3.105 1.905 1.274.117 1.728-.118 3.706-1.905l1.084-.981 1.025.981c2.68 2.637 6.548 4.278 10.034 4.278h.864v-2.3l-1.347-.088c-3.179-.22-5.962-1.524-8.16-3.838l-1.04-1.099v-1.142c0-.835-.322-2.74-1.245-7.324-1.26-6.27-1.333-6.695-1.127-6.373.087.132.278.132.761.03.967-.235 2.447-.088 3.223.307.366.176 1.348.82 2.183 1.421 2.534 1.831 4.101 2.564 5.874 2.769l.879.102V38.688l-.791-.088c-1.1-.146-2.505-.864-4.644-2.358-2.095-1.465-2.534-1.714-3.72-2.051-.938-.278-3.136-.25-3.912.058-.425.162-.44.162-.63-.805-.088-.425.015-.571 1.187-1.802 1.494-1.553 2.52-2.153 3.955-2.3 3.237-.337 6.372 2.315 7.163 6.065.117.586.22 1.303.22 1.582v.498h2.387l-.088-1.07c-.395-4.497-3.442-8.35-7.368-9.272-1.933-.454-4.292-.03-6.05 1.099-.41.263-1.098.864-1.538 1.347l-.805.865h-3.545l-.718-.791c-1.553-1.685-3.398-2.564-5.64-2.666-.864-.03-1.611.014-2.182.16Zm12.173 13.857c1.054 5.244 1.64 8.452 1.655 9.082v.952l-1.553 1.392c-.864.762-1.714 1.392-1.904 1.42-.279.045-.733-.278-1.963-1.39l-1.611-1.436v-.88c0-.732 3.017-16.435 3.296-17.182.248-.674.541.454 2.08 8.042Z"
      />
      <path
        fill="#000"
        d="M24.972 44.752c-3.325 1.202-4.292 5.303-1.831 7.75.967.966 1.831 1.318 3.296 1.303 1.055 0 1.362-.058 1.992-.38 1.099-.572 1.568-1.026 2.124-2.051.44-.835.483-1.04.498-2.168 0-1.465-.351-2.33-1.318-3.296-1.201-1.201-3.252-1.7-4.76-1.157Zm2.388 2.315c1.509.63 1.875 2.593.703 3.765-.952.952-2.3.952-3.252 0-1.817-1.802.19-4.761 2.549-3.765ZM48.41 44.752c-3.326 1.202-4.292 5.303-1.831 7.75.966.966 1.83 1.318 3.295 1.303 1.055 0 1.363-.058 1.993-.38 1.098-.572 1.567-1.026 2.124-2.051.44-.835.483-1.04.498-2.168 0-1.465-.352-2.33-1.319-3.296-1.2-1.201-3.252-1.7-4.76-1.157Zm2.387 2.315c1.509.63 1.875 2.593.703 3.765-.952.952-2.3.952-3.252 0-1.816-1.802.19-4.761 2.55-3.765ZM30.32 57.775c-.425.41-.454.762-.132 1.846 1.319 4.482 6.328 7.075 10.635 5.508 1.406-.513 2.285-1.07 3.281-2.095.952-.982 1.656-2.168 2.022-3.413.322-1.084.293-1.436-.132-1.846l-.352-.366h-14.97l-.352.366Zm13.008 2.432a6.193 6.193 0 0 1-2.652 2.431c-1.054.528-1.186.557-2.519.557-1.333 0-1.465-.03-2.52-.557a6.192 6.192 0 0 1-2.65-2.431l-.265-.455h10.87l-.264.455ZM3 72.643v1.172h2.344V71.47H3v1.172ZM70.969 72.643v1.172h2.343V71.47H70.97v1.172Z"
      />
    </svg>
  );
}

function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center h-[90px] px-9 mb-6 border-b-[1px] border-stone-400 bg-[#FFFFFF] min-w-full">
      {/* 헤더 왼쪽 */}
      <div className="left mt-1 gap-11 flex ">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="icon gap-4 flex flex-row justify-center items-center"
        >
          {" "}
          <GamtooIcon />
          <div className="flex flex-col text-black">
            <span className="text-stone-500 font-semibold text-[12px]">
              감춰진 역사 투어
            </span>
            <span className="text-[40px] font-bold">감투</span>
          </div>
        </div>
        <div className="router flex items-center gap-7 font-semibold text-xl mt-2 text-black">
          <span
            onClick={() => {
              router.push("/");
            }}
          >
            홈으로
          </span>
          <span
            onClick={() => {
              router.push("/culture");
            }}
          >
            모든문화재
          </span>
          <div
            onClick={() => {
              router.push("/festival");
            }}
            className="flex flex-row "
          >
            {" "}
            <span className="text-[#FA870E]">행사</span>
            <span>달력</span>
          </div>

          <div
            onClick={() => {
              router.push("/quiz");
            }}
            className="flex flex-row"
          >
            <span className="text-[#B23742]">퀴즈</span>
            <span>풀기</span>
          </div>
          <span
            onClick={() => {
              router.push("/qna");
            }}
          >
            Q&A
          </span>
        </div>
      </div>
      {/* 헤더 오른쪽 */}
      <div className="right mt-1 flex flex-row items-center gap-5">
        <UserCircleIcon className="size-8 text-black" />
        <span
          onClick={() => {
            router.push("/login");
          }}
          className="font-semibold text-xl text-[#424383]"
        >
          로그인
        </span>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="text-stone-400 text-xs">
      <div className="upper flex justify-around items-center h-52 bg-[#E9ECEF]">
        <div className="directory flex flex-col">
          <span className="text-black text-xs font-semibold mb-3">
            DIRECTORY
          </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur <br />
            adipisicing elit. Assumenda, saepe.
          </span>
        </div>
        <div className="rentals flex flex-col">
          <span className="text-black text-xs font-semibold mb-3">Rooms</span>
          <span>Map on top</span>
          <span>Side map</span>
          <span>No map</span>
          <span>Room detail</span>
        </div>
        <div className="pages flex flex-col">
          <span className="text-black text-xs font-semibold mb-3">
            Comparison
          </span>
          <span>Team</span>
          <span>Contact</span>
        </div>
        <div className="dailyOffers&Discounts flex flex-col">
          <span className="text-black text-xs font-semibold mb-3">
            DAILY OFFERS & DISCOUNTS
          </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, aut?
          </span>
        </div>
      </div>
      <div className="bottom flex flex-row justify-around items-center gap-x-96 h-16 bg-[#343A40]">
        <span className="">2025, Your company. All rights reserved</span>
        <div className="">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
            <path
              fillRule="evenodd"
              d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          {" "}
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
