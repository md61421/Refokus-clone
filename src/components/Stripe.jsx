import React from "react";

const Stripe = ({ val }) => {
  const { url, number } = val;
  return (
    <div className="w-full px-10 py-6 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between items-center">
      <img src={url} alt="" />
      <span className="font-semibold text-xl">{number}</span>
    </div>
  );
};

export default Stripe;
