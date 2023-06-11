import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../../Shared/Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LOL</title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
};

export default Home;
