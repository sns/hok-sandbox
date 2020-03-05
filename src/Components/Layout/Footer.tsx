import * as React from "react";
import {
    Grid,
    // makeStyles,
    // createStyles,
    Typography,
} from '@material-ui/core';

// const useStyles = makeStyles((theme) => createStyles({
//     root: {
//         background: theme.palette.primary.main,
//     },
// }));

export const Footer = () => {
    // const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            alignContent='center'
            direction='column'
            // className={classes.root}
        >
            <Grid item>
                <Typography
                    color='secondary'
                    variant='body1'
                >
                    copy right
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;