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
      title: "UPSCALE 💼 ",
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
      title: "Luxolite Consult International",
      content:
        "I created the frontend for a business consulting firm, and designed a user interface that allowed users to interact with the information and services provided by the company.",
      href: "https://luxoliteconsultint.com/",
      image: "/img/project3.png",
    },
    {
      id: 4,
      title: "Legion X",
      content:
        "I created the ultimate app that brings together a wide range of powerful AI tools at your fingertips. Whether you're a student, a professional, or simply curious about artificial intelligence, this app is designed to empower you with cutting-edge AI capabilities.",
      href: "https://play.google.com/store/apps/details?id=com.legion.x&pli=1",
      image: "/project4.png",
    },
    {
      id: 5,
      title: "Mishal Medi & Mart",
      content: `I built a mobile application for "Mishal Supermarket and Pharmacy Limited" that can handle various aspects of checkout system, such as product catalog and shopping cart. Using high-quality images and organised their products in a user-friendly manner.`,
      href: "https://play.google.com/store/apps/details?id=com.web.mishal_app",
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
      image: "/project.png",
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
