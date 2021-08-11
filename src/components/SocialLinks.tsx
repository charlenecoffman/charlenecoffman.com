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
    allLinks: {
      "&:hover": {
        transition: ".3s",
      },
    },
    twitter: {
      "&:hover": {
        color: "#1DA1F2",
      },
    },
    facebook: {
      "&:hover": {
        color: "#4267B2",
      },
    },
    pinterest: {
      "&:hover": {
        color: "#E60023",
      },
    },
    linkedin: {
      "&:hover": {
        color: "#0077b5",
      },
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
            <Grid container spacing={2}>
              <Grid item>
                <a href="https://www.facebook.com/coffmanCharlene" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                  <FaFacebookF className={[classes.allLinks, classes.facebook].join(" ")} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.pinterest.com/ilovegrove/" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                  <FaPinterest className={[classes.allLinks, classes.pinterest].join(" ")} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://twitter.com/char_machine" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                  <FaTwitter className={[classes.allLinks, classes.twitter].join(" ")} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/charlene-coffman-22108994/"
                  style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                >
                  <FaLinkedinIn className={[classes.allLinks, classes.linkedin].join(" ")} />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
