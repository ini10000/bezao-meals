import React from "react";

function BlogItem({ image, name, description }) {
  return (
    <div className="hover:shadow-md w-[360px] h-[472px] border-[#000000]/10 border rounded-[10px] m-[12px]">
      <img src={image} alt="Design" />
      <div className="px-[32px] mt-[30px]">
        <p className="text-[#556480] text-[12px] leading-[160%] mb-[8px]">
          <span className="text-[#DA3743]">{`Design `} </span> 01 October 2019
        </p>
        <p className="text-[#333333] font-[Lato-Bold] text-[16px] leading-[160%] mb-[16px]">
          {name}
        </p>
        <p className="text-[#666666] text-[14px] leading-[160%] mb-[32px]">
          {description}
        </p>
        <p className="text-[#DA3743] font-[Lato-Bold] text-[16px] leading-[160%] mb-[14px]">
          READ MORE
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
