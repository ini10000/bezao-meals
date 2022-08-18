import React from "react";
import { ReactComponent as Logo } from "../assets/images/svg/Logo.svg";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";

function Footer() {
  return (
    <div className="flex flex-col bg-[#FAFAFA] justify-center">
      <div className="flex flex-wrap mt-[128px] pb-[42px] border-b border-[#B3B3B3]/40 justify-center">
        <Logo />
        <div className="md:ml-[355px] flex flex-row">

        <div className="w-[140px]">
          <p className="my-[9px] text-[16px] leading-[24px] text-[#1A1A1A] font-[Lato-Bold] ">
            Company
          </p>
          <p className="my-[9px] text-[16px] leading-[24px] text-[#666666]">
            Blog
          </p>
          <p className="my-[9px] text-[16px] leading-[24px] text-[#666666]">
            About Us
          </p>
          <p className="my-[9px] text-[16px] leading-[24px] text-[#666666]">
            Contact Us
          </p>
        </div>
        <div className="w-[140px]">
          <p className="my-[9px] text-[16px] leading-[24px] text-[#1A1A1A] font-[Lato-Bold] ">
            Services
          </p>
          <p className="my-[9px] text-[16px] leading-[24px] text-[#666666]">
            FAQs
          </p>
          <p className="my-[9px] text-[16px] leading-[24px] text-[#666666]">
            Our Menu
          </p>
        </div>
        </div>
      </div>
        <div className="mt-[38px] mb-[52px] flex flex-wrap justify-center items-center">
          <p className={`text-[#333333] text-[12px] leading-[160%] opacity-50 mb-[30px] w-[930px] items-center ${window.innerWidth < 768 ? 'text-center' : 'text-left'}`}>
            © 2022 Meals. All rights reserved.
          </p>
          <div className='flex flex-row justify-between items-center'>
            <img src={facebook} alt='facebook' />
            <img className='mx-[24px]' src={instagram} alt='instagram' />
            <img src={twitter} alt='twitter' />
            </div>
        </div>
    </div>
  );
}

export default Footer;
