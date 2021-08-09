import React from "react";
import { createStyles, Grid, makeStyles, Theme, Button, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import lilypadsandflowers from "../images/lilypadsandflowers.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largeImageBackground: {
      backgroundImage: `url(${lilypadsandflowers})`,
      backgroundSize: "cover",
      [theme.breakpoints.only("xs")]: {
        height: "30em",
      },
      [theme.breakpoints.only("sm")]: {
        height: "27em",
      },
      [theme.breakpoints.only("md")]: {
        height: "36em",
      },
      [theme.breakpoints.up("lg")]: {
        height: "43em",
      },
      backgroundRepeat: "no-repeat",
    },
    largeImageFilm: {
      backgroundColor: `rgba(0, 0, 0, 0.5)`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      [theme.breakpoints.only("xs")]: {
        height: "30em",
      },
      [theme.breakpoints.only("sm")]: {
        height: "27em",
      },
      [theme.breakpoints.only("md")]: {
        height: "36em",
      },
      [theme.breakpoints.up("lg")]: {
        height: "43em",
      },
    },
    outterContainerForWords: {
      position: "static",
      minHeight: "28em",
    },
    myName: {
      textAlign: "center",
      color: theme.palette.primary.contrastText,
      fontFamily: "Uchen-Regular",
      fontSize: 32,
      textTransform: "uppercase",
    },
    myTitle: {
      textAlign: "center",
      color: theme.palette.primary.contrastText,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 18,
    },
    ContactButtonOutter: {
      paddingTop: "2em",
    },
    ContactButtonInner: {
      color: theme.palette.primary.contrastText,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 18,
    },
  }),
);

export interface ISplashSection {}

const SplashSection: React.FC<ISplashSection> = (props: ISplashSection) => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const justifycontent = small ? "center" : "flex-end";
  return (
    <Grid container>
      <Grid item xs={12} className={classes.largeImageBackground}>
        <Grid container className={classes.largeImageFilm}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent={justifycontent}
              alignItems="center"
              spacing={2}
              className={classes.outterContainerForWords}
            >
              {" "}
              <Grid item xs={12} key="myname" className={classes.myName}>
                Charlene Coffman
              </Grid>
              <Grid item xs={12} key="mytitle" className={classes.myTitle}>
                a software engineer
              </Grid>
              <Grid item xs={12} key="contactButton">
                <Grid container className={classes.ContactButtonOutter}>
                  <Grid item>
                    <Button variant="outlined" color="secondary" style={{ borderRadius: 0 }}>
                      <Typography className={classes.ContactButtonInner}>Contact</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SplashSection;
