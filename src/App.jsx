import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 text-white flex flex-col items-center justify-center md:hidden px-8 text-center">
        <div className="w-20 h-20 mb-8 rounded-2xl bg-zinc-800/50 flex flex-col items-center justify-center shadow-lg border border-zinc-700/50">
          <svg className="w-10 h-10 text-zinc-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <h1 className="text-3xl font-medium tracking-tight mb-4">
          Desktop Experience Only
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
          This crafted experience is optimized for larger displays. Please visit us on a desktop or laptop device to explore.
        </p>
      </div>
      <div className="w-full h-fit bg-zinc-900 text-white font-satoshi hidden md:block">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;

