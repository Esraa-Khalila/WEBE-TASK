import React, { Fragment } from "react";
import "./Header.css";
import Information from "./Information";

const Header = () => {
  return (
    <Fragment>
      <div className="information">
        <div className="header_info">
          <Information
            title={"Advanced Platform"}
            mainTitle={"Take your team to the next level"}
            information={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod "
            }
          />
        </div>
        <div className="dashboard_img">
          <img src="./assets/images/AdminDashboard.png" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
