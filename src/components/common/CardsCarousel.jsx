import { useId } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { applyDepthStyles } from "./carouselDepthEffect";
import "swiper/css";

const DEFAULT_BREAKPOINTS = {
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const getMaxSlidesPerView = (breakpoints, baseSlidesPerView) => {
  const values = Object.values(breakpoints).map((bp) => bp.slidesPerView || baseSlidesPerView);
  return Math.ceil(Math.max(baseSlidesPerView, ...values));
};

const buildLoopItems = (items, minRequired) => {
  if (items.length === 0 || items.length >= minRequired) return items;
  const repeats = Math.ceil(minRequired / items.length);
  return Array.from({ length: repeats }, () => items).flat();
};

export const CardsCarousel = ({
  items,
  renderItem,
  autoplayDelay = 3000,
  spaceBetween = 16,
  breakpoints = DEFAULT_BREAKPOINTS,
  slideMaxWidth,
  pagination = false,
}) => {
  const maxSlidesPerView = getMaxSlidesPerView(breakpoints, 1);
  const loopItems = buildLoopItems(items, maxSlidesPerView * 2);
  const paginationClass = `cards-pagination-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <>
      <Swiper
        modules={pagination ? [Autoplay, Mousewheel, Pagination] : [Autoplay, Mousewheel]}
        grabCursor
        allowTouchMove
        simulateTouch
        centeredSlides
        loop
        watchSlidesProgress
        spaceBetween={spaceBetween}
        slidesPerView={1}
        breakpoints={breakpoints}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
        pagination={pagination ? {
          el: `.${paginationClass}`,
          clickable: true,
          bulletClass: "cards-bullet",
          bulletActiveClass: "cards-bullet-active",
        } : false}
        onInit={applyDepthStyles}
        onProgress={applyDepthStyles}
        onResize={applyDepthStyles}
        onSetTransition={(swiper, duration) => {
          swiper.slides.forEach((slideEl) => {
            slideEl.style.transitionDuration = `${duration}ms`;
          });
        }}
        className="cards-carousel"
      >
        {loopItems.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {pagination && (
        <Box className={`${paginationClass} flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5`} />
      )}

      <style>{`
        .cards-carousel {
          padding: 0.125rem 0;
        }
        .cards-carousel .swiper-slide {
          display: flex;
          justify-content: center;
          height: auto;
          transition-property: transform, opacity;
          transition-timing-function: ease;
        }
        .cards-carousel .swiper-slide > * {
          width: 100%;
          ${slideMaxWidth ? `max-width: ${slideMaxWidth};` : ""}
        }
        .cards-bullet {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
        }
        html.dark .cards-bullet {
          background: rgba(255, 255, 255, 0.25);
        }
        .cards-bullet-active {
          background: #00d4ff;
          width: 18px;
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
        }
      `}</style>
    </>
  );
};

CardsCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  autoplayDelay: PropTypes.number,
  spaceBetween: PropTypes.number,
  breakpoints: PropTypes.object,
  slideMaxWidth: PropTypes.string,
  pagination: PropTypes.bool,
};
