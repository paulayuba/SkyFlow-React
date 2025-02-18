import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full my-32">
      <div className="max-[124px] max-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developer <br />
            across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur,
            <br /> adipisicing elit. Voluptas praesentium ipsam saepe <br />
            corporis officiis iste autem voluptates. Sed, esse facilis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100k</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
