import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoTwitch } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Marketing</h6>
          <ul>
            <li className="py-1">Analytices</li>
            <li className="py-1">Commercer</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">support</h6>
          <ul>
            <li className="py-1">pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partnar</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, article, and resources, sent to our inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 bg-red-600">subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2024 workflow, llc All rights reseverd</p>

        <div className="flex justify-between  sm:w-[300px] px-4 mr-8 text-2xl">
          <FaFacebookF />
          <FaInstagramSquare />
          <FaTwitter />
          <FaGithub />
          <IoLogoTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
