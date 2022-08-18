import React from "react";

function Button({ text, width, height, extra, radius, display }) {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `${radius ? radius : "30"}px`,
        display: display,
      }}
      className={`px-[6px] ${extra} flex bg-[#DA3743] justify-center items-center text-white text-base`}
    >
      <p className="text-base">{text}</p>
    </div>
  );
}

export default Button;
