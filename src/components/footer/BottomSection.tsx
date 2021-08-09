import React, { useEffect, useState } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LastModifiedDateStore from "../../stores/LastModifiedDateStore";
import XkcdStore from "../../stores/XkcdStore";
import PoemStore from "../../stores/PoemStore";
import Poem from "../../models/Poem";
import PoemContainer from "../PoemContainer";

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
      backgroundColor: theme.palette.primary.dark,
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
    littlerTitles: {
      fontSize: 18,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
      paddingTop: "2em",
    },
    date: { cursor: "pointer", color: theme.palette.secondary.dark },
    addressContainer: {
      paddingTop: "2em",
      paddingBottom: "2em",
    },
    link: {
      color: theme.palette.secondary.dark,
    },
    siteMade: {
      paddingTop: "2em",
      paddingBottom: "1em",
    },
    comic: {
      maxWidth: "100%",
    },
  }),
);

export interface IBottomSection {}

const BottomSection: React.FC<IBottomSection> = (props: IBottomSection) => {
  //https://poetrydb.org/linecount/10
  const classes = useStyles();
  const [lastModified, setLastModified] = useState("");
  const [comicUrl, setComicUrl] = useState("");
  const [poem, setPoem] = useState({} as Poem);
  const lastModifiedStore = new LastModifiedDateStore();
  const xkcdStore = new XkcdStore();
  const poemStore = new PoemStore();

  useEffect(() => {
    lastModifiedStore.getLastModifiedDate().then((dateString) => {
      setLastModified(dateString);
    });

    xkcdStore.getTodaysComic().then((url) => {
      setComicUrl(url);
    });

    poemStore.getTodaysPoem().then((poem) => {
      setPoem(poem as Poem);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
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
          <Grid item xs={2} key="sitereferences">
            <Grid container>
              <Grid item xs={12} className={classes.littleTitles}>
                About This Website
              </Grid>
              <Grid item xs={12}>
                Last Updated: {lastModified}
              </Grid>
              <Grid item className={classes.siteMade}>
                This site was made using{" "}
                <a href="https://create-react-app.dev/" className={classes.link}>
                  Create React App
                </a>
                .
              </Grid>
              <Grid item xs={12}>
                The source code for this site can be found on GitHub{" "}
                <a href="https://github.com/charlenecoffman/charlenecoffman.com" className={classes.link}>
                  here
                </a>
                .
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} key="xkcd">
            <Grid container>
              <Grid item xs={12} className={classes.littleTitles}>
                XKCD Comic
              </Grid>
              <Grid item xs={12}>
                {comicUrl !== "" && <img src={comicUrl} alt="new" className={classes.comic} />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} key="poem">
            <Grid item xs={12} className={classes.littleTitles}>
              Daily Poem
            </Grid>
            {poem && poem.lines && <PoemContainer title={poem.title} author={poem.author} lines={poem.lines} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomSection;
