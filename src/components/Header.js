import React from "react";

function Header() {
  return (
    <div className="w-full h-[90px] bg-white mt-10 flex justify-center items-center">
      <div className="w-[1367px] h-[45px] flex justify-between px-4">
        <div className="flex items-center w-[30%]">
          <img className="w-[26px] h-[23px] mr-2.5" src="./Engagement.png" alt="Engagement"/>
          <h4 className="font-bold">GREATESTDAY</h4>
        </div>
        <div className="w-[300px] h-full flex  justify-end items-center">
          <button className="h-full w-[130px] bg-black border-0 rounded-[5px] text-white font-bold text-sm mr-[30px]">Our wedding</button>
          <button className="h-full w-[146px] bg-[#FAEBE3] border-0 rounded-[5px] font-bold text-sm">Sign out</button>
        </div>

      </div>
    </div>
  );
}

export default Header;