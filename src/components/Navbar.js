import React from "react";
import { ReactComponent as Logo } from "../assets/images/svg/Logo.svg";
import { ReactComponent as Search } from "../assets/images/svg/Search.svg";
import { ReactComponent as Cart } from "../assets/images/svg/Cart.svg";
import Button from "./Button";

function Navbar({ open, setOpen }) {
  return (
    <div className="flex flex-row justify-center items-center h-[100px] bg-white shadow-xl">
      <Logo />
      <div className="hidden md:flex flex-row">
        <div className="flex flex-row ml-[120px]">
          {open === false ? (
            <div className="flex flex-row">
              <p className="cursor-pointer text-base text-[#DA3743]">
                <span className="underline decoration-solid">H</span>ome
              </p>
              <p onClick={() => setOpen(true)} className="cursor-pointer text-base flex flex-row justify-between mx-12 text-[#666666]">
                Menu
              </p>
            </div>
          ) : (
            <div className="flex flex-row">
              <p onClick={() => setOpen(false)}className="cursor-pointer text-base flex flex-row justify-between text-[#666666]">
                Home
              </p>
              <p className="cursor-pointer mx-12 text-base text-[#DA3743]">
                <span className="underline decoration-solid">M</span>enu
              </p>
              
            </div>
          )}
          <p className="cursor-pointer text-base text-[#666666]">Meal Plans</p>
        </div>
        <div className="flex flex-row ml-[214px]">
          <Search className="mr-7 cursor-pointer" />
          <Cart className="cursor-pointer" />
        </div>
        <p className="cursor-pointer text-base mx-16 text-[#666666]">Sign In</p>
        <Button text="Create Account" width="157" height="54" />
      </div>
    </div>
  );
}

export default Navbar;
