export interface IStyles {
  texts: ITextStyles;
  backgrounds: IBackgroundColors;
}

interface ITextStyles {
  light: string;
  dark: string;
  headerLight: string;
  headerDark: string;
}

interface IBackgroundColors {
  light: string;
  dark: string;
}
