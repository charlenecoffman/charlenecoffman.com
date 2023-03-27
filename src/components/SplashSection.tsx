import React from "react";
import { Grid, Button, Typography, useTheme, useMediaQuery, Fade } from "@mui/material";
import { Link } from "react-router-dom";

export interface ISplashSection {}

const SplashSection: React.FC<ISplashSection> = (props: ISplashSection) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const justifycontent = small ? "center" : "flex-end";

  return (
    <Grid container>
    <Grid item xs={12} className="largeImageBackground largeImageBackgroundSize">
      <Grid container className="largeImageFilm">
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent={justifycontent}
              alignItems="center"
              spacing={2}
              className="outterContainerForWords"
            >
              <Fade in={true} timeout={1000}>
                <Grid item xs={12} key="myname" className="myName">
                  Charlene Coffman
                </Grid>
              </Fade>
              <Fade in={true} timeout={1500}>
                <Grid item xs={12} key="mytitle" className="myTitle">
                  a software engineer
                </Grid>
              </Fade>
              <Grid item xs={12} key="contactButton">
                <Grid container className="ContactButtonOutter">
                  <Grid item>
                    <Fade in={true} timeout={2000}>
                      <Link to="/contact" className="linkNoStyle">
                        <Button variant="outlined" color="secondary" style={{ borderRadius: 0 }}>
                          <Typography className="ContactButtonInner">Contact</Typography>
                        </Button>
                      </Link>
                    </Fade>
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
