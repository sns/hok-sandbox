import {
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#76ff03",
        },
        secondary: {
            main: "#ff1744",
        },
        background: {
            default: "green",
        },
        text: {
            primary: "#000000",
        }
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
});

theme.typography.h1.fontWeight = 600;
theme.typography.h2.fontWeight = 500;

export default responsiveFontSizes(theme);