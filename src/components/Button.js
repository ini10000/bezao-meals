import React from "react";

function Button({ text, width, height, extra, radius }) {
  return (
    <div
      className={`px-[6px] ${extra} w-[${width}px] h-[${height}px] flex bg-[#DA3743] rounded-[${
        radius ? radius : "30"
      }px] justify-center items-center text-white text-base`}
    >
      <p className="text-base">{text}</p>
    </div>
  );
}

export default Button;
