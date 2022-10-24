import React from "react";
import About from "./About/About";
import ContainerBusiness from "./Business/ContainerBusiness";
import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Overview from "./Overview/Overview";
import Services from "./Services/Services";
import Technology from "./Technological/Technology";
import Testemonial from "./Testemonial/Testemonial";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Testemonial />
      <Services />
      <Technology />
      <Overview />
      <Technology isReversed={"isReversed"} />
      <ContainerBusiness />
      <Counter/>
      <About/>
    </div>
  );
};

export default Home;
