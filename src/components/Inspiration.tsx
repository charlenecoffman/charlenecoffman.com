import React, { useState } from "react";
import { Grid, Typography, Slide, useMediaQuery, useTheme } from "@mui/material";
import { FaSpotify, FaUsers, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface IInspiration {}

const Inspiration: React.FC<IInspiration> = (props: IInspiration) => {
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
    <Grid container className="OuterContainer">
      <Grid item xs={12} key="title">
        <Typography className="myTitle_Subpages">Inspiration</Typography>
      </Grid>
      <Grid item xs={12} key="subtitle">
        <Typography className="subTitle_Inspo">A few things that inspire me as a software engineer</Typography>
      </Grid>
      <Grid item xs={12} key="collection" className="allLowerItemsContainer">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid
            item
            xs={eachsection}
            key="spotify"
            className="OuterOfEachSection"
            onMouseEnter={() => setShowSpotifyViewMore(true)}
            onMouseLeave={() => setShowSpotifyViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className="EachBox">
                  <Grid item xs={12} key="spotify_icon" className="IconContainer">
                    <FaSpotify />
                  </Grid>
                  <Grid item xs={9} key="spotify_title" className="SmallerTitleContainer">
                    <Typography className="SmallerTitles">Spotify's Engineering Culture</Typography>
                  </Grid>
                  <Grid item xs={9} key="spotify_subtitle" className="SmallerTitleContainer">
                    <Typography className="subTitle">Spotify's focus on agile, autonomous teams...</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="spotify_readmore" className="ViewMoreContainer">
                <Link to="/spotify" className="linkNoStyle">
                  <Slide direction="up" in={showSpotifyViewMore || alwaysShowViewMores} timeout={400}>
                    <Typography className="ViewMoreButton">View More</Typography>
                  </Slide>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={eachsection}
            key="mobprog"
            className="OuterOfEachSection"
            onMouseEnter={() => setShowMobProgViewMore(true)}
            onMouseLeave={() => setShowMobProgViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className="EachBox">
                  <Grid item xs={12} key="mobprog_icon" className="IconContainer">
                    <FaUsers />
                  </Grid>
                  <Grid item xs={9} key="mobprog_title" className="SmallerTitleContainer">
                    <Typography className="SmallerTitles">Woody Zuill's Mob Programming</Typography>
                  </Grid>
                  <Grid item xs={9} key="mobprog_subtitle" className="SmallerTitleContainer">
                    <Typography className="subTitle">Woddy Zuill's address on mob programming...</Typography>
                  </Grid>
                  <Grid item xs={12} key="mobprog_readmore"></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="mobprog_readmore" className="ViewMoreContainer">
                <Link to="/mob" className="linkNoStyle">
                  <Slide direction="up" in={showMobProgViewMore || alwaysShowViewMores} timeout={400}>
                    <Typography className="ViewMoreButton">View More</Typography>
                  </Slide>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={eachsection}
            key="leaders"
            className="OuterOfEachSection"
            onMouseEnter={() => setShowLeadersViewMore(true)}
            onMouseLeave={() => setShowLeadersViewMore(false)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" className="EachBox">
                  <Grid item xs={12} key="leaders_icon" className="IconContainer">
                    <FaBook />
                  </Grid>
                  <Grid item xs={9} key="leaders_title" className="SmallerTitleContainer">
                    <Typography className="SmallerTitles">Following the Leaders</Typography>
                  </Grid>
                  <Grid item xs={9} key="leaders_subtitle" className="SmallerTitleContainer">
                    <Typography className="subTitle">Learning from the leaders of the software engineering industry...</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="leaders_readmore" className="ViewMoreContainer">
                <Link to="/leaders" className="linkNoStyle">
                  <Slide direction="up" in={showLeadersViewMore || alwaysShowViewMores} timeout={400}>
                    <Typography className="ViewMoreButton">View More</Typography>
                  </Slide>
                </Link>
              </Grid>              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Inspiration;
