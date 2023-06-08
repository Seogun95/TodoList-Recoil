import { css, CSSProp } from 'styled-components';

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
};

const sizes: MediaQueryProps = {
  mobile: 576,
  tablet: 768,
  laptop: 1024,
  desktop: 2560,
};

type BackQuoteArgs = string[];

const createMediaQuery = (
  size: number
): ((literals: TemplateStringsArray, ...args: BackQuoteArgs) => CSSProp) => {
  return (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp => css`
    @media only screen and (max-width: ${size}px) {
      ${css(literals, ...args)}
    }
  `;
};

export const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key as keyof MediaQueryProps] = createMediaQuery(value);
  return acc;
}, {} as Record<keyof MediaQueryProps, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>);
