import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1  ">
        <Card
          color={"bg-[#29292e]"}
          width={"basis-1/3"}
          start={false}
          para={true}
        />
        <Card
          color={"bg-[#323238]"}
          width={"basis-2/3"}
          start={true}
          para={false}
          hover="true"
        />
      </div>
    </div>
  );
};

export default Cards;
