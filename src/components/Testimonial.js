import "../css/testimonial.css";
import { UilStar } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "Chiamaka Deborah",
      description:
        "Liz is one of those rare developers who can move seamlessly between front-end elegance and back-end logic. She connected our PHP backend with a React front end and optimized our database queries in MySQL, all while keeping the project ahead of schedule. ",
      image:
        "img/Chiamaka-whatsApp Image.jpeg",
    },
    {
      id: 2,
      name: "Olaitan Christy",
      description:
        "Working with Elizabeth was a turning point for our payment platform. She didn’t just code, she asked the right questions about users and backend efficiency.  She made it easy for me as a non-technical client. I'd recommend her.",
      image:
        "img/Christy-whatsApp Image.jpeg",
    },
    {
      id: 3,
      name: "Vincent Lawrence",
      description:
        "She took our outdated WordPress site and transformed it into a high-performing business tool. Instead of just installing plugins, she also customized PHP scripts to give us exactly what we needed. She's still maintaining the site, we trust her delivery.",
      image:
        "img/Vincent-whatsApp Image.jpeg",
    },
  ];

  return (
    <>
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container">
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            //  onSlideChange={() => console.log('slide change')}
            effect={"flip"}
            speed={800}
            loop
          >
            {/* TESTIMONIAl 1 */}
            {testimonialData &&
              testimonialData.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <div className="testimonial__content">
                      <div className="testimonial__data">
                        <div className="testimonial__header">
                          <img
                            src={data.image}
                            alt=""
                            className="testimonial__img"
                          />

                          <div>
                            <h3 className="testimonial__name">{data.name}</h3>
                            <span className="testimonial__client">Client</span>
                          </div>
                        </div>

                        <div>
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                        </div>
                      </div>
                      <p className="testimonial__description">
                        {data.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
