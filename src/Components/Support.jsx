import React from "react";
import support from "../assets/support.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { CgMediaLive } from "react-icons/cg";

const Support = () => {
  return (
    <div name="Support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt="/"
        />
      </div>
      <div className="man-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            laborum ullam vel accusantium facilis dolorum labore magnam
            perspiciatis repellendus nesciunt!
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FaPhoneAlt className="w-16 px-4 bg-indigo-600 text-white rounded-full  mt-[0rem]" />
              <h3 className="font-bold text-2xl ml-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident at illo expedita illum modi impedit saepe, sed velit
                commodi ducimus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <FaLongArrowAltRight className="w-5 mt-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SlSupport className="w-16 px-4 bg-indigo-600 text-white rounded-lg mt-[0rem]" />
              <h3 className="font-bold text-2xl ml-6">Technical support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident at illo expedita illum modi impedit saepe, sed velit
                commodi ducimus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <FaLongArrowAltRight className="w-5 mt-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CgMediaLive className="w-16 px-4 bg-indigo-600 text-white rounded-lg mt-[0rem]" />
              <h3 className="font-bold text-2xl ml-6">media inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident at illo expedita illum modi impedit saepe, sed velit
                commodi ducimus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us <FaLongArrowAltRight className="w-5 mt-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
