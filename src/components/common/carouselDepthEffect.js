export const applyDepthStyles = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const distance = Math.min(Math.abs(slideEl.progress || 0), 3);
    const scale = Math.max(1 - distance * 0.18, 0.55);
    const opacity = Math.max(1 - distance * 0.3, 0.35);
    slideEl.style.transform = `scale(${scale})`;
    slideEl.style.opacity = opacity;
  });
};
