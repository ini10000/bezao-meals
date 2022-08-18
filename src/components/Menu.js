import React from "react";
import Button from "./Button";
import Jollof from "../assets/images/Chicken.png";
import Draw from "../assets/images/Draw.png";
import Fries from "../assets/images/Fries.png";
import Egusi from "../assets/images/Egusi.png";
import Beans from "../assets/images/Beans.png";
import Fried from "../assets/images/Fried.png";
import Card from "./Card";

const menu = [
  {
    image: Jollof,
    name: "Jollof Rice and Chicken",
    price: "₦ 1,500",
  },
  {
    image: Draw,
    name: "Swallow with Draw Soup",
    price: "₦ 1,000",
  },
  {
    image: Fries,
    name: "Fries with Egg Sauce",
    price: "₦ 1,500",
  },
  {
    image: Egusi,
    name: "Swallow with Egusi Soup",
    price: "₦ 1,500",
  },
  {
    image: Beans,
    name: "Beans",
    price: "₦ 700",
  },
  {
    image: Fried,
    name: "Fried Rice",
    price: "₦ 600",
  },
];

function Menu() {
  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center">
      <div className="!items-start w-[83%]">
        <p className="font-[Lato-Bold] text-[#DA3743] text-base mt-[30px] mb-[16px] !text-left">
          MENU
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center w-[83%]">
        <p className="font-[Lato-Bold] text-[42px] leading-[124%] w-[778px]]">
          Current Menu
        </p>
        <div className="flex flex-row justify-between items-center w-[350px] h-[40px] px-1 border border-[#EBEBEB] rounded-[8px] grow-0">
          <Button
            extra="text-base cursor-pointer"
            text="All"
            width="32"
            height="32"
            radius="8"
          />
          <p className="text-base cursor-pointer">Rice</p>
          <p className="text-base cursor-pointer">Beans</p>
          <p className="text-base cursor-pointer">Fries</p>
          <p className="text-base cursor-pointer">Swallow</p>
          <p className="text-base cursor-pointer">Others</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {menu.map((item, index) => (
          <Card
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
      <Button
        text="Full Menu"
        width="120"
        height="54"
        extra="mt-[60px] px-[24px] mb-[152px]"
      />
    </div>
  );
}

export default Menu;
