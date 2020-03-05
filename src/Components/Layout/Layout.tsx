import * as React from "react";
import { Switch, Route } from "react-router-dom";  
import { Box } from "@material-ui/core";
import {createStyles, makeStyles } from "@material-ui/styles";

import routes from "../../Models/Routes";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles(theme => createStyles({
    header: {
        height: "60px",
    },
    body: {
        minHeight: "100vh",
        marginTop: "60px",
    },
    footer: {
        marginTop: "10px",
    },
}));
export const Layout: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Box className={classes.body} >
                <Switch>
                    {routes.map((r, key) => (
                        <Route key={key} path={r.path} exact={r.exact} children={r.component} />
                    ))}
                </Switch>
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default Layout;
