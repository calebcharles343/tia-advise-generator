import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

/* 
01 Typography System


Font sizes (px)
FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 /

- Font weight:
Default: 400, 
Medium:500, 
Semi-bold:600, 
Bold: 700,
Large: 900.

- Line height:
Default: 1
Small: 1.05
medium: 1.2
large: 1.8
Paragraph default: 1.6

 letter-spacing
 -0.5px
 - 0.75px;

02 COLORS
-Primary: #background: #202733, #53ffaa 

-Secondary: #BBC0FF, #FFFFFF;
,
-shades: 
#45260a

-accents:
-greys: #555; #333;

03 SHADOWS
box-shadow:
 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

04 BORDER RADIOUS 
default: 9px
medium: 12px

05 WHITESPACE

SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128



*/

/* /////////////////////// */
/* GLOBAL RESET */
/* /////////////////////// */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625*100 = 62.5
  percentage of user's browser font-size settings */
  font-size: 62.5%;
  overflow-x: hidden;

  /*does not work on safari and micro edge  */
  /* scroll-behavior: smooth; */
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  background-color: #202733;
  height: 100vh;

  /* Only works if ther is nothing 
  absolutely positioned in relations to body  */
  overflow-x: hidden;
  overflow-y: scroll;
}
a {
  text-decoration: none;
  color: inherit;
}

ul,
ol,
legend {
  list-style: none;
}

`;
export default GlobalStyle;
