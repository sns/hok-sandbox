import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
    makeStyles,
    createStyles,
    Grid,
    IconButton,
    Drawer, 
    Toolbar,
    Link,
    List,
    ListItem,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";

import { routes, RouteDef } from "../../../Models/Routes";

interface State {
    isDrawerOpen: boolean;
}

const useStyles = makeStyles(theme => createStyles({
    links:{
        color: theme.palette.text.primary,
    },
    icons:{
        color: "FFFFFF",
    }
}));

export const MobileHeader: React.FunctionComponent = () => {
    const classes = useStyles();
    const [state, setState] = React.useState<State>({ isDrawerOpen : false });

    const onClickDrawerToggle = () => {
        setState({ ...setState, isDrawerOpen: !state.isDrawerOpen });
    };

    const renderListItem = (key: number, route: RouteDef) => {
        return (
            <ListItem key={key}>
                <Link className={classes.links} component={RouterLink} to={route.path}>
                    {route.label}
                </Link>
            </ListItem>
        );
    };

    return (
        <>
        <Grid container justify="flex-end" alignItems="center" >
                <Grid item>
                    <IconButton onClick={onClickDrawerToggle} >
                        {state.isDrawerOpen ? <Close /> : <Menu />}
                    </IconButton>
                </Grid>
            </Grid>
            <Drawer anchor="top" open={state.isDrawerOpen} onClick={onClickDrawerToggle}>
                <Toolbar />
                <List>
                    {routes.map((r, i) => renderListItem(i, r))}
                </List>
            </Drawer>
        </>
    );
};

export default MobileHeader;
