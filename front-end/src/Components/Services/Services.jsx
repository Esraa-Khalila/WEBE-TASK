import React from "react";
import Information from "../Header/Information";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <div className="services">
      <div>
        <Information
          mainTitle={"The best business solution for you"}
          information={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata"
          }
        />
      </div>
      <div className="ServicesItem_img">
        <ServicesItem
          image={"./assets/images/service1.png"}
          title={"Scale Your Activity"}
          details_Services={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
          }
        />
        <ServicesItem
          image={"./assets/images/service2.png"}
          title={"Bootcamps"}
          details_Services={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
          }
        />
        <ServicesItem
          image={"./assets/images/Preview.png"}
          title={"Hight Quality"}
          details_Services={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
          }
        />
        <ServicesItem
          image={"./assets/images/service4.png"}
          title={"Get Certifcation"}
          details_Services={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
          }
        />
      </div>
    </div>
  );
};

export default Services;
