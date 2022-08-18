import React from "react";
import { ReactComponent as Quote } from "../assets/images/svg/Quote.svg";
import Avatar from "../assets/images/John.png";

function Testimonies() {
  return (
    <div className="bg-[#F9E1E3] flex justify-center py-[80px]">
      <div className="flex flex-wrap justify-center">
        <div>
          <p className="font-[Lato-Bold] text-[42px] leading-{124%] text-[#363A40] w-[360px] mb-[20px]">
            What our customers say about us
          </p>
          <p className="text-[16px] leading-[160%] mb-[40px] text-[#67758D] w-[270px]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="justify-center items-center flex-col  flex bg-[#FFFFFF] rounded-[12px] pt-[34px] pr-[30px] pl-[60px] pb-[60px] shadow-md mb-[74px]">
            <div className="flex justify-end w-full">
              <Quote />
            </div>
            <div className="justify-center items-center flex flex-wrap">
              <div className="justify-center items-center flex flex-col">
                <img src={Avatar} alt="John" />
                <p className="w-[84px] text-center font-[Lato-Bold] text-[#363A40] text-[24px] leading-[132%] mt-[10px]">
                  John Samson
                </p>
                <p className="font-[Lato-Bold] text-[#67758D] text-[12px] leading-[160%] mt-[10px]">
                  ENUGU, NIGERIA
                </p>
              </div>
              <div>
                <p className="text-[#67758D] w-[340px] text-[18px] leading-[160%] ml-[64px]">
                  White dwarf a still more glorious dawn awaits tingling of the
                  spine emerged into consciousness Vangelis shores of the cosmic
                  ocean. Tendrils of gossamer clouds kindling the energy hidden
                  in matter concept of the number one permanence.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[64px] flex justify-between flex-row">
              <div className="w-[8px] h-[8px] rounded-full bg-[#DA3743]" />
              <div className="w-[8px] h-[8px] rounded-full bg-[#F1F1F1]" />
              <div className="w-[8px] h-[8px] rounded-full bg-[#F1F1F1]" />
              <div className="w-[8px] h-[8px] rounded-full bg-[#F1F1F1]" />
              <div className="w-[8px] h-[8px] rounded-full bg-[#F1F1F1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
