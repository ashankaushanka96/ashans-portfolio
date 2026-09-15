// CSS scroll-snap-type: mandatory (see index.css) blocks window.scrollTo /
// scrollIntoView smooth animations that cross a snap point — the browser
// fights the in-progress scroll and it never moves. Temporarily disabling
// snap for the duration of a programmatic scroll avoids that.
const withSnapDisabled = (performScroll) => {
  const root = document.documentElement;
  const previousSnapType = root.style.scrollSnapType;
  root.style.scrollSnapType = "none";

  let settled = false;
  const restoreSnap = () => {
    if (settled) return;
    settled = true;
    root.style.scrollSnapType = previousSnapType;
    window.removeEventListener("scrollend", restoreSnap);
  };

  window.addEventListener("scrollend", restoreSnap, { once: true });
  setTimeout(restoreSnap, 1000);

  performScroll();
};

export const smoothScrollTo = (top) => {
  withSnapDisabled(() => window.scrollTo({ top, behavior: "smooth" }));
};

export const smoothScrollToElement = (element, offset = 0) => {
  if (!element) return;
  smoothScrollTo(element.offsetTop - offset);
};
