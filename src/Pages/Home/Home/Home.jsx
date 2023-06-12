import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Chorus Camp</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
