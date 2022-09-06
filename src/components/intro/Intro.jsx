import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>
            Hello there, I'm <span className="name">Ben Gillott</span>
          </h2>
          <h3>
            &#60;<span>Software Developer</span>&#62;
          </h3>
        </div>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/de50k2g-954a5950-2329-485e-9717-0d808e80e492.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGU1MGsyZy05NTRhNTk1MC0yMzI5LTQ4NWUtOTcxNy0wZDgwOGU4MGU0OTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P0Tye7RyNg_0L2MygE_ZW_HgL1OuuZC_fkWb_5b39qQ"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
