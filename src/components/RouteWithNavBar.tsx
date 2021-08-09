import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { Route } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavBarBackground: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: "3em",
      },
      [theme.breakpoints.up("md")]: {
        height: "6em",
      },
      backgroundColor: theme.palette.primary.dark,
    },
  }),
);

export interface IRouteWithNavBar {
  path: string;
  children?: JSX.Element | JSX.Element[];
}

const RouteWithNavBar: React.FC<IRouteWithNavBar> = (props: IRouteWithNavBar) => {
  const classes = useStyles();

  return (
    <Route path={props.path}>
      <Grid container>
        <Grid item xs={12} className={classes.NavBarBackground}></Grid>
        {props.children}
      </Grid>
    </Route>
  );
};

export default RouteWithNavBar;
