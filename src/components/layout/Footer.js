import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "../../styles/components/_footer.scss";


const Footer = () => {
  return (
    <footer >
      <h3>Tasty Burger</h3>
        <p>Nous nous efforçons de vous offrir la meilleure qualité possible. Vos commentaires sont les bienvenus.</p>
        <strong>Tous droits réservés @tastyburger</strong>
      <aside>
        <div >
          <h4>Suivez nous sur</h4>
          <a href="https://youtube.com">
            <AiFillYoutube style={{ fontSize: "30px", color: "white" }} />
          </a>
          <a href="https://instagram.com">
            <AiFillInstagram style={{ fontSize: "30px", color: "white" }} />
          </a>
          <a href="https://github.com">
            <AiFillGithub style={{ fontSize: "30px", color: "white" }} />
          </a>
        </div>
      </aside>
    </footer>
  );
};
export default Footer;

