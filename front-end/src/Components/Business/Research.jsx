import React from "react";
import Business from "./Business";
import "./Business.css";
const Research = (props) => {
  return (
    <div className='business'>
      <div className="timeline">
      <div className={`${props.research}`}>
          <div class="container right">
            <div class="content">
              <h4>{props.title}</h4>
              <p>
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
