import "../css/footer.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Elizabeth</h1>
            <span className="footer__subtitle">Full-Stack Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://web.facebook.com/profile.php?id=100064090987402&mibextid=ZbWKwL&_rdc=1&_rdr#"
              className="footer__social"
            >
              <UilFacebookF />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://www.instagram.com/liz__logic/?igsh=MXJ5eW04ZnVqMnh6cA%3D%3D#"
              className="footer__social"
            >
              <UilInstagram />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://x.com/Liz_Logic?t=mOApxIEeomLMjAoCTSOQeA&s=09" className="footer__social">
              <UilTwitterAlt />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Liz. All right reserved</p>
      </div>
    </footer>
  );
}
