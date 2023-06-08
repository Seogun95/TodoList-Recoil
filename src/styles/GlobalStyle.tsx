import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html, body {
overflow: overlay;
width: 100%;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

code {
    color: ${props => props.theme.color};
    border: .0625rem solid #e96900;
    padding: .0625rem .3125rem;
    margin: 0 .3125rem 0 .1875rem;
    border-radius: .3125rem;
    font-family: menlo !important;
    word-break: break-all
}

a {
  text-decoration: none;
  color: inherit;
}

h1 { font-size: 2.5rem }
h2 { font-size: 2.1rem }
h3 { font-size: 1.5rem }
h4 { font-size: 1.2rem;}

h1,h2,h3,h4,h5,h6{
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  font-weight: bold;
}

mark {
  color: black;
  font-weight: bold;
  padding: .2rem .2rem;
  border-radius: .3125rem;
  margin: 0 .3125rem;
}

/* Prevent Drag */
img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

textarea {
  border: none;
  padding: .5rem;
  resize: none;
  white-space: pre-wrap;
}

* {
  box-sizing: border-box;
  text-decoration-line: none;
  color: inherit;
}

/* HashRoute smooth motion */
* {
  scroll-behavior: smooth;
}

*:focus {
    outline: none !important;
  }

code {
  font-family: 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  border: 0 solid transparent;
  border-radius: 10px;

}
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* Reset */
html, body, div, span, applet, object, iframe,
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  font-size: 16px;
}

`;
