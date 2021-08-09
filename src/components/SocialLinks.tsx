import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FaFacebookF, FaPinterest, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavBarBackground: {
      width: "100%",
      color: theme.palette.primary.main,
      fontSize: 16,
      backgroundColor: theme.palette.primary.dark,
      textAlign: "center",
    },
  }),
);

export interface ISocialLinks {}

const SocialLinks: React.FC<ISocialLinks> = (props: ISocialLinks) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xl={12} className={classes.NavBarBackground}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xl={6}>
            <Grid container spacing={1}>
              <Grid item>
                <FaFacebookF />
              </Grid>
              <Grid item>
                <FaPinterest />
              </Grid>
              <Grid item>
                <FaTwitter />
              </Grid>
              <Grid item>
                <FaLinkedinIn />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
