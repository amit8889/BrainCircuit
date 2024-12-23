"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import INFO from "../../constant/main.js";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
];

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
          <Link to="#" className="p-1.5 flex items-center justify-start">
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
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-900 font-semibold text-base px-3 py-2 block -mx-3 border-b-2 border-transparent transition-all duration-400 ease-out hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
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
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="transition-colors duration-300 ease-in-out hover:text-[var(--primary-color)] hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block px-6 py-3 text-white font-semibold text-base rounded-lg text-center bg-[var(--primary-color)] transition-all duration-300 ease-in-out hover:bg-[var(--primary-color)]/80"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
