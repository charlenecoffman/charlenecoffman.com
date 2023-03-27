import React, { useEffect, useState } from "react";
import {  Grid } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LastModifiedDateStore from "../../stores/LastModifiedDateStore";
import XkcdStore from "../../stores/XkcdStore";
import PoemStore from "../../stores/PoemStore";
import Poem from "../../models/Poem";
import PoemContainer from "../PoemContainer";

const BottomSection: React.FC = () => {
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
    <Grid container className="greyBackground" justifyContent="center">
      <Grid item xs={12}>
        <Grid container className="headerContainer" justifyContent="center" alignItems="center">
          <Grid item xs={12} key="myname" className="footer_Title">
            Charlene Coffman
          </Grid>
          <Grid item xs={12} key="contactinvitation" className="mySubTitle">
            I am available to discuss ideas on software or life or whatever…
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="AfterIntro">
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
          <Grid item sm={6} md={3} lg={2} key="contactinfo">
            <Grid container>
              <Grid item xs={12} className="littleTitles">
                Contact Information
              </Grid>
              <Grid item xs={12} className="addressContainer">
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
          <Grid item sm={6} md={3} lg={2} key="sitereferences">
            <Grid container>
              <Grid item xs={12} className="littleTitles">
                About This Website
              </Grid>
              <Grid item xs={12}>
                Last Updated: {lastModified}
              </Grid>
              <Grid item className="siteMade">
                This site was made using{" "}
                <a href="https://create-react-app.dev/" target="_blank" rel="noreferrer" className="link">
                  Create React App
                </a>
                .
              </Grid>
              <Grid item xs={12}>
                The source code for this site can be found on GitHub{" "}
                <a href="https://github.com/charlenecoffman/charlenecoffman.com" target="_blank" rel="noreferrer" className="link">
                  here
                </a>
                .
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={3} lg={2} key="xkcd">
            <Grid container>
              <Grid item xs={12} className="littleTitles">
                XKCD Comic
              </Grid>
              <Grid item xs={12}>
                {comicUrl !== "" && <img src={comicUrl} alt="new" className="comic" />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={3} lg={2} key="poem">
            <Grid item xs={12} className="littleTitles">
              Random Poem
            </Grid>
            {poem && poem.lines && <PoemContainer title={poem.title} author={poem.author} lines={poem.lines} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomSection;
