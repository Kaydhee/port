import "./portfolio.css";
import IMG1 from "../../assets/test.png";
import IMG2 from "../../assets/test2.png";
import IMG3 from "../../assets/test3.png";
import IMG4 from "../../assets/test4.png";
import IMG5 from "../../assets/test5.png";
import IMG6 from "../../assets/test6.png";

// Dynamically mapping through projects

const data = [
  {
    id: 1,
    image: IMG5,
    title: "Arennah",
    github: "https://github.com",
    demo: "http://arennah.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "Zedi Africa",
    github: "https://github.com",
    demo: "https://zedi.africa",
  },
  {
    id: 3,
    image: IMG2,
    title: "The Roothub",
    github: "https://github.com",
    demo: "https://theroothub.com",
  },
  {
    id: 4,
    image: IMG3,
    title: "Body Secrets",
    github: "https://github.com",
    demo: "https://bodysecretsng.com/",
  },
  {
    id: 5,
    image: IMG4,
    title: "Calnita",
    github: "https://github.com",
    demo: "https://www.calnita.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "The Chain Of Good",
    figma: "https://figma.com",
    demo: "https://www.figma.com/proto/KNEnAjy1ucNKgckw0QkrCW/TCOG-Web-App?node-id=2-4&p=f&t=axjDxnVQqjQbKXH7-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A3&starting-point-node-id=2%3A4",
  },
  //   {
  //     id: 1,
  //     image: IMG1,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
  //   {
  //     id: 2,
  //     image: IMG2,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
  //   {
  //     id: 3,
  //     image: IMG3,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
  //   {
  //     id: 4,
  //     image: IMG4,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
  //   {
  //     id: 5,
  //     image: IMG5,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
  //   {
  //     id: 6,
  //     image: IMG6,
  //     title: "Melvoid Photography",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/20583168-Fashion-website",
  //   },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Our Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
