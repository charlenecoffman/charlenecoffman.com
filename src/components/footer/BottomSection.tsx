import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    myTitle: {
      textAlign: "center",
      fontSize: 26,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    mySubTitle: {
      textAlign: "center",
    },
    greyBackground: {
      backgroundColor: "#26272B",
      color: "#FFFFFF",
      height: "35em",
    },
    headerContainer: {
      paddingTop: "3em",
    },
    littleTitles: {
      fontSize: 19,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
      borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
    },
    addressContainer: {
      paddingTop: "2em",
      paddingBottom: "2em",
    },
  }),
);

export interface IBottomSection {}

const BottomSection: React.FC<IBottomSection> = (props: IBottomSection) => {
  //https://xkcd.com/info.0.json
  //https://poetrydb.org/linecount/10
  const classes = useStyles();
  return (
    <Grid container className={classes.greyBackground} justifyContent="center">
      <Grid item xs={12}>
        <Grid container className={classes.headerContainer} justifyContent="center" alignItems="center">
          <Grid item xs={12} key="myname" className={classes.myTitle}>
            Charlene Coffman
          </Grid>
          <Grid item xs={12} key="contactinvitation" className={classes.mySubTitle}>
            I am available to discuss ideas on software or life or whatever…
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} key="collection">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={2} key="contactinfo">
            <Grid container>
              <Grid item xs={12} className={classes.littleTitles}>
                Contact Information
              </Grid>
              <Grid item xs={12} className={classes.addressContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    Alabaster, AL
                  </Grid>
                  <Grid item xs={12}>
                    35007
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1}>
                    <FaPhoneAlt />
                  </Grid>
                  <Grid item xs={11}>
                    (205) 565-1043
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1}>
                    <MdEmail />
                  </Grid>
                  <Grid item xs={11}>
                    me@charlenecoffman.com
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} key="sitereferences" style={{ border: "solid 1px green" }}>
            x
          </Grid>
          <Grid item xs={2} key="xkcd" style={{ border: "solid 1px green" }}>
            x
          </Grid>
          <Grid item xs={2} key="poem" style={{ border: "solid 1px green" }}>
            x
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomSection;
