import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FaUsers } from "react-icons/fa";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      paddingTop: "6em",
      paddingBottom: "3em",
    },
    LeftPane: {
      textAlign: "center",
      paddingRight: "2em",
      paddingLeft: "2em",
    },
    RightPane: {
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
    RightWords: {
      textAlign: "left",
    },
    LastLine: {
      paddingTop: "1em",
    },
  }),
);

export interface IMobProg {}

const MobProg: React.FC<IMobProg> = (props: IMobProg) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.Main}>
      <Grid item xs={12} xl={2}>
        <Grid container className={classes.LeftPane}>
          <Grid item xl={12} className={classes.TitleIcon}>
            <FaUsers />
          </Grid>
          <Grid item xl={12} className={classes.TitleWords}>
            WOODY ZUILL'S MOB PROGRAMMING
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className={classes.RightPane}>
          <Grid item xs={12} xl={12}>
            <Grid container className={classes.RightWords}>
              <Grid item xl={12} className={classes.LastLine}>
                Woody Zuill is a leader in software development who writes and speaks about mob programming in the industry. I watched his address at
                DNC London and began to realize that there is merit to the idea of not just pair programming, but mob programming. I realized what a
                high-functioning team's success could look like.
              </Grid>
              <Grid item xl={12} className={classes.LastLine}>
                He has written books on the subject which you can see here. But the recording he did of a mob programming session is a good watch for
                anyone who wants to attempt to implement this cutting-edge process.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Grid container style={{ paddingTop: "1em" }}>
              <iframe
                title="mobprog"
                width="640"
                height="400"
                src="https://www.youtube.com/embed/5cvaCq1q9_E"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobProg;
