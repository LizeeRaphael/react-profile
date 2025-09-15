import { useRef } from "react";
import "../css/portfolio.css";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilAngleLeftB } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Portfolio() {
  const swiperNevPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const portfolioData = [
    {
      id: 1,
      title: "Upscale 💼 ",
      content:
        "Built a corporate site with HTML, CSS, and JavaScript, showcasing the company’s AI-driven consulting services, team expertise, blog and client success stories positioning the brand as a trusted partner.",
      href: "https://upscalestrategy.biz/",
      image: "/img/project1.png",
    },
    {
      id: 2,
      title: "Manzo ✈️ ",
      content:
        "Contributed to a real-world flight booking platform built with React and Node.js, developing booking flows (search, checkout, payment), a journey from search to purchase. Widely used by travelers today.",
      href: "https://manzo.com.ng/",
      image: "/img/project2.png",
    },
    {
      id: 3,
      title: "Terra 💰 ",
      content:
        "Built a corporate site for an investment company using PHP + MySQL, to deliver structured content and professional branding. Integrated a language switch so visitors from any region can access site content easily.",
      href: "https://terrafortisholdings.com/",
      image: "/img/project3.png",
    },
    {
      id: 4,
      title: "Social App📱 (Liz | Logic)",
      content:
        "Built a social app prototype using HTML, CSS, JavaScript, replicating key UI and interaction flows such as posts, likes, and comments. Integrated dark mode switch and adjustable FONT size so users of any age can experience.",
      href: "https://social-media-app-liz-logic.vercel.app/",
      image: "/project4.png",
    },
    {
      id: 5,
      title: "Rama 📸",
      content: `Built a job posting and showcase platform with React and Node.js, enabling users to sign in, upload, display and showcase their work. A practical tool for creatives to create and share opportunities.`,
      href: "https://www.ramadreams.com/app",
      image: "/project5.png",
    },
    {
      id: 6,
      title: "Ring Fantasy",
      content:
        "I created an algorithm for a fantasy basketball game that involves designing the logic that governs various aspects of the game, including drafting players, managing finances and simulating matches.",
      href: "https://play.google.com/store/apps/details?id=com.sixtemia.ringfantasy",
      image: "/project6.png",
    },
    {
      id: 7,
      title: "Social Media UI",
      content:
        "I created a user-friendly UI for a Social Media web app, and an interface that is intuitive, visually appealing and encourages user engagement.",
      href: "https://yudahtech.github.io/YudahTech_social-media/",
      image: "/project7.png",
    },
    {
      id: 8,
      title: "Virtual Meeting Application",
      content:
        "I created a virtual meeting web application, that has various features and considerations, to provide a seamless and effective experience for users",
      href: "https://ckwvwosj88845qojnnw2ldyuc-5u4jrz147-joelbobai.vercel.app/create",
      image: "/project1.png",
    },
    {
      id: 9,
      title: "Joejoe Voice Assistant",
      content:
        "I built a voice assistant that has integrating automatic speech recognition (ASR), natural language processing (NLP), and other technologies to understand and respond to user commands.",
      href: "https://ai-joejoe.netlify.app/",
      image: "/project2.png",
    },
    {
      id: 10,
      title: "ZINTO-PINTO",
      content:
        "I created the frontend for ZINTOPINTO, designing a visually appealing and user-friendly website, that reflects the luxury, comfort, and the unique experiences offered by the service apartment rental company.",
      href: "https://zintopinto.com/",
      image: "/project3.png",
    },
  ];

  return (
    <>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <div>
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            //  navigation
            navigation={{
              prevEl: swiperNevPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            pagination={{ clickable: true }}
            effect={"flip"}
            speed={800}
            slidesPerView={1}
            loop
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNevPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {/* PROTFOLIO  */}
            {portfolioData &&
              portfolioData.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <div className="portfolio__content grid">
                      <img src={data.image} alt="" className="portfolio__img" />
                      <div className="portfolio__data">
                        <h3 className="portfolio__title">{data.title}</h3>
                        <p className="portfolio__description">{data.content}</p>
                        <a
                          href={data.href}
                          className="button button--flex button--small portfolio__button"
                           style={{ margin: "0px 0px 40px 0px" }}
                            >
                          View
                          <UilArrowRight className="button__icon" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            <div className="swiperNavPrev" ref={swiperNevPrevRef}>
              <UilAngleLeftB className="swiper-portfolio-icon" />
            </div>
            <div className="swiperNavNext" ref={swiperNavNextRef}>
              <UilAngleRightB className="swiper-portfolio-icon" />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
