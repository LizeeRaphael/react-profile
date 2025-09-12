import "../css/about.css";
import { UilDownloadAlt } from "@iconscout/react-unicons";

export default function About() {
  return (
    <>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">{/* My introduction */}</span>

      <div className="about__container container grid">
        <img
          src="img/about-img-edited.jpg"
          alt="about-imageshot"
          className="about__img"
        />

        <div className="about__data">
          <p className="about__description">
            I am Elizabeth, full-stack developer with solid background in web and app development.
            I merge clean code, smart design,
            and strategy to create websites that are fast, intuitive, and conversion-driven, not just beautiful but built to work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">9+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              download=""
              href="https://drive.google.com/file/d/14M8McJbcKX30WfCrYCuAPoWxrlRnV2f3/view?usp=drive_link"
              className="button button--flex"
            >
              Download CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
