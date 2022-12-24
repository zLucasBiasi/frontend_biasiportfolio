export interface ThemeType {
    title: string;
    colors: {
        background: string;
        blueCian: string;
        blue: string;
        white: string;
        black: string;
        gray: string;
        grayNav: string;
        backgroundLinear: string;
        border?: string;
        grayInput?: string;
    };
    fonts: {
        listNav: string;
        titleExtraLarger: string;
        titleLarger: string;
        titleMedium: string;
        titleSmall: string;
        titleSmallX2: string;
        paragraphLarger: string;
        paragraphMedium: string;
        paragraphSmall: string;
        paragraphSmallX2: string;
    };
}
