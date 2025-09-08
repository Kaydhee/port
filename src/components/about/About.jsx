import "./about.css";
// import ME from "../../assets/about.jpeg";
import ME from "../../assets/Finnovate logo.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      {/* <h2>About Me</h2> */}

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__card-icon" />
              <h5>Clients</h5>
              <small>10+ clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscNewFolder className="about__card-icon" />
              <h5>Projects</h5>
              <small>40+ completed Projects</small>
            </article>
          </div>

          <p>
            We are a product development company passionate about turning ideas
            into impactful solutions. Our team combines creativity, technology,
            and strategy to design and build products that meet real-world
            needs. From concept to launch, we focus on innovation, quality, and
            collaboration, helping businesses bring their vision to life.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
