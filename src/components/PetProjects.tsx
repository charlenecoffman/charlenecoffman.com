import React, { useState } from "react";
import { createStyles, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from "@material-ui/core";
import { SiPolymerproject } from "react-icons/si";
import { GiBee } from "react-icons/gi";
import { FaUserNinja } from "react-icons/fa";
import btc from "../images/BTC.jpg";
import budgeit from "../images/budgeit.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      color: theme.palette.primary.main,
      fontSize: 14,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      paddingTop: "6em",
    },
    TitleSection: {
      textAlign: "center",
    },
    TitleWords: {
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
      fontSize: 26,
    },
    TitleIcon: {
      fontWeight: "bold",
      fontSize: 40,
    },
    Clickable: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    largeBTCImage: {
      backgroundImage: `url(${btc})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "15em",
    },
    largeBNImage: {
      backgroundImage: `url(${budgeit})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "25em",
    },
    BeeIcon: {
      fontSize: "2em",
      color: "#FEC440",
    },
    NinjaIcon: {
      fontSize: "2em",
      color: "black",
    },
    Icon: {
      fontSize: "2em",
    },
  }),
);

export interface IPetProjects {}

const PetProjects: React.FC<IPetProjects> = (props: IPetProjects) => {
  const classes = useStyles();

  const [showBTCSection, setShowBTCSection] = useState(false);
  const [showBNSection, setShowBNSection] = useState(false);

  const setAllOthersToFalse = (ignore: string) => {
    if (ignore !== "BTC") {
      setShowBTCSection(false);
    }
    if (ignore !== "BN") {
      setShowBNSection(false);
    }
  };

  const showBTC = () => {
    setShowBTCSection(true);
    setAllOthersToFalse("BTC");
  };

  const showBN = () => {
    setShowBNSection(true);
    setAllOthersToFalse("BN");
  };

  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.Main}>
      <Grid item xs={12} xl={2}>
        <Grid container className={classes.TitleSection}>
          <Grid item xl={12} className={classes.TitleIcon}>
            <SiPolymerproject />
          </Grid>
          <Grid item xl={12} className={classes.TitleWords}>
            Pet Projects
          </Grid>
          <Grid item>
            <List>
              <ListItem onClick={showBTC} className={classes.Clickable}>
                <ListItemIcon>
                  <GiBee className={showBTCSection ? classes.BeeIcon : classes.Icon} />
                </ListItemIcon>
                <ListItemText primary="Be The Change Gulf Coast" secondary="https://bethechangegulfcoast.com" />
              </ListItem>
              <ListItem onClick={showBN} className={classes.Clickable}>
                <ListItemIcon>
                  <FaUserNinja className={showBNSection ? classes.NinjaIcon : classes.Icon} />
                </ListItemIcon>
                <ListItemText primary="Budge-It Ninja" secondary="https://budge-it.ninja" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container style={{ padding: "5em" }}>
          {showBTCSection && (
            <Grid item xl={12}>
              <Grid container>
                <Grid item xl={12} className={classes.largeBTCImage}></Grid>
                <Grid item xl={12}>
                  <a href="https://bethechangegulfcoast.com" target="_blank" rel="noreferrer">
                    Be The Change Gulf Coast
                  </a>{" "}
                  is a 503(c) Non-Profit that focuses on giving targeted assistance as needed and encourages small donations.
                </Grid>
                <Grid item xl={12} style={{ paddingTop: "1em" }}>
                  This website is hosted entirely in AWS. The domain and DNS configurations are in Route53. The website UI is a React app hosted using
                  static web-hosting in an S3 bucket. The API was creating using API Gateway and a collection of Lambda functions. All of the code is
                  stored in GitHub and uses{" "}
                  <a href="https://github.com/features/actions" target="_blank" rel="noreferrer">
                    GitHub Actions
                  </a>{" "}
                  for CI & CD.
                </Grid>
                <Grid item xl={12} style={{ paddingTop: "1em" }}>
                  There is a test version of the site that is deployed when a branch other than master is pushed. I use this to test out new features.
                  The other members of the board serve as QA.
                </Grid>
              </Grid>
            </Grid>
          )}
          {showBNSection && (
            <Grid item xl={12}>
              <Grid container>
                <Grid item xl={4} className={classes.largeBNImage}></Grid>
                <Grid item xl={8}>
                  <Grid container>
                    <Grid item xl={12}>
                      <a href="https://bethechangegulfcoast.com" target="_blank" rel="noreferrer">
                        Budge-It.Ninja
                      </a>{" "}
                      is the budget app I create for my husband and myself. Its just a place we can both log in and see our current balances and
                      transactions.
                    </Grid>
                    <Grid item xl={12} style={{ paddingTop: "1em" }}>
                      This website is hosted entirely in AWS. The domain and DNS configurations are in Route53. The website UI is a React app hosted
                      using static web-hosting in an S3 bucket. The API was creating using API Gateway and a collection of Lambda functions. All of
                      the code is stored in GitHub and uses{" "}
                      <a href="https://github.com/features/actions" target="_blank" rel="noreferrer">
                        GitHub Actions
                      </a>{" "}
                      for CI & CD.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PetProjects;
