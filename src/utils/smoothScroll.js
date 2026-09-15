export const smoothScrollTo = (top) => {
  window.scrollTo({ top, behavior: "smooth" });
};

export const smoothScrollToElement = (element, offset = 0) => {
  if (!element) return;
  smoothScrollTo(element.offsetTop - offset);
};
