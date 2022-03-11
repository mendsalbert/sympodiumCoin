import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="font-Montserrat px-40 bg-main-background bg-cover  bg-no-repeat  bg-center h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700&family=Secular+One&display=swap"
        rel="stylesheet"
      />
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
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
);

export default Layout;
