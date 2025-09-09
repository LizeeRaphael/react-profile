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
            I am Akinbola Elizabeth, agile full-stack developer with solid
            background in web and app development. I don’t just build websites. 
            I build digital tools that grow your business. I merge clean code, 
            smart design, and business strategy to create websites that are fast, 
            intuitive, and conversion-driven — not just beautiful, but built to work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">04+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              download=""
              href="https://docs.google.com/document/d/1lzAKSWWhBXsSvNL1-IQ-gG-4qUcyD8my/edit?usp=drive_link&ouid=105619443633857196860&rtpof=true&sd=true"
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
