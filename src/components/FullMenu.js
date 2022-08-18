import React, {useEffect} from "react";
import Button from "./Button";

import MenuCard from "./MenuCard";


function FullMenu({menu, filter}) {
  useEffect(() => {}, [menu, filter])
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
          <MenuCard
          filter={filter}
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
      <Button
        text="Add Item"
        width="120"
        height="54"
        extra="mt-[60px] px-[24px] mb-[152px]"
      />
    </div>
  );
}

export default FullMenu;
