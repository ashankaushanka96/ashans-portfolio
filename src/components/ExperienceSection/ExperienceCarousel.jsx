import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import "swiper/css";

const applyPeekStyles = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const progress = slideEl.progress || 0;
    const distance = Math.min(Math.abs(progress), 2);
    const scale = Math.max(1 - distance * 0.1, 0.82);
    const opacity = Math.max(1 - distance * 0.6, 0.3);
    // Anchor the scale to the edge that's actually peeking into view, so
    // shrinking a slide doesn't eat into its own visible sliver.
    slideEl.style.transformOrigin = progress > 0 ? "center bottom" : "center top";
    slideEl.style.transform = `scale(${scale})`;
    slideEl.style.opacity = opacity;
  });
};

const ExperienceCarousel = ({ items }) => {
  return (
    <Box className="relative h-full">
      <Box className="w-full h-full">
        <Swiper
          modules={[Mousewheel, Pagination]}
          direction="vertical"
          centeredSlides
          watchSlidesProgress
          slidesPerView={1.3}
          spaceBetween={10}
          speed={600}
          grabCursor
          touchReleaseOnEdges
          mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: false }}
          onInit={applyPeekStyles}
          onProgress={applyPeekStyles}
          onResize={applyPeekStyles}
          onSetTransition={(swiper, duration) => {
            swiper.slides.forEach((slideEl) => {
              slideEl.style.transitionDuration = `${duration}ms`;
            });
          }}
          pagination={{ el: ".exp-pagination", clickable: true, bulletClass: "exp-bullet", bulletActiveClass: "exp-bullet-active" }}
          style={{ height: "100%" }}
          className="experience-carousel"
        >
          {items.map((exp, index) => (
            <SwiperSlide key={index}>
              <Box className="experience-slide-scroll h-full overflow-y-auto pr-1 sm:pr-2">
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  duration={exp.duration}
                  location={exp.location}
                  responsibilities={exp.responsibilities}
                  technologies={exp.technologies}
                  achievements={exp.achievements}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box className="exp-pagination absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-2 flex items-center justify-center gap-1.5 sm:gap-2 z-10" />

      <style>{`
        .exp-bullet {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
        }
        .exp-bullet-active {
          background: #00d4ff;
          width: 18px;
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
        }
        .experience-slide-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .experience-slide-scroll::-webkit-scrollbar {
          display: none;
        }
        .experience-carousel .swiper-slide {
          transition-property: transform, opacity;
          transition-timing-function: ease;
        }
        .experience-carousel {
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </Box>
  );
};

ExperienceCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ExperienceCarousel;
