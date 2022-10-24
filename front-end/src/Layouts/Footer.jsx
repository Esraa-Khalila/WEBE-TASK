import React from "react";
import { Button } from "../UI/Button";
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Study</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          diam at mi sollicitudin
        </p>
      </div>
      <div className={styles.services_footer}>
        <span>Nos services</span>
        <p>
          Avis clients Mentions légales Plan du site Blog d’Idéematic Le
          dictionnaire du digital ‹ Notre boutique /›
        </p>
      </div>
      <div className={styles.mail_footer}>
        <span>Sign up for Special Offers!</span>
        <input placeholder="mail"></input>
       <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
