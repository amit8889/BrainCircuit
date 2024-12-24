import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import INFO from "../../constant/main.js";
const Footer = () => {
  return <>
  

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-16 "  style={{backgroundColor: "var(--footer-color)" }}>
    <div className="  px-16 w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="h-full lg:flex-1">
          <Link to="#" className="p-1.5 flex items-center justify-start">
            <img
              alt="App Logo"
              src={logo}
              className="w-auto max-h-12 max-w-[12rem] sm:max-w-[14rem] lg:max-w-[16rem] object-contain"
            />

            <span
              style={{ color: "white"}}
              className="text-primary ml-2 font-bold"
            >
              {INFO.APP_NAME}
            </span>
          </Link>
        </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400" style={{ color: "white"}}>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" style={{ color: "white"}} />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400" style={{ color: "white"}}>© 2025 <a href="#" className="hover:underline"> {INFO.APP_NAME}</a>. All Rights Reserved.</span>
    </div>
</footer>

</>
}

export default Footer