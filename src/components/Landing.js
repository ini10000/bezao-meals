import React from "react";
import logo from "../assets/images/Jollof.png";
import Button from "./Button";

function Landing() {
  return (
    <div className="flex flex-wrap justify-center mt-[75px] mb-[200px]">
      <div className="text-left mr-[27px] mb-5 justify-center flex flex-col">
        <p className="w-[551px] font-[Lato-Bold] text-[64px] leading-[72px]">
          Delicious meals at your convenience
        </p>
        <p className="w-[390px] text-[18px] mt-[24px] mb-[38px] ">
          Order your meals from us and we will have it delivered at your
          doorstep.
        </p>
        <Button text="Get Started" width="325" height="54" />
      </div>
      <div className="flex justify-center items-center rounded-full border-4 border-[#DA3749] animate-spin-slow h-[588px] w-[588px]">
        <img src={logo} alt="rice" className="w-[485px] h-[485px]" />
      </div>
    </div>
  );
}

export default Landing;
