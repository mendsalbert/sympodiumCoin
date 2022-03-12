import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import LoadingPage from "./loadingPage";
import Homepage from "./Homepage";
import Blocks from "./blocks";
import Wallet from "./wallet";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <Layout title="sympodium coin" complete={true}>
        <Homepage />
      </Layout>
    );
  }
};

export default IndexPage;
