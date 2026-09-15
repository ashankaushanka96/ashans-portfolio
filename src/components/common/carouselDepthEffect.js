export const applyDepthStyles = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const distance = Math.min(Math.abs(slideEl.progress || 0), 3);
    const scale = Math.max(1 - distance * 0.18, 0.55);
    const opacity = Math.max(1 - distance * 0.3, 0.35);
    slideEl.style.transform = `scale(${scale})`;
    slideEl.style.opacity = opacity;
  });
};

// Same look as the Projects wheel: the coverflow effect already transforms
// the slide itself (3D rotate/depth), so the extra scale has to land on an
// inner wrapper instead or it would clobber that transform.
export const applyWheelStyles = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const distance = Math.min(Math.abs(slideEl.progress || 0), 2);
    const scale = Math.max(1 - distance * 0.22, 0.62);
    const opacity = Math.max(1 - distance * 0.55, 0.35);
    const inner = slideEl.querySelector(".carousel-card-inner");
    if (inner) inner.style.transform = `scale(${scale})`;
    slideEl.style.opacity = opacity;
  });
};
