import React from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";

export interface IComponentNavBarWrapper {
  children?: JSX.Element | JSX.Element[];
}

const ComponentNavBarWrapper: React.FC<IComponentNavBarWrapper> = (props: IComponentNavBarWrapper) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} className="NavBarBackground">test</Grid>
      {props.children}
    </Grid>
  );
};

export default ComponentNavBarWrapper;
