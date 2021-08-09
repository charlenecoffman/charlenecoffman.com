import React from "react";
import { Grid, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import art from "../images/art.jpg";
import kids from "../images/kids.jpg";
import wedding from "../images/wedding.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    OuterContainer: {
      paddingTop: "2.25em",
      paddingBottom: "3.25em",
      color: theme.palette.primary.main,
    },
    myTitle: {
      textAlign: "center",
      fontSize: 22,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    SmallerTitles: {
      textAlign: "left",
      fontSize: 18,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    SmallerTitleContainer: {
      paddingTop: "1.5em",
      textAlign: "center",
    },
    subTitle: {
      textAlign: "center",
      fontSize: 14,
      fontweight: 600,
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    subBelowTitle: {
      paddingTop: "1.5em",
      textAlign: "left",
      fontSize: 14,
      fontweight: 600,
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    allLowerItemsContainer: {
      color: theme.palette.primary.main,
      paddingTop: "3em",
      paddingLeft: "1em",
    },
    artImage: {
      backgroundImage: `url(${art})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "14em",
    },
    kidsImage: {
      backgroundImage: `url(${kids})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "18em",
    },
    weddingImage: {
      backgroundImage: `url(${wedding})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "14em",
    },
  }),
);

export interface IOtherThingsILove {}

const OtherThingsILove: React.FC<IOtherThingsILove> = (props: IOtherThingsILove) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.OuterContainer}>
      <Grid item xs={12} key="title" className={classes.myTitle}>
        Other Things I Love
      </Grid>
      <Grid item xs={12} key="subtitle">
        <Typography className={classes.subTitle}>Besides being a software engineer, I am a mother, artist, and chef</Typography>
      </Grid>
      <Grid item xs={12} key="collection" className={classes.allLowerItemsContainer}>
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
          <Grid item sm={4} md={3} lg={2} xl={2} key="art">
            <Grid container>
              <Grid item xs={12} key="art_image" className={classes.artImage}></Grid>
              <Grid item xs={9} key="art_title" className={classes.SmallerTitleContainer}>
                <Typography className={classes.SmallerTitles}>Art</Typography>
              </Grid>
              <Grid item xs={12} key="art_subtitle">
                <Typography className={classes.subBelowTitle}>I paint, draw, write poetry and sculpt...</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} md={3} lg={2} xl={2} key="kids">
            <Grid container>
              <Grid item xs={12} key="kids_image" className={classes.kidsImage}></Grid>
              <Grid item xs={9} key="kids_title" className={classes.SmallerTitleContainer}>
                <Typography className={classes.SmallerTitles}>My Kids</Typography>
              </Grid>
              <Grid item xs={12} key="kids_subtitle">
                <Typography className={classes.subBelowTitle}>
                  They are ridiculous and fun, and ridiculously funny. My son helped with this site...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} md={3} lg={2} xl={2} key="husband">
            <Grid container>
              <Grid item xs={12} key="husband_image" className={classes.weddingImage}></Grid>
              <Grid item xs={9} key="husband_title" className={classes.SmallerTitleContainer}>
                <Typography className={classes.SmallerTitles}>The Husband</Typography>
              </Grid>
              <Grid item xs={12} key="husband_subtitle">
                <Typography className={classes.subBelowTitle}>He is the best thing ever...</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OtherThingsILove;
