import React from "react";
import { Grid } from "@mui/material";
import { BiCodeAlt } from "react-icons/bi";
import Loading from "./Loading";

export interface ICodeExample {
  name: string;
  description: string;
  iframeCodeUrl: string;
}

const CodeExample: React.FC<ICodeExample> = (props: ICodeExample) => {
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className="Main">
      <Grid item xs={12} xl={2}>
        <Grid container className="TitleSection">
          <Grid item xl={12} className="TitleIcon">
            <BiCodeAlt />
          </Grid>
          <Grid item xl={12} className="TitleWords">
            {props.name}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container>
          <Grid item xs={12} xl={12}>
            {props.description}
          </Grid>
          <Grid item xs={12} xl={12}>
            <Loading fixedLoadTime={1}>
              <iframe title={props.name} width="100%" height="475" src={props.iframeCodeUrl} frameBorder="0"></iframe>
            </Loading>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CodeExample;
