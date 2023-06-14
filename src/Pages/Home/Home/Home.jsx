import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../../../Shared/Footer/Footer";
import Classes from "../Classes/Classes";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Chorus Camp</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>
    </div>
  );
};

export default Home;
