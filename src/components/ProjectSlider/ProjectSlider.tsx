import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectSlider.css";
import GlassCard from "../GlassCard/GlassCard";
import { projects } from "../../data/projects";

export default function ProjectSlider() {
  return (
    <section className="slider-section">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        initialSlide={0}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <GlassCard
              title={project.title}
              description={project.description}
              icons={project.icons}
              color={project.color}
              href={project.href}
              image={project.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
