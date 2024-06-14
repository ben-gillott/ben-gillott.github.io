import "./About.scss";
import { projects } from "../../assets/projects";
import Icon from "../icon/Icon";
import Loader from "../loader/Loader";
import profileImg from "../../assets/profile/coffee.png";
import gitIcon from "../../assets/icons/git.svg";
import itchIcon from "../../assets/icons/itch.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import Preview from "../preview/Preview";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imageContainer">
          <Loader
            elem={<img className="image" src={profileImg} alt="Profile" />}
          />
        </div>

        <div className="iconContainer">
          <div className="icons">
            <Loader
              elem={
                <Icon
                  name="Games"
                  link="https://cloudlight-games.itch.io/"
                  img={itchIcon}
                />
              }
            />

            <Loader
              elem={
                <Icon
                  name="Art"
                  link="https://www.instagram.com/littleartbean/"
                  img={instaIcon}
                />
              }
            />

            <Loader
              elem={
                <Icon
                  name="Linkedin"
                  link="https://www.linkedin.com/in/ben-gillott/"
                  img={linkedinIcon}
                />
              }
            />

            <Loader
              elem={
                <Icon
                  name="Github"
                  link="https://github.com/ben-gillott"
                  img={gitIcon}
                />
              }
            />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="sectionContainer">
          <Loader elem={<h1>About</h1>} />

          <div className="lineContainer">
            <Loader className="hLine" />
          </div>

          <Loader
            elem={
              <p className="blurb">
                I am a software engineer specializing in computer graphics. I am
                fascinated by the blend of art and technology, and I
                passionately believe this combination should be used to create
                profound emotional experiences.
                <br />
                <br />
                In my free time I make indie games, art, and DIY projects.
                <br />
                <br />
                I graduated from Cornell in 2021 with a B.A. in Computer
                Science, and am currently working at the geospatial startup
                Whiteout Solutions.
                <br />
                <br />
              </p>
            }
          />
        </div>

        <div className="sectionContainer previewContainer">
          <Loader elem={<h1>Projects</h1>} />

          <div className="lineContainer">
            <Loader className="hLine" />
          </div>

          {projects.map((p) =>
            p.highlight ? (
              <Loader
                elem={
                  <Preview
                    key={p.title}
                    title={p.title}
                    img={p.img}
                    src={p.src}
                    read={p.read}
                    link={p.link}
                    bullets={p.bullets}
                    type="project"
                  />
                }
              />
            ) : null
          )}

          <Loader elem={<Link to="/portfolio"> ...more projects </Link>} />
        </div>
      </div>
    </div>
  );
}
