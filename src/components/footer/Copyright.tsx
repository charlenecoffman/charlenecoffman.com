import React from "react";
import { Grid } from "@mui/material";

export interface ICopyright {}

const Copyright: React.FC<ICopyright> = (props: ICopyright) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        Copyright © 2017 - All Rights Reserved - Charlene Coffman
      </Grid>
    </Grid>
  );
};

export default Copyright;
