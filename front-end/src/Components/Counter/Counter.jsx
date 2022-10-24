import React from "react";
import './Counter.css'

const Counter = () => {
  return (
    <div >
      <h3 className="title">Don't Just Take our Word for it!</h3>
      <div className="counter">
        <div>
            <span className="number">570</span>
            <div>Dowload</div>
        </div>
        <div>
        <span className="number">570</span>
            <div>Active User</div>
        </div>
        <div>
        <span className="number">570</span>
            <div>Positive Feedback</div>
        </div>
        <div>
        <span className="number">570</span>
            <div>+ rating</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
