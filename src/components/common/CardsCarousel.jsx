import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
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
}) => {
  const maxSlidesPerView = getMaxSlidesPerView(breakpoints, 1);
  const loopItems = buildLoopItems(items, maxSlidesPerView * 2);

  return (
    <>
      <Swiper
        modules={[Autoplay, Mousewheel]}
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
};
