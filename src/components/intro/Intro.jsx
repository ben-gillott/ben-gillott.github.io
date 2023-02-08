import "./Intro.scss";
import profileImg from "../../assets/profile_photo.jpeg";

export default function Intro() {
  return (
    <div className="intro containerbox">
      <div className="imageContainer">
        <img className="image" src={profileImg} alt="Profile Image" />
      </div>

      <div className="blurbContainer">
        <h1 className="sectionTitle">About</h1>
        <p className="blurb">
          I love using computational and graphical methods to create what looks
          like modern day magic. I am currently conducting graphics shader
          research at Cornell while working on game dev and creating fun
          simulations in my spare time.
          <br />
          <br />
          Planned graduation from Cornell with a Masters of Engineering in
          Computer Science December 2021.
          <br />
          <br />
          Searching for a Summer 2021 internship, please reach out!
        </p>
      </div>
    </div>
  );
}
