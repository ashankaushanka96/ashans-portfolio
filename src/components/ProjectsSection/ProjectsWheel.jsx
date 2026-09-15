import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";
import { Box, Typography, Chip, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/effect-coverflow";

const applyWheelStyles = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const distance = Math.min(Math.abs(slideEl.progress || 0), 2);
    const scale = Math.max(1 - distance * 0.22, 0.62);
    const opacity = Math.max(1 - distance * 0.55, 0.35);
    const inner = slideEl.querySelector(".wheel-card");
    if (inner) inner.style.transform = `scale(${scale})`;
    slideEl.style.opacity = opacity;
  });
};

export const ProjectsWheel = ({ projects, onSelectProject }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];

  return (
    <Box className="relative w-full">
      <Box className="relative flex items-center justify-center">
        <IconButton
          onClick={() => swiperRef.current?.slidePrev()}
          className="!absolute left-0 z-20 !text-white/70 hover:!text-accent !bg-white/5 hover:!bg-white/10 backdrop-blur-sm"
          sx={{ display: { xs: "none", sm: "flex" } }}
          aria-label="Rotate wheel left"
        >
          <ChevronLeft fontSize="medium" />
        </IconButton>

        <Box className="w-full" sx={{ perspective: "1200px" }}>
          <Swiper
            modules={[EffectCoverflow, Mousewheel, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            watchSlidesProgress
            loop={projects.length > 3}
            slidesPerView={1.4}
            spaceBetween={20}
            speed={600}
            slideToClickedSlide
            mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: false }}
            pagination={{
              el: ".proj-pagination",
              clickable: true,
              bulletClass: "proj-bullet",
              bulletActiveClass: "proj-bullet-active",
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 180,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onClick={(swiper) => {
              if (swiper.clickedIndex === swiper.activeIndex) {
                onSelectProject(projects[swiper.realIndex]);
              }
            }}
            onInit={applyWheelStyles}
            onProgress={applyWheelStyles}
            onResize={applyWheelStyles}
            onSetTransition={(swiper, duration) => {
              swiper.slides.forEach((slideEl) => {
                slideEl.style.transitionDuration = `${duration}ms`;
                const inner = slideEl.querySelector(".wheel-card");
                if (inner) inner.style.transitionDuration = `${duration}ms`;
              });
            }}
            className="projects-wheel"
          >
            {projects.map((proj, index) => (
              <SwiperSlide key={index}>
                <Box className="wheel-card rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 shadow-xl cursor-pointer">
                  <Box className="relative w-full aspect-[16/10] overflow-hidden bg-white/10">
                    <Box className="absolute inset-3 flex items-center justify-center">
                      <img
                        src={proj.imgUrl}
                        alt={proj.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg select-none"
                        draggable={false}
                      />
                    </Box>
                  </Box>
                  <Box className="px-3 sm:px-4 py-2 sm:py-3 text-center space-y-1.5">
                    <Typography
                      variant="body1"
                      className="font-bold text-white truncate text-base sm:text-lg"
                      sx={{ fontFamily: "CentraNo2, sans-serif" }}
                    >
                      {proj.title}
                    </Typography>
                    <Box className="flex items-center justify-center gap-1.5 flex-wrap">
                      {proj.category && (
                        <Chip
                          label={proj.category}
                          size="small"
                          className="text-xs font-medium bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-300 border border-purple-500/30"
                          sx={{ fontFamily: "CentraNo2, sans-serif" }}
                        />
                      )}
                      {proj.status && (
                        <Chip
                          label={proj.status}
                          size="small"
                          className={`text-xs font-medium ${
                            proj.status === "Completed"
                              ? "bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-300 border border-green-500/30"
                              : proj.status === "In Progress"
                              ? "bg-gradient-to-r from-yellow-500/20 to-orange-600/20 text-yellow-300 border border-yellow-500/30"
                              : "bg-gradient-to-r from-blue-500/20 to-cyan-600/20 text-blue-300 border border-blue-500/30"
                          }`}
                          sx={{ fontFamily: "CentraNo2, sans-serif" }}
                        />
                      )}
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <IconButton
          onClick={() => swiperRef.current?.slideNext()}
          className="!absolute right-0 z-20 !text-white/70 hover:!text-accent !bg-white/5 hover:!bg-white/10 backdrop-blur-sm"
          sx={{ display: { xs: "none", sm: "flex" } }}
          aria-label="Rotate wheel right"
        >
          <ChevronRight fontSize="medium" />
        </IconButton>
      </Box>

      <Box className="proj-pagination flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5" />

      {/* Active Project Info Panel */}
      <Box className="max-w-2xl mx-auto mt-5 sm:mt-6 text-center px-4">
        <Typography
          variant="h6"
          className="font-bold text-white text-base sm:text-lg md:text-xl"
          sx={{ fontFamily: "CentraNo2, sans-serif", mb: 1.5 }}
        >
          {activeProject.title}
        </Typography>
        <Typography
          variant="body2"
          className="text-sm sm:text-base text-gray-300 leading-snug"
          sx={{
            fontFamily: "CentraNo2, sans-serif",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 1.5,
          }}
        >
          {activeProject.short_description}
        </Typography>
        <Box
          component="button"
          onClick={() => onSelectProject(activeProject)}
          className="px-5 sm:px-6 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          sx={{ fontFamily: "CentraNo2, sans-serif" }}
        >
          View Details
        </Box>
      </Box>

      <style>{`
        .projects-wheel {
          padding: 1.25rem 0;
          overflow: visible;
        }
        .projects-wheel .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto;
          transition-property: transform, opacity;
          transition-timing-function: ease;
        }
        .projects-wheel .swiper-slide > * {
          width: 100%;
        }
        .wheel-card {
          transition-property: transform;
          transition-timing-function: ease;
        }
        .proj-bullet {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
        }
        .proj-bullet-active {
          background: #00d4ff;
          width: 18px;
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
        }
      `}</style>
    </Box>
  );
};

ProjectsWheel.propTypes = {
  projects: PropTypes.array.isRequired,
  onSelectProject: PropTypes.func.isRequired,
};
