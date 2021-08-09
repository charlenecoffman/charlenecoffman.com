import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { BiCodeAlt } from "react-icons/bi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      color: theme.palette.primary.main,
      fontSize: 14,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      paddingTop: "6em",
    },
    TitleSection: {
      textAlign: "center",
    },
    TitleWords: {
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
      fontSize: 26,
    },
    TitleIcon: {
      fontWeight: "bold",
      fontSize: 40,
    },
  }),
);

export interface ICodeExample {
  name: string;
  description: string;
  iframeCodeUrl: string;
}

const CodeExample: React.FC<ICodeExample> = (props: ICodeExample) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.Main}>
      <Grid item xs={12} xl={2}>
        <Grid container className={classes.TitleSection}>
          <Grid item xl={12} className={classes.TitleIcon}>
            <BiCodeAlt />
          </Grid>
          <Grid item xl={12} className={classes.TitleWords}>
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
            <iframe title={props.name} width="100%" height="475" src={props.iframeCodeUrl} frameBorder="0"></iframe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CodeExample;
