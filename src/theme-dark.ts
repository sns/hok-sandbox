import {
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#32cb00',
        },
        secondary: {
            main: '#c4001d',
        },
        // background: {
        //     default: 'red',
        // },
        text: {
            primary: "#000000",
        },
        type: 'dark',
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
});

theme.typography.h1.fontWeight = 600;
theme.typography.h2.fontWeight = 500;

export default responsiveFontSizes(theme);