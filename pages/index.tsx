import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import LoadingPage from "./loadingPage";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div></div>
      </Layout>
    );
  }
};

export default IndexPage;
