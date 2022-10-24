import React from "react";
import Information from "../Header/Information";
import './Overview.css'

const Overview = () => {
  return (
    <div className="overview">
      <div className="Info_overview">
        <Information
          title={"Advanced Customer Service Platform"}
          mainTitle={"Platform Overview"}
          information={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Stet clita kasd gubergren, no sea takimata"
          }
        />
      </div>
      <div>
        <img src="./assets/images/AdminDashboard.png" />
      </div>
    </div>
  );
};

export default Overview;
