"use client";

import React from "react";
import { motion } from "framer-motion";
import cards from "../assets/cards.png";
import { RiAppStoreFill } from "react-icons/ri";
import { TbDashboard, TbCloudDataConnection } from "react-icons/tb";
import { FaPiedPiperPp } from "react-icons/fa6";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const text = "The website builder you're looking for is here";

const Hero = () => {
  const words = text.split(" ");

  return (
    <motion.div
      name="Home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between px-6 sm:px-12"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
    >
      {/* Header Text Section */}
      <motion.div className="text-center pt-10" variants={variants}>
        <h1 className="mt-20 text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed text-black">
          {words.map((word, index) => (
            <motion.span key={index} className="inline-block" variants={variants}>
              {word}{" "}
            </motion.span>
          ))}
        </h1>
        <motion.p className="mt-6 text-lg sm:text-xl" variants={variants}>
          Simple is a modern website builder powered by AI that is changing how
          companies create user interfaces together.
        </motion.p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto px-6 py-8 gap-8"
        variants={variants}
      >
        <motion.div className="flex flex-col justify-center w-full text-center md:text-left" variants={variants}>
          <p className="text-xl sm:text-2xl">Unique sequencing & production</p>
          <h1 className="py-3 text-4xl sm:text-5xl md:text-7xl font-bold">Cloud Management</h1>
          <p className="text-xl sm:text-2xl">This is our tech brand.</p>
          <motion.button
            className="py-3 px-6 sm:w-[60%] mt-4 bg-indigo-600 text-white rounded-lg"
            variants={variants}
          >
            Get started
          </motion.button>
        </motion.div>
        <motion.div className="px-6 mb-32 md:px-0 flex justify-center" variants={variants}>
          <motion.img className="w-full  max-w-[500px]" src={cards} alt="Cards" variants={variants} />
        </motion.div>
      </motion.div>

      {/* Data Services Section */}
      <motion.div
        className="absolute flex flex-col py-6 px-4 w-[90%] md:w-auto bottom-[5%] left-1/2 transform -translate-x-1/2 bg-zinc-200 
        border border-slate-300 rounded-xl text-center shadow-xl"
        variants={variants}
      >
        <p className="text-lg font-semibold">Data Services</p>
        <motion.div className="flex flex-wrap justify-center gap-4 mt-4" variants={variants}>
          <motion.p className="flex items-center gap-2 text-slate-500 text-sm sm:text-base" variants={variants}>
            <RiAppStoreFill className="h-5 sm:h-6 text-indigo-600" /> App Security
          </motion.p>
          <motion.p className="flex items-center gap-2 text-slate-500 text-sm sm:text-base" variants={variants}>
            <TbDashboard className="h-5 sm:h-6 text-indigo-600" /> Dashboard Design
          </motion.p>
          <motion.p className="flex items-center gap-2 text-slate-500 text-sm sm:text-base" variants={variants}>
            <TbCloudDataConnection className="h-5 sm:h-6 text-indigo-600" /> Cloud Data
          </motion.p>
          <motion.p className="flex items-center gap-2 text-slate-500 text-sm sm:text-base" variants={variants}>
            <FaPiedPiperPp className="h-5 sm:h-6 text-indigo-600" /> API
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;