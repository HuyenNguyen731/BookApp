import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "#007260",
    secondary: "#39B68D",

    black: "#222222",
    white: "#ffffff",
    grey: "#CCCCCC",

    gray: "#676767",
    lightGray: "#f9f9f9",
    grayBorder: "#A8A8A9",
    grayF3: "#F3F3F3",
    green: "#2AA952",
    red: "#db3022",
    orange: "#ffba49",
};

const SIZES = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 44,
    height,
    width
};

const SHADOWS = {
    sm: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    md: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, SIZES, SHADOWS };
