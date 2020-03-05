import * as React from "react";
import { 
    AppBar,
    Toolbar,
    Box, 
    Hidden, 
    useScrollTrigger, 
    Slide,
    createStyles,
    makeStyles,
} from "@material-ui/core/";
 
import { WebHeader, MobileHeader } from "./Headers";

interface IProps {
    children: React.ReactElement
}

const useStyles = makeStyles((theme) => createStyles({
    appBar: {
        backgroundColor: "#ffbc21",
        color: "#FFFFFF",
    },
}));
const ScrollBehavior = (props: IProps) => {
    const slideTrigger = useScrollTrigger();
    return(
        <Slide
            appear={false}
            direction="down"
            in={!slideTrigger}
        >
            { props.children }
        </Slide>
    );
};

export const Header: React.FunctionComponent = () => {
    const classes = useStyles();
    return(
        <ScrollBehavior>
            <AppBar elevation={8} className={classes.appBar}>
                <Box>
                    <Toolbar>
                        <Hidden xsDown>
                            <WebHeader />
                        </Hidden>
                        <Hidden smUp>
                            <MobileHeader />
                        </Hidden>
                    </Toolbar>
                </Box>
            </AppBar>
        </ScrollBehavior>
    )

}

export default Header;