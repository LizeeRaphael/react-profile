import "../css/testimonial.css";
import { UilStar } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "James Michael",
      description:
        "Liz's proficiency in React was evident from the start. she created a seamless and intuitive user experience that has greatly improved our platform. His attention to detail and commitment to quality sets him apart. We look forward to.... ",
      image:
        "img/bl.jpg",
    },
    {
      id: 2,
      name: "Joy Ayo",
      description:
        "Working with her was a pleasure. She was able to create a responsive and user-friendly website that met our needs. She went above and beyond to meet our specific requirements, and her attention to detail and communication skill won me over",
      image:
        "img/jon.jpg",
    },
    {
      id: 3,
      name: "Judith Solomon",
      description:
        "Elizabeth handled our project. I didn't have to talk much, i was impressed with how she listens and delivers her work. I recommend her.",
      image:
        "img/ju.jpg",
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
