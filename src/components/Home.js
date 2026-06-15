// import "../css/home.css";
// import { UilLinkedinAlt } from "@iconscout/react-unicons";
// import { UilDribbble } from "@iconscout/react-unicons";
// import { UilGithubAlt } from "@iconscout/react-unicons";
// import { UilMessage } from "@iconscout/react-unicons";
// import { UilMouseAlt } from "@iconscout/react-unicons";
// import { UilArrowDown } from "@iconscout/react-unicons";
// import MeIcon from "../MeIcon";

// export default function Home() {
//   return (
//     <div className="home__container container grid">
//       <div className="home__content grid">
//         <div className="home__social">
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a
//             href="https://www.linkedin.com/in/akinbola-elizabeth-ba770217b/"
//             className="home__social-icon"
//           >
//             <UilLinkedinAlt />
//           </a>
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a href="https://linktr.ee/Elizabeth_Akinbola" className="home__social-icon">
//             <UilDribbble />
//           </a>
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a href="https://github.com/lizeeraphael" className="home__social-icon">
//             <UilGithubAlt />
//           </a>
//         </div>
//         <div className="home__img">
//           <MeIcon />
//         </div>
//         <div className="home__data">
//           <h1 className="home__title">Hi👋I am Elizabeth</h1>
//           <h3 className="home__subtitle">Full-Stack Developer</h3>
//           <p className="home__description">
//             Agile full-stack developer with a solid background in web and
//             app development.
//           </p>
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a
//             href="mailto:bookelizabethakinbola@gmail.com"
//             className="button botton--flex"
//           >
//             Contact Me <UilMessage size="17" className="button__icon" />
//           </a>
//         </div>
//       </div>
//       <div className="home__scroll">
//         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//         <a href="" className="home__scroll-button button--flex">
//           <UilMouseAlt className="home__scroll-mouse" />
//           <span className="home__scroll-name">Scroll down</span>
//           <UilArrowDown className="home__scroll-arrow" />
//         </a>
//       </div>
//     </div>
//   );
// }

import "../css/home.css";
import { UilLinkedinAlt, UilDribbble, UilGithubAlt, UilMessage, UilMouseAlt, UilArrowDown } from "@iconscout/react-unicons";
import MeIcon from "../MeIcon";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="home__container container grid">
      <div className="home__content grid">
        <div className="home__social">
          <a
            // href="https://www.linkedin.com/in/akinbola-elizabeth-ba770217b/"
            href="https://www.linkedin.com/in/elizabeth-akinbola/"
            className="home__social-icon"
          >
            <UilLinkedinAlt />
          </a>
          <a href="https://linktr.ee/Elizabeth_Akinbola" className="home__social-icon">
            <UilDribbble />
          </a>
          <a href="https://github.com/lizeeraphael" className="home__social-icon">
            <UilGithubAlt />
          </a>
        </div>

        <div className="home__img">
          <MeIcon />
        </div>

        <div className="home__data">
          <h1 className="home__title">Hi👋 I am Elizabeth</h1>
          <h3 className="home__subtitle">Full-Stack Developer</h3>

          <p className="home__description">
            <Typewriter
              words={[
                "Agile full-stack developer with a solid background in web and app development.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <a
            href="mailto:bookelizabethakinbola@gmail.com"
            className="button botton--flex"
          >
            Contact Me <UilMessage size="17" className="button__icon" />
          </a>
        </div>
      </div>

      <div className="home__scroll">
        <a href="#home-scroll" className="home__scroll-button button--flex">
          <UilMouseAlt className="home__scroll-mouse" />
          <span className="home__scroll-name">Scroll down</span>
          <UilArrowDown className="home__scroll-arrow" />
        </a>
      </div>
    </div>
  );
}
