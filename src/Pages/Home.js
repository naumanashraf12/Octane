import React from "react";
import Bar from "../Components/Bar/Bar";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/header/Header";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Bar />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
