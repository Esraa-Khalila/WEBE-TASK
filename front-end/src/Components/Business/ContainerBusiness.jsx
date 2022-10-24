import React from "react";
import Business from "./Business";
import Research from "./Research";
import "./Business.css";

const ContainerBusiness = () => {
  return (
    <div className="business">
      <div>
        <Business
          title={"Market Research"}
          description={
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata"
          }
        />
      </div>
      <div>
        <Research
          research={"research"}
          title={"Market Research"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
        />
        <Research
          research={"research"}
          title={"Acceleration Process to sdas Your Business"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
        />
        <Research
          title={"Acceleration Process to sdas Your Business"}
          description={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          }
        />
      </div>
    </div>
  );
};

export default ContainerBusiness;
