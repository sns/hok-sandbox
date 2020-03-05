import * as React from "react";
import posed from "react-pose";
import { Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { routes, RouteDef } from "../../../Models/Routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "inherit"
    }
  })
);

const LeftFade = posed.div({
  load: {
    x: "0px",
    opacity: 1,
    transition: {
      duration: 500
    }
  },
  init: {
    x: "-100px",
    opacity: 0,
    transition: {
      duration: 500
    }
  }
});

export const WebHeader: React.FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderItem = (key: number, route: RouteDef) => {
    return (
      <Grid item key={key}>
        <LeftFade pose={isLoaded ? "load" : "init"}>
          <Link component={RouterLink} to={route.path} className={classes.root}>
            {route.label}
          </Link>
        </LeftFade>
      </Grid>
    );
  };
  return (
    <Grid container justify="center" spacing={10}>
      {routes.map((r, key) => renderItem(key, r))}
    </Grid>
  );
};

export default WebHeader;
