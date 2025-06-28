import React from "react";
import Button from "./Button";

const Product = ({ mover, count, title, description, live, caseStudy }) => {
  return (
    <>
      <div className="w-full py-20 h-[23rem] text-white">
        <div
          onMouseEnter={() => {
            mover(count);
          }}
          className="max-w-screen-xl mx-auto flex items-center justify-between"
        >
          <h1 className="text-6xl capitalize font-medium ">{title}</h1>
          <div className="details w-1/3">
            <p className="mb-10">{description}</p>
            <div className="flex items-center gap-5">
              {live && <Button title="Live website" />}
              {caseStudy && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
