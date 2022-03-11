import React, { ReactNode } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    <div className="font-Montserrat px-48 bg-main-background bg-cover overflow-x-hidden  bg-no-repeat  bg-center h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="flex flex-row items-center  justify-between pt-16">
          <div className="flex flex-row items-center space-x-4">
            <img src="/images/logo.png" className="w-14" />
            <div className="flex flex-row items-center text-white space-x-5">
              <p>Blockchain</p>
              <p>Wallet</p>
              <p>NFT</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <p className="text-white">Login</p>
            <div className="bg-[#5F6FFB] py-2 px-4 text-white rounded-md text-center">
              Sign Up
            </div>
            <img src="/images/avtr.png " className="w-14" />
          </div>
        </nav>
      </header>
      {children}
      <footer className="py-4 flex-col items-center space-y-4 text-center">
        <div className="flex flex-row space-x-4 justify-center items-center cursor-pointer">
          <img src="/images/twitter.png" className="w-9" />
          <img src="/images/discord.png" className="w-9" />

          <img src="/images/linkedln.png" className="w-9" />
        </div>
        <p className="text-white text-lg">@Sympodium Coin 2022</p>
      </footer>
    </div>
  </motion.header>
);

export default Layout;
