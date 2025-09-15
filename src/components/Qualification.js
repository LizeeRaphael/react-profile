import { useState } from "react";
import "../css/qualification.css";
import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";

export default function Qualification() {
  const [qualificationState0, setQualificationState0] = useState(
    "qualification__active"
  );
  const [qualificationState1, setQualificationState1] = useState("");

  const qualificationClick0 = () => {
    setQualificationState0((qualificationClick0) => "qualification__active");
    setQualificationState1((qualificationClick1) => "");
  };
  const qualificationClick1 = () => {
    setQualificationState0((qualificationClick0) => "");
    setQualificationState1((qualificationClick1) => "qualification__active");
  };

  return (
    <>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <div
            onClick={qualificationClick0}
            className={`qualification__button button--flex ${qualificationState0}`}
            data-target="#education"
          >
            <UilGraduationCap className="qualification__icon" />
            Education
          </div>

          <div
            onClick={qualificationClick1}
            className={`qualification__button button--flex ${qualificationState1}`}
            data-target="#work"
          >
            <UilBriefcaseAlt className="qualification__icon" />
            work
          </div>
        </div>
        <div className="qualification__sections">
          {/* Qualification CONTENT 1*/}
          <div
            className={`qualification__content ${qualificationState0}`}
            data-content
            id="education"
          >
            {/* Qualification 1*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_title">Mass Communication</h3>
                <span className="qualification__subtitle">
                  National Open University of Nigeria(NOUN)
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2021 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification 2*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Website Design</h3>
                <span className="qualification__subtitle">
                  Self-taught
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2023 ----
                </div>
              </div>
            </div>

            {/* Qualification 3*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_title">Frontend Development</h3>
                <span className="qualification__subtitle">
                 Meta
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2024 ----
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification 4*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className='qualification__line'></span> */}
              </div>

              <div>
                <h3 className="qualification_title">Backend development</h3>
                <span className="qualification__subtitle">
                  Self-taught
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2023 ----
                </div>
              </div>
            </div>
          </div>
          {/* Qualification CONTENT 2*/}
          <div
            className={`qualification__content ${qualificationState1}`}
            data-content
            id="work"
          >
            {/* Qualification 1*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_title">Software Developer</h3>
                <span className="qualification__subtitle">
                  Brainquest App
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2025 ---
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification 2*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Fullstack Developer (Intern)</h3>
                <span className="qualification__subtitle">
                  Codeflare
                </span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  Jan 2023 - July 2023
                </div>
              </div>
            </div>

            {/* Qualification 3*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_title">Techpatriate Global Resources</h3>
                <span className="qualification__subtitle">Technical support specialist</span>
                <div className="qualification__calendar">
                  <UilCalendarAlt />
                  2024 ---
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/*   <span className='qualification__line'></span> */}
              </div>
            </div>

            {/* Qualification 4*/}
            {/*  <div className='qualification__data'>
                            <div></div>
                            
                            <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span> 
                            </div>

                        <div>
                            <h3 className='qualification_title'>Master in Ui/Ux</h3>
                            <span className='qualification__subtitle'>Peru - Institute</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2019 - 2021
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
