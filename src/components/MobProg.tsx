import React from "react";
import { Grid } from "@mui/material";
import { FaUsers } from "react-icons/fa";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

const MobProg: React.FC = () => {
  return (
    <ComponentNavBarWrapper>
    <Grid container justifyContent="center" alignItems="flex-start" className="SubHeaders">
      <Grid item xs={12} xl={2}>
        <Grid container className="LeftPane">
          <Grid item xl={12} className="TitleIcon">
            <FaUsers />
          </Grid>
          <Grid item xl={12} className="TitleWords">
            WOODY ZUILL'S MOB PROGRAMMING
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className="RightPane">
          <Grid item xs={12} xl={12}>
            <Grid container className="RightWords">
              <Grid item xl={12} className="LastLine">
                Woody Zuill is a leader in software development who writes and speaks about mob programming in the industry. I watched his address at
                DNC London and began to realize that there is merit to the idea of not just pair programming, but mob programming. I realized what a
                high-functioning team's success could look like.
              </Grid>
              <Grid item xl={12} className="LastLine">
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
    </Grid></ComponentNavBarWrapper>
  );
};

export default MobProg;
