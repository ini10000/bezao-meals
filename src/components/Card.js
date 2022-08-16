import React from "react";
import Button from "./Button";

function Card({ image, name, price }) {
  return (
    <div className="cursor-pointer flex justify-center items-center mt-10 h-[460px] w-[360px] rounded-[12px] hover:shadow-2xl shadow-md mb-12 mx-3">
      <div>
        <img src={image} alt="name" className="peer" />
        <div className="flex justify-center flex-col text-start px-[30px] mb-[24px] peer">
          <p className="font-[Lato-Bold] text-[20px] text-[#4D4D4D] peer-hover:text-[#F5BA3F] leading-[160%] mt-5">
            {name}
          </p>
          <p className="font text-base text-[#999999]  leading-[160%] mt-2">
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
              extra="invisible peer-hover:visible mt-5 px-[24px] bg-[#F5BA3F]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
