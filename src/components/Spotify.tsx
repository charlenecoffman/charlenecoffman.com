import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FaSpotify } from "react-icons/fa";
import spotify from "../images/quote.png";

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
    quoteImage: {
      backgroundImage: `url(${spotify})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "14em",
    },
    RightWords: {
      textAlign: "left",
    },
    FirstPara: {
      paddingTop: "1em",
      paddingLeft: "1em",
    },
    LastLine: {
      paddingTop: "1em",
    },
  }),
);

export interface ISpotify {}

const Spotify: React.FC<ISpotify> = (props: ISpotify) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.Main}>
      <Grid item xs={12} xl={2}>
        <Grid container className={classes.LeftPane}>
          <Grid item xl={12} className={classes.TitleIcon}>
            <FaSpotify />
          </Grid>
          <Grid item xl={12} className={classes.TitleWords}>
            Spotify's Engineering Culture
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className={classes.RightPane}>
          <Grid item xs={12} xl={12}>
            <Grid container className={classes.RightWords}>
              <Grid item xl={12}>
                Spotify released two videos in 2014 that described thier agile engineering culture.
              </Grid>
              <Grid item xl={12}>
                <Grid container>
                  <Grid item xl={3} className={classes.quoteImage}></Grid>
                  <Grid item xl={9}>
                    <Grid container>
                      <Grid item xl={12} className={classes.FirstPara}>
                        Their videos talk about how they implemented agile while their development teams started to scale up and how they are
                        maintaining agile in large scale. Spotify has found what is important with Agile and they do a great job of describing it in
                        these videos.
                      </Grid>
                      <Grid item xl={12} className={classes.FirstPara}>
                        One of the most important things that I got from these videos is that agile development is not a destination, but a constant
                        state of work-in-progress. With regular retrospectives and team members who feel empowered to contribute to the process,
                        Spotify has identified what is important about agile.
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xl={12} className={classes.LastLine}>
                    I really can't do it justice, so just take some time, and watch both videos. Also follow this{" "}
                    <a href="https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/">link</a> to read their article that
                    goes with the videos.
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Grid container style={{ paddingTop: "1em" }}>
              <Grid item xl={12} style={{ textAlign: "left" }}>
                Part 1
              </Grid>
              <Grid item>
                <iframe
                  title="part1"
                  src="https://player.vimeo.com/video/85490944"
                  width="640"
                  height="400"
                  frameBorder="2"
                  allowFullScreen={true}
                ></iframe>
              </Grid>
              <Grid item xl={12} style={{ textAlign: "left", paddingTop: "1em" }}>
                Part 2
              </Grid>
              <Grid item>
                <iframe
                  title="part2"
                  src="https://player.vimeo.com/video/94950270"
                  width="640"
                  height="400"
                  frameBorder="2"
                  allowFullScreen={true}
                ></iframe>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Spotify;
