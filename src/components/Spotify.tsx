import React from "react";
import {Grid } from "@mui/material";
import { FaSpotify } from "react-icons/fa";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

const Spotify: React.FC = () => {
  return (
    <ComponentNavBarWrapper>
    <Grid container justifyContent="center" alignItems="flex-start" className="Main">
      <Grid item xs={12} xl={2}>
        <Grid container className="LeftPane">
          <Grid item xl={12} className="TitleIcon">
            <FaSpotify />
          </Grid>
          <Grid item xl={12} className="TitleWords">
            Spotify's Engineering Culture
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className="RightPane">
          <Grid item xs={12} xl={12}>
            <Grid container className="RightWords">
              <Grid item xl={12}>
                Spotify released two videos in 2014 that described thier agile engineering culture.
              </Grid>
              <Grid item xl={12}>
                <Grid container>
                  <Grid item xl={3} className="quoteImage"></Grid>
                  <Grid item xl={9}>
                    <Grid container>
                      <Grid item xl={12} className="FirstPara">
                        Their videos talk about how they implemented agile while their development teams started to scale up and how they are
                        maintaining agile in large scale. Spotify has found what is important with Agile and they do a great job of describing it in
                        these videos.
                      </Grid>
                      <Grid item xl={12} className="FirstPara">
                        One of the most important things that I got from these videos is that agile development is not a destination, but a constant
                        state of work-in-progress. With regular retrospectives and team members who feel empowered to contribute to the process,
                        Spotify has identified what is important about agile.
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xl={12} className="LastLine">
                    I really can't do it justice, so just take some time, and watch both videos. Also follow this{" "}
                    <a href="https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/" target="_blank" rel="noreferrer">
                      link
                    </a>{" "}
                    to read their article that goes with the videos.
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
    </Grid></ComponentNavBarWrapper>
  );
};

export default Spotify;
