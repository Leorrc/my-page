const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",

  tablet: "768px",

  laptopS: "992px",
  laptop: "1024px",
  laptopL: "1440px",

  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 800px)`,
  mobile: `(min-width: ${size.mobileM}) and (max-width: 900px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 950px)`,

  tablet: `(min-width: ${size.tablet})`,

  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,

  desktop: `(min-width: ${size.desktop})`,
};
