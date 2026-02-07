export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const scaleOnHover = {
  whileHover: { y: -5 },
};

export const floatingAnimation = {
  animate: { y: [0, -20, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export const themeToggleTransition = {
  initial: { y: 20, opacity: 0, rotate: 45 },
  animate: { y: 0, opacity: 1, rotate: 0 },
  exit: { y: -20, opacity: 0, rotate: -45 },
  transition: { duration: 0.2 },
};
