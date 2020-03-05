import {
    createMuiTheme,
    responsiveFontSizes,
} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#b0ff57",
        },
        secondary: {
            main: "ff616f",
        },
        text: {
            primary: "#000000",
        },
        type: "light",
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
});


export default responsiveFontSizes(theme);