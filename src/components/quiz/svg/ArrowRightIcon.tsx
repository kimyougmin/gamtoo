import React from "react";

type IconProps = {
  width: number,
  height: number,
  color: string
};

export default function ArrowRightIcon(props : IconProps){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={props.width} height={props.height}>
      <g id="_01_align_center" data-name="01 align center" fill={props.color}>
        <path d="M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z"/>
      </g>
    </svg>
  );
}