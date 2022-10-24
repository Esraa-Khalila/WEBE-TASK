import React from "react";
import Business from "../Business/Business";
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="personal">
        <div className="personal_img">
          <img src="./assets/images/shutterstock_45.png" />
        </div>
        <div className="personal_info">
          <h6>Florrie Jacobs</h6>
          <span>CEO of Company</span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat
          </p>
          <div>
            <iconify-icon
              icon="carbon:star-filled"
              style={{ color: "#cb48f9" }}
            ></iconify-icon>
            <iconify-icon
              icon="carbon:star-filled"
              style={{ color: "#cb48f9" }}
            ></iconify-icon>
            <iconify-icon
              icon="carbon:star-filled"
              style={{ color: "#cb48f9" }}
            ></iconify-icon>
            <iconify-icon
              icon="carbon:star-filled"
              style={{ color: "#cb48f9" }}
            ></iconify-icon>
          </div>
        </div>
      </div>
      <div>
      <Business
          title={"Market Research"}
          description={
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata"
          }
        />
      </div>
    </div>
  );
};

export default About;
