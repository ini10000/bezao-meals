import React, { useState } from "react";
import Button from "./Button";

function Card({ image, name, price }) {
  const [hovered, setHovered] = useState(false);
  const onMouse = (e) => {
    setHovered(true);
  };
  const onMouseLeave = (e) => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={onMouse}
      onMouseLeave={onMouseLeave}
      className="cursor-pointer flex justify-center items-center mt-10 h-[460px] w-[360px] rounded-[12px] hover:shadow-2xl shadow-md mb-12 mx-3"
    >
      <div>
        <img src={image} alt="name" />
        <div className="flex justify-center flex-col text-start px-[30px] mb-[24px]">
          <p
            style={{ color: hovered && "#F5BA3F" }}
            className={`font-[Lato-Bold] text-[20px] text-[#4D4D4D] leading-[160%] mt-5`}
          >
            {name}
          </p>
          <p className="font text-base text-[#999999] leading-[160%] mt-2">
            Fried potato/yam chips with egg sauce or any topping of your choice
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="font text-[24px] text-[#666666]  leading-[132%] mt-5">
              {price}
            </p>
            <Button
              text="Place Order"
              width="120"
              height="54"
              display={hovered ? "flex" : "none"}
              extra={`mt-5 px-[12px] bg-[#F5BA3F]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
