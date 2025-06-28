import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      caseStudy: true,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      caseStudy: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      caseStudy: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      caseStudy: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      caseStudy: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((product, index) => (
        <Product
          mover={mover}
          count={index}
          key={index}
          title={product.title}
          description={product.description}
          live={product.live}
          caseStudy={product.caseStudy}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="windows absolute w-[32rem] h-[23rem] bg-white left-[44%] translate-y-[23rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
              // src="https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4"
              controls
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm"
              controls
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm"
              controls
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/deepset-169.webm"
              controls
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-700"
          >
            <video
              src="https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4"
              controls
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
