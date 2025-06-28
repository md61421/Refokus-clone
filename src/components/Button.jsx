import React from "react";
import { IoMdReturnRight } from "react-icons/io";

const Button = ({title = "click here"}) => {
  return (
    <>
      <div className="w-40 px-5 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
        <span className="text-sm font-normal">{title}</span>
        <IoMdReturnRight className="text-xs" />
      </div>
    </>
  );
};

export default Button;
