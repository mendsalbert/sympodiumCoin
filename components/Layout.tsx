import React, { ReactNode, useRef, useState, useEffect } from "react";
import Head from "next/head";
import { Html } from "next/document";
import { motion } from "framer-motion";
import { MenuAlt2Icon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/solid";
import {
  CubeIcon,
  CreditCardIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { Menu } from "react-ionicons";
import Link from "next/link";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const toggleRef = useRef(null);
  const htmlRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    toggleRef.current.style.width = "90%";
  };

  const closeMenu = () => {
    toggleRef.current.style.width = "0%";
  };

  const toggleMode = () => {
    setToggle(!toggle);
  };

  const setTheme = () => {
    setToggle(!toggle);
    if (typeof window === "object") {
      if (!toggle) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  };

  useEffect(() => {
    if (typeof window === "object") {
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setToggle(true);
      } else {
      }
    }
  }, []);
  return (
    <html
      ref={htmlRef}
      className={toggle ? "dark" : "transition-colors delay-200"}
    >
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="font-Montserrat px-4  md:px-20  lg:px-48 dark:bg-main-background-dark bg-main-background bg-cover overflow-x-hidden  bg-no-repeat  bg-center h-screen">
          <Head>
            <title>{title}</title>
          </Head>
          <header>
            <nav className="hidden lg:flex flex-row items-center  justify-between pt-16">
              <div className="flex flex-row items-center space-x-4">
                <img src="/images/logo.png" className="w-14" />
                <div className="flex flex-row items-center text-white space-x-5">
                  <Link href="/blocks">
                    <p>Blockchain</p>
                  </Link>
                  <Link href="/wallet">
                    <p>Wallet</p>
                  </Link>
                  <p>NFT</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <p className="text-white">Login</p>
                <div className="bg-[#5F6FFB] py-2 px-4 text-white rounded-md text-center">
                  Sign Up
                </div>
                <div
                  onClick={() => {
                    setTheme();
                  }}
                >
                  {!toggle ? (
                    <MoonIcon className="h-10 text-white cursor-pointer" />
                  ) : (
                    <SunIcon className="h-10 text-white cursor-pointer" />
                  )}
                </div>

                <img src="/images/avtr.png " className="w-14" />
              </div>
            </nav>

            <nav className=" relative lg:hidden flex flex-row items-center  justify-between pt-6  ">
              <div
                ref={toggleRef}
                className="w-0 transition-width duration-200 delay-75 ease-in-out bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] dark:bg-gradient-to-r dark:from-[#021622] dark:to-[#011627]  lg:hidden overflow-auto h-full fixed shadow-2xl top-0 left-0 z-50"
              >
                <div className="flex flex-col p-6 relative">
                  <div>
                    <XIcon
                      onClick={() => {
                        closeMenu();
                      }}
                      className="text-white h-9 absolute top-0 right-0 m-2 mb-10"
                    />

                    <div>
                      <div className="pt-10 my-3 space-y-5">
                        {/* <p className="text-white">Login</p> */}
                        <div className=" py-2 px-4 text-white border-2 border-white rounded-md text-center">
                          Log In
                        </div>
                        <div className="bg-blue-800 py-2 px-4 text-white rounded-md text-center">
                          Sign Up
                        </div>
                      </div>
                    </div>

                    <div className="my-12 space-y-6">
                      <div className="flex flex-row items-center cursor-pointer space-x-3 ">
                        <CubeIcon className="h-9 text-white" />

                        <p className="text-white">Blockchians</p>
                      </div>

                      <div className="flex flex-row items-center cursor-pointer space-x-3">
                        <CreditCardIcon className="h-9 text-white" />

                        <p className="text-white">Wallet</p>
                      </div>

                      <div className="flex flex-row items-center cursor-pointer space-x-3">
                        <PhotographIcon className="h-9 text-white" />

                        <p className="text-white">NFT's</p>
                      </div>
                      {/* <hr className="my-3" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <MenuAlt2Icon
                  onClick={() => {
                    openMenu();
                  }}
                  className="h-12 cursor-pointer text-white"
                />
              </div>
              <div className="flex flex-row items-center space-x-0">
                <div
                  onClick={() => {
                    setTheme();
                  }}
                >
                  {!toggle ? (
                    <MoonIcon className="h-10 text-white cursor-pointer" />
                  ) : (
                    <SunIcon className="h-10 text-white cursor-pointer" />
                  )}
                </div>
                <img src="/images/avtr.png " className="w-14" />
              </div>
            </nav>
          </header>
          {children}
          <footer className="py-4 flex-col items-center space-y-4 text-center">
            <div className="flex flex-row space-x-4 justify-center items-center cursor-pointer">
              <img src="/images/twitter.png" className="lg:w-9 w-7" />
              <img src="/images/discord.png" className="lg:w-9 w-7" />

              <img src="/images/linkedln.png" className="lg:w-9 w-7" />
            </div>
            <p className="text-white text-lg">@Sympodium Coin 2022</p>
          </footer>
        </div>
      </motion.header>
    </html>
  );
};

export default Layout;
