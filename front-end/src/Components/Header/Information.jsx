import React from "react";
import { Button } from "../../UI/Button";
import "./Information.css";

const Information = (props) => {
  return (
    <div className="details">
      {props.title ? <p>{props.title}</p> : <div className="line"></div>}
      <h1>{props.mainTitle}</h1>
      <p>{props.information}</p>
      {props.title ? (
        <Button styles={"btn__secondary "}>About Us</Button>
      ) : (
        <div>
          <a href="" className="link">
            Learn About Our Success
            <iconify-icon
              className="icon"
              icon="akar-icons:arrow-right"
              style={{ color: " #ff6057", paddingLeft: "15px" }}
            ></iconify-icon>
          </a>
        </div>
      )}
    </div>
  );
};

export default Information;
