import React from "react";
import { Grid, Typography } from "@mui/material";

const OtherThingsILove: React.FC = () => {
  return (
    <Grid container className="OuterContainer_Love">
      <Grid item xs={12} key="title" className="myTitle_Subpages">
        Other Things I Love
      </Grid>
      <Grid item xs={12} key="subtitle">
        <Typography className="subTitle_Love">Besides being a software engineer, I am a lot of things to a lot of people</Typography>
      </Grid>
      <Grid item xs={12} key="collection" className="allLowerItemsContainer">
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
          <Grid item sm={4} md={3} lg={2} xl={2} key="art">
            <Grid container justifyContent="center">
              <Grid item xs={12} key="art_image" className="artImage"></Grid>
              <Grid item xs={9} key="art_title" className="SmallerTitleContainer_Love SmallerTitles_Love">
                <Typography>Art</Typography>
              </Grid>
              <Grid item xs={12} key="subTitle_Love" className="subBelowTitle">
                <Typography>I paint, draw, write poetry and sculpt...</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} md={3} lg={2} xl={2} key="kids">
            <Grid container justifyContent="center">
              <Grid item xs={12} key="kids_image" className="kidsImage"></Grid>
              <Grid item xs={9} key="kids_title" className="SmallerTitleContainer_Love SmallerTitles_Love">
                <Typography>My Kids</Typography>
              </Grid>
              <Grid item xs={12} key="kids_subtitle" className="subBelowTitle">
                <Typography>
                  They are ridiculous and fun, and ridiculously funny.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} md={3} lg={2} xl={2} key="husband">
            <Grid container justifyContent="center">
              <Grid item xs={12} key="husband_image" className="weddingImage"></Grid>
              <Grid item xs={9} key="husband_title" className="SmallerTitleContainer_Love SmallerTitles_Love">
                <Typography className="">The Husband</Typography>
              </Grid>
              <Grid item xs={12} key="husband_subtitle" className="subBelowTitle">
                <Typography>He is the best thing ever...</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OtherThingsILove;
