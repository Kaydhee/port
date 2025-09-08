import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Research users to create detailed personas.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Design wireframes, mockups, and prototypes.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Build intuitive flows for smooth navigation.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Conduct usability tests for design improvements.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Create responsive layouts for all devices.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web/Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Develop scalable and efficient web/mobile applications.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Write clean, maintainable, and secure code.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Integrate APIs and essential third-party services.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Optimize webs/mobile apps for speed and performance.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Architect back-end systems with robust databases.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Ensure responsive, cross-browser compatible designs.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPEMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Product Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Translate business ideas into product roadmaps.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Define strategy aligned with market opportunities.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Oversee ideation, design, development, launch.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Conduct competitive and detailed market research.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Collaborate cross-functional teams for successful delivery.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
