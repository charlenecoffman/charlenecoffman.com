import React from "react";
import { Grid } from "@mui/material";
import { FaFacebookF, FaPinterest, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks: React.FC = () => {
  return (
    <Grid container>
      <Grid item xl={12} className="SocialLinksBackground">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xl={6}>
            <Grid container spacing={2}>
              <Grid item>
                <Link to={{ pathname: "https://www.facebook.com/coffmanCharlene" }} target="_blank" className="linkNoStyle">
                  <FaFacebookF className="allLinks facebook" />
                </Link>
              </Grid>
              <Grid item>
                <Link to={{ pathname: "https://www.pinterest.com/ilovegrove/" }} target="_blank" className="linkNoStyle">
                  <FaPinterest className="allLinks pinterest" />
                </Link>
              </Grid>
              <Grid item>
                <Link to={{ pathname: "https://twitter.com/char_machine" }} target="_blank" className="linkNoStyle">
                  <FaTwitter className="allLinks twitter"/>
                </Link>
              </Grid>
              <Grid item>
                <Link to={{ pathname: "https://www.linkedin.com/in/charlene-coffman-22108994/" }} target="_blank" className="linkNoStyle">
                  <FaLinkedinIn className="allLinks linkedin" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
