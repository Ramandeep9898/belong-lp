export const isMobileScreen = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  };
  