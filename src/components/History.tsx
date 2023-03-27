import React from "react";
import { Grid } from "@mui/material";
import { MdComputer } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdCalculator } from "react-icons/io";
import { ImFileExcel } from "react-icons/im";
import { GiGraduateCap } from "react-icons/gi";

const History: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" className="greyBackground">
      <Grid item xs={12} key="innerSection">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xl={3} lg={4} md={5} sm={6} xs={12} key="treeimage" className="backgroundImage historyBackgroundImage"></Grid>
          <Grid item xl={3} lg={4} md={5} sm={6} xs={12} className="WordsSquare">
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} key="title" className="myTitle_historySection">
                A History
              </Grid>
              <Grid item xs={12} key="computer">
                <Grid container justifyContent="flex-start" alignItems="center" className="EachOutterContainer">
                  <Grid item xs={1} className="Icons">
                    <MdComputer />
                  </Grid>
                  <Grid item xs={11} className="WordsWordsWords">
                    My love for computers started at 11 years old, with teaching myself MS DOS on an old word processor
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="html">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="EachOutterContainer">
                  <Grid item xs={1} className="Icons">
                    <BiCodeAlt />
                  </Grid>
                  <Grid item xs={11} className="WordsWordsWords">
                    My 6th grade PACE teacher showed me how to write my first HTML page
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="calc">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="EachOutterContainer">
                  <Grid item xs={1} className="Icons">
                    <IoMdCalculator />
                  </Grid>
                  <Grid item xs={11} className="WordsWordsWords">
                    In 9th grade math we were given TI-93s and told that if we could program it to do our homework, then we could use it
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="excel">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="EachOutterContainer">
                  <Grid item xs={1} className="Icons">
                    <ImFileExcel />
                  </Grid>
                  <Grid item xs={11} className="WordsWordsWords">
                    As an administrative assistant, I taught myself VB to write macros to do my tedious work for me
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="college">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="EachOutterContainer">
                  <Grid item xs={1} className="Icons">
                    <GiGraduateCap />
                  </Grid>
                  <Grid item xs={11} className="WordsWordsWords">
                    A friend convinced me to go back to school and get a degree in computer science, and the rest is history…
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default History;
