import React, { Fragment } from "react";
import { Button } from "../UI/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a>STuDY</a>
        </div>
        <div>
          <ul className={styles.menu_item}>
            <li>Browser</li>
            <li>Bootcamps</li>
            <li>How It Works</li>
            <li>Testemonial</li>
          </ul>
        </div>
        <div>
          <Button styles={"btn__primary"}>About Us</Button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
