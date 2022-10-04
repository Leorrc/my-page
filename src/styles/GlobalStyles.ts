import { createGlobalStyle } from 'styled-components'
import pixelToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

ul,li {
  list-style: none;
}

body {
  font: 400 1rem var(--body-font);
  color: var(--text-color);
  background: var(--body-color);
}


:root {
  --header-height: 4.5rem;
  
  /* colors */
  --hue: 246;

  /* HSL color mode */
  --base-color: hsl(var(--hue) 36% 57%);
  --base-color-second: hsl(var(--hue) 100% 96% 1);
  --base-color-alt: hsl(var(--hue) 57% 53%);
  --title-color: hsl(var(--hue) 41% 10%);
  --text-color: hsl(0 0% 46%);
  --text-color-light: hsl(0 0% 98%);
  --body-color: hsl(0 0% 98%);
  
  /* paleta de cores roxo */
  --gengar: #5D5984;
  --amarelo: #dfa500;

  --header-color: #272638;

  --roxo-1: #545078;
  --roxo-2: #9C95DE;
  --roxo-3: #AEA6F7;

  --color: #6610f2;
  --color2: #6f42c1;

  
  /* fonts */
  --title-font-size: 1.875rem;
  --subtitle-font-size: 1rem;
  
  --title-font: 'Poppins' , sans-serif;
  --body-font: 'DM Sans' , sans-serif;
  --font-origin: "Montserrat" 700;



  /* Fonts */
--font-header-1: 700 ${pixelToRem(34)}/${pixelToRem(46)} "Poppins", sans-serif;
--font-header-2: 700 ${pixelToRem(48)}/${pixelToRem(48)} "Poppins", sans-serif;
--font-header-3: 700 ${pixelToRem(60)}/${pixelToRem(60)} "Poppins", sans-serif;

--font-sub-header-1: 700 ${pixelToRem(30)}/${pixelToRem(36)} "Poppins", sans-serif;
--font-sub-header-2: 700 ${pixelToRem(36)}/${pixelToRem(40)} "Poppins", sans-serif;
--font-sub-header-3: 700 ${pixelToRem(48)}/${pixelToRem(48)} "Poppins", sans-serif;


--font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Poppins", sans-serif;
--font-heading-1: 700 ${pixelToRem(34)}/${pixelToRem(46)} "Poppins", sans-serif;
--font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} "Poppins", sans-serif;
--font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} "Poppins", sans-serif;

--font-mobile-heading-1: 800 ${pixelToRem(36)}/${pixelToRem(50)} "Poppins"sans-serif;
--font-mobile-text-1: 500 ${pixelToRem(14)}/${pixelToRem(24)} "Poppins", sans-serif;

--text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Poppins", sans-serif;
--text-3: 500 ${pixelToRem(18)}/${pixelToRem(28)} "Poppins", sans-serif;
--text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Poppins", sans-serif;
--text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Poppins", sans-serif;
--text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Poppins", sans-serif;
--text-01: 400 ${pixelToRem(12)}/${pixelToRem(20)} "Poppins", sans-serif;
}`;