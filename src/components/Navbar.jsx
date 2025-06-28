import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
        <div className="nleft flex items-center">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="Refokus Logo"
          />
          <div className="links flex gap-14 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((link, index) =>
              link.length === 0 ? (
                <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
              ) : (
                <a
                  href="#"
                  key={index}
                  className="font-normal text-sm flex items-center gap-1"
                >
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.45em #00FF19" }}
                      className="inline-block w-[6px] h-[6px] rounded-full bg-green-500"
                    ></span>
                  )}
                  {link}
                </a>
              )
            )}
          </div>
        </div>
        <Button title="Start a Project" />
      </div>
    </>
  );
};

export default Navbar;
