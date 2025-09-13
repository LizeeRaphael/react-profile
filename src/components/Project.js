import "../css/project.css";
import { UilMessage } from "@iconscout/react-unicons";

export default function Project() {
  return (
    <div className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project?</h2>
            <p className="project__description">
              {/* Contact me now and get best hands on your new project. */}
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="mailto:bookelizabethakinbola@gmail.com"
              className="button button--flex button--white"
            >
              Contact me
              <UilMessage className="project__icon button__icon" />
            </a>
          </div>

          <img
            
            src="/img/footer-side-img-removebg-preview.png"
            
            alt="Elizabeth Akinbola portrait illustration"
            className="project__img"
          />
        </div>
      </div>
    </div>
  );
}
