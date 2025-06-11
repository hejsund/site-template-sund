
export const scrollToTop = () => {
  // Use requestAnimationFrame to ensure the DOM has updated
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  
  // Fallback for immediate scroll if smooth scroll doesn't work
  setTimeout(() => {
    if (window.scrollY > 100) {
      window.scrollTo(0, 0);
    }
  }, 100);
};

export const createScrollToTopLink = (to: string) => {
  return {
    pathname: to,
    state: { scrollToTop: true }
  };
};
