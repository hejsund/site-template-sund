
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

export const createScrollToTopLink = (to: string) => {
  return {
    pathname: to,
    state: { scrollToTop: true }
  };
};
