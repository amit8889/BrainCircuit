"use client";

import { useState,useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import INFO from "../../constant/main.js";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 -top-3 z-50  sm:ps-16 sm:pe-20   ${style.navbarBackgroud} shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] h-[12vh] `}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="h-full lg:flex-1">
          <Link to="/" className="p-1.5 flex items-center justify-start">
            <img
              alt="App Logo"
              src={logo}
              className="w-auto max-h-12 max-w-[12rem] sm:max-w-[14rem] lg:max-w-[16rem] object-contain"
            />

            <span
              style={{ color: "var(--primary-color)" }}
              className="text-primary ml-2 font-bold"
            >
              {INFO.APP_NAME}
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          {INFO?.NAVIGATION.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              
              className="text-gray-900 font-semibold text-base px-3 py-2 block -mx-3 border-b-2 border-transparent transition-all duration-400 ease-out hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link to="/" className="py-1.5 flex items-center justify-start">
            <img
              alt="App Logo"
              src={logo}
              className="w-auto -ml-2 max-h-12 max-w-[12rem] sm:max-w-[14rem] lg:max-w-[16rem] object-contain"
            />

            <span
              style={{ color: "var(--primary-color)" }}
              className="text-primary ml-2 font-bold"
            >
              {INFO.APP_NAME}
            </span>
          </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 text-center">
                {INFO?.NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="transition-colors duration-300 ease-in-out hover:text-[var(--primary-color)] hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="block px-6 py-3 text-white font-semibold text-base rounded-lg text-center bg-[var(--primary-color)] transition-all duration-300 ease-in-out hover:bg-[var(--primary-color)]/80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
