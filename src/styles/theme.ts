import { DefaultTheme, css } from 'styled-components';
import { media } from './media';

const blue = {
  brandColor1: '#F9FBFF',
  brandColor2: '#D0E4FF',
  brandColor3: '#A9CEFF',
  brandColor4: '#87BBFF',
  brandColor5: '#5FA4FF',
  brandColor6: '#1479FF',
  brandColor7: '#005EDA',
};

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const wh100 = css`
  width: 100%;
  height: 100%;
`;

const AbsoluteTL = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const CursorActive = css`
  pointer-events: auto;
  cursor: pointer;
`;

const DarkBlur = css`
  background: ${props => props.theme.bgColor}aa;
  backdrop-filter: blur(0.5125rem);
`;

const theme = {
  wh100,
  FlexCol,
  FlexRow,
  FlexCenter,
  AbsoluteTL,
  CursorActive,
  DarkBlur,
};

export const Theme: DefaultTheme = {
  media,
  ...theme,
  blue,
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: '#44c5ac',
  greenColor: '#33bd65',
  transparentBackground: '#f5f6f7a6',
  bgColorDeep: 'white',
  bgColor: '#efefef',
  bgColor2: '#1e1e1e',
  color: '#191A23',
  color2: '#E2E2E2',
  transparentColor: 'rgba(25, 26, 35, 0.65)',
  transitionOption: 'ease-in-out 0.15s',
  shadow: {
    box: '0px 0.2rem 0.5rem rgba(10, 10, 10, 0.1)',
    box1: '0rem .5625rem .75rem -0.4375rem rgba(0, 0, 0, .3);',
    drop: 'drop-shadow(rgba(0, 0, 0, 0.1) .125rem .25rem .125rem) drop-shadow(rgba(0, 0, 0, 0.3) 0 .3125rem .425rem)',
    drop1: 'drop-shadow(1px 1px 1px black)',
  },
};

export const DarkTheme: DefaultTheme = {
  media,
  ...theme,
  blue,
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: '#44c5ac',
  greenColor: '#33bd65',
  transparentBackground: '#21232E',
  bgColorDeep: '#2d2d2d',
  bgColor: '#1e1e1e',
  bgColor2: '#F8FAFB',
  color: '#E2E2E2',
  color2: '#191A23',
  transparentColor: '#f5f6f7a6',
  transitionOption: 'ease-in-out 0.15s',
  shadow: {
    box: '0px 0.2rem 0.5rem rgba(0, 0, 0, 0.9)',
    box1: '0 .5625rem .75rem -.4375rem rgba(0, 0, 0, 1);',
    drop: 'drop-shadow(rgba(0, 0, 0, 1) 0.125rem 0.15rem 0.125rem) drop-shadow(rgba(0, 0, 0, 1) .125rem 0.075rem 0.425rem)',
    drop1: 'drop-shadow(1px 2px 1px black)',
  },
};
