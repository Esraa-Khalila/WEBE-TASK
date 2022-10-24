import React from "react";
import Information from "../Header/Information";
import "./Technology.css";

const Technology = (props) => {
  return (
    <div className={`Technology ${props.isReversed}`}>
      <div className="dashboard_img ">
        <img src="./assets/images/AdminDashboard.png" />
      </div>
      <div className="Info_Technology">
        <Information
          mainTitle={"Best Platform for the Technological Era"}
          information={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata"
          }
        />
      </div>
    </div>
  );
};

export default Technology;
