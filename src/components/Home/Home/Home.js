import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Copyright from "../Copyright/Copyright";
import FeatureBanner from "../FeatureBanner/FeatureBanner";
import Footer from "../../Shared/Footer/Footer";
import HighValueAssignment from "../HighValueAssignment/HighValueAssignment";
import InfoBanner from "../InfoBanner/InfoBanner";
import LongTimeAssignment from "../LongTimeAssignment/LongTimeAssignment";
import LowValueAssignment from "../LowValueAssignment/LowValueAssignment";
import ShortTimeAssignment from "../ShortTimeAssignment/ShortTimeAssignment";
import Slider from "../Slider/Slider";
import SuccessStoryBanner from "../SuccessStoryBanner/SuccessStoryBanner";
import WorkFlowBanner from "../WorkFlowBanner/WorkFlowBanner";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
      <FeatureBanner></FeatureBanner>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <LongTimeAssignment></LongTimeAssignment>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <ShortTimeAssignment></ShortTimeAssignment>
      </div>
      <InfoBanner></InfoBanner>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <HighValueAssignment></HighValueAssignment>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <LowValueAssignment></LowValueAssignment>
      </div>
      <WorkFlowBanner></WorkFlowBanner>
      <div
        style={{
          zIndex: 100,
          // marginTop: -320,
          width: "100%",
          height: 827,
          backgroundImage:
            "linear-gradient(to right, #ff8a00 0%, #ffc000 100%)",
        }}
      >
        <SuccessStoryBanner></SuccessStoryBanner>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
      <div style={{ backgroundColor: "#000000" }}>
        <Copyright></Copyright>
      </div>
    </>
  );
};

export default Home;
