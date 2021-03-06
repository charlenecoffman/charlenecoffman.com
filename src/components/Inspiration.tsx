import React, { useCallback, useState } from "react";
import { createStyles, Grid, makeStyles, Theme, Typography, Slide, useMediaQuery, useTheme } from "@material-ui/core";
import { FaSpotify, FaUsers, FaBook } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    myTitle: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontSize: 22,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    SmallerTitles: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontSize: 18,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    SmallerTitleContainer: {
      paddingTop: "1.5em",
    },
    subTitle: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontSize: 14,
      fontweight: 600,
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    OuterContainer: { paddingTop: "2.25em", paddingBottom: "2.25em" },
    OuterOfEachSection: {
      textAlign: "center",
    },
    allLowerItemsContainer: {
      color: theme.palette.primary.main,
      paddingTop: "3em",
    },
    EachBox: {
      "&:hover": {
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        transition: "0.3s",
      },
      border: `1px solid transparent`,
    },
    IconContainer: {
      fontSize: "4em",
    },
    ViewMoreButton: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 14,
      backgroundColor: theme.palette.secondary.dark,
      color: "#FFFAFA",
    },
    ViewMoreContainer: {
      overflow: "hidden",
      paddingTop: "1em",
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      "&:hover": { cursor: "pointer" },
    },
  }),
);

export interface IInspiration {}

const Inspiration: React.FC<IInspiration> = (props: IInspiration) => {
  const classes = useStyles();
  const history = useHistory();
  const routeOnClick = useCallback((path: string) => history.push("/" + path), [history]);

  const [showSpotifyViewMore, setShowSpotifyViewMore] = useState(false);
  const [showMobProgViewMore, setShowMobProgViewMore] = useState(false);
  const [showLeadersViewMore, setShowLeadersViewMore] = useState(false);
  const theme = useTheme();
  const med = useMediaQuery(theme.breakpoints.only("md"));
  const small = useMediaQuery(theme.breakpoints.only("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const eachsection = xs ? 12 : med || small ? 3 : 2;

  const alwaysShowViewMores = xs || med || small ? true : false;

  return (
    <Grid container className={classes.OuterContainer}>
      <Grid item xs={12} key="title">
        <Typography className={classes.myTitle}>Inspiration</Typography>
      </Grid>
      <Grid item xs={12} key="subtitle">
        <Typography className={classes.subTitle}>A few things that inspire me as a software engineer</Typography>
      </Grid>
      <Grid item xs={12} key="collection" className={classes.allLowerItemsContainer}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid
            item
            xs={eachsection}
            key="spotify"
            className={classes.OuterOfEachSection}
            onMouseEnter={() => setShowSpotifyViewMore(true)}
            onMouseLeave={() => setShowSpotifyViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className={classes.EachBox}>
                  <Grid item xs={12} key="spotify_icon" className={classes.IconContainer}>
                    <FaSpotify />
                  </Grid>
                  <Grid item xs={9} key="spotify_title" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.SmallerTitles}>Spotify's Engineering Culture</Typography>
                  </Grid>
                  <Grid item xs={9} key="spotify_subtitle" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.subTitle}>Spotify's focus on agile, autonomous teams...</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="spotify_readmore" className={classes.ViewMoreContainer} onClick={() => routeOnClick("spotify")}>
                <Slide direction="up" in={showSpotifyViewMore || alwaysShowViewMores} timeout={400}>
                  <Typography className={classes.ViewMoreButton}>View More</Typography>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={eachsection}
            key="mobprog"
            className={classes.OuterOfEachSection}
            onMouseEnter={() => setShowMobProgViewMore(true)}
            onMouseLeave={() => setShowMobProgViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className={classes.EachBox}>
                  <Grid item xs={12} key="mobprog_icon" className={classes.IconContainer}>
                    <FaUsers />
                  </Grid>
                  <Grid item xs={9} key="mobprog_title" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.SmallerTitles}>Woody Zuill's Mob Programming</Typography>
                  </Grid>
                  <Grid item xs={9} key="mobprog_subtitle" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.subTitle}>Woddy Zuill's address on mob programming...</Typography>
                  </Grid>
                  <Grid item xs={12} key="mobprog_readmore"></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="mobprog_readmore" className={classes.ViewMoreContainer} onClick={() => routeOnClick("mob")}>
                <Slide direction="up" in={showMobProgViewMore || alwaysShowViewMores} timeout={400}>
                  <Typography className={classes.ViewMoreButton}>View More</Typography>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={eachsection}
            key="leaders"
            className={classes.OuterOfEachSection}
            onMouseEnter={() => setShowLeadersViewMore(true)}
            onMouseLeave={() => setShowLeadersViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className={classes.EachBox}>
                  <Grid item xs={12} key="leaders_icon" className={classes.IconContainer}>
                    <FaBook />
                  </Grid>
                  <Grid item xs={9} key="leaders_title" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.SmallerTitles}>Following the Leaders</Typography>
                  </Grid>
                  <Grid item xs={9} key="leaders_subtitle" className={classes.SmallerTitleContainer}>
                    <Typography className={classes.subTitle}>Learning from the leaders of the software engineering industry...</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="leaders_readmore" className={classes.ViewMoreContainer} onClick={() => routeOnClick("leaders")}>
                <Slide direction="up" in={showLeadersViewMore || alwaysShowViewMores} timeout={400}>
                  <Typography className={classes.ViewMoreButton}>View More</Typography>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Inspiration;
