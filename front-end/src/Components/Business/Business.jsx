import React from "react";
import { Button } from "../../UI/Button";

const Business = (props) => {
  return (
    <div className="business_info">
      <div>
        <h2>{props.title}</h2>
        <p>
         {props.description}
        </p>
        <Button styles={'btn__primary'}>About Us</Button>
      </div>
      <div></div>
    </div>
  );
};

export default Business;
