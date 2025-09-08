import "./footer.css";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        FINNOVATE AFRICA SOLUTIONS LTD.
      </a>
      {/* <a href="#" className="footer__logo">
        DANIEL
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com">
          <FaFacebook />
        </a> */}
        <a
          href="https://www.linkedin.com/company/finnovate-africa-solutions-ltd/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        {/* <a href="https://instagram.com">
          <FaInstagramSquare />
        </a> */}
        <a href="https://x.com/finnovateafrica?s=21" target="_blank">
          <BsTwitterX />
        </a>
        {/* <a href="https://twitter.com">
          <FaTwitterSquare />
        </a> */}
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Finnovate Africa Solutions Ltd. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
