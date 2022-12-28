import React from "react";
import { Grid, Typography } from "@material-ui/core";

export interface IPoemContainer {
  title: string;
  author: string;
  lines: string[];
}

const PoemContainer: React.FC<IPoemContainer> = (props: IPoemContainer) => {
  return (
    <React.Fragment>
      <Grid item xs={12} style={{ fontStyle: "italic" }}>
        {props.title}
      </Grid>
      {props.lines.map((line, i) => {
        return (
          <Grid item xs={12} key={props.author + i}>
            {line}
          </Grid>
        );
      })}
      <Grid item xs={12}>
        By {props.author}
      </Grid>
      <Grid style={{paddingTop:'1em'}}item xs={12}><Typography style={{fontSize: "1em"}}>Brought to you by <span style={{textDecoration:"underline", cursor:"pointer"}} onClick={() => window.location.href = "https://poetrydb.org/index.html"}>poetry db</span></Typography></Grid>
    </React.Fragment>
  );
};

export default PoemContainer;
