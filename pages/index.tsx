import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import LoadingPage from "./loadingPage";
import Homepage from "./Homepage";
import Blocks from "./blocks";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <Layout title="sympodium coin">
        {/* <Homepage /> */}
        <Blocks />
      </Layout>
    );
  }
};

export default IndexPage;
