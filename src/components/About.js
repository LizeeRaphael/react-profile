import "../css/about.css";
import { UilDownloadAlt } from "@iconscout/react-unicons";

export default function About() {
  return (
    <>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">{/* My introduction */}</span>

      <div className="about__container container grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sendfile-a4b5e.appspot.com/o/Screenshot%202023-11-09%20002741.png?alt=media&token=f1d38081-d4d1-424b-8601-1791e5a80bad"
          alt=""
          className="about__img"
        />

        <div className="about__data">
          <p className="about__description">
            I am Elizabeth Akinbola, an adept full-stack developer recognized for
            crafting dynamic applications. I specialize in website designs, 
            app development, frontend development and backend development,
            My dedication lies in constructing
            high-performance, scalable software solutions that consistently
            surpass client expectations.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">02+</span>
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
