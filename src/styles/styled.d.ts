// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    wh100;
    FlexCol;
    FlexRow;
    FlexCenter;
    AbsoluteTL;
    CursorActive;
    DarkBlur;
    blue: {
      brandColor1: string;
      brandColor2: string;
      brandColor3: string;
      brandColor4: string;
      brandColor5: string;
      brandColor6: string;
      brandColor7: string;
    };
    pointColor: string;
    subColor: string;
    accentColor: string;
    greenColor: string;
    transparentBackground: string;
    bgColorDeep: string;
    bgColor: string;
    bgColor2: string;
    color: string;
    color2: string;
    transparentColor: string;
    transitionOption: string;
    pointColorLight: string;
    shadow: {
      box: string;
      box1: string;
      drop: string;
      drop1: string;
    };
    media: {
      mobile: (literals: TemplateStringsArray, ...args: any[]) => CSSProp;
      tablet: (literals: TemplateStringsArray, ...args: any[]) => CSSProp;
      laptop: (literals: TemplateStringsArray, ...args: any[]) => CSSProp;
      desktop: (literals: TemplateStringsArray, ...args: any[]) => CSSProp;
    };
  }
}
