import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

// import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/company/finnovate-africa-solutions-ltd/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      {/* <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a> */}
      <a href="https://x.com/finnovateafrica?s=21" target="_blank">
        <BsTwitterX />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="https://dribble.com" target="_blank">
        <BsDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
