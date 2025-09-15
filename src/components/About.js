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
            Call me Lizee, a full-stack developer with a solid background in web and app development. 
            My approach goes beyond building websites, I sit with your idea and turn it into software products.
            I merge clean code, smart design and business strategy to deliver websites that are fast, intuitive, and conversion-driven. 
            My work isn’t just beautiful, it’s built to work.
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
