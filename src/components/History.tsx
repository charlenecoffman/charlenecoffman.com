import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import mushrooms from "../images/mushrooms.jpg";
import { MdComputer } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdCalculator } from "react-icons/io";
import { ImFileExcel } from "react-icons/im";
import { GiGraduateCap } from "react-icons/gi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    myTitle: {
      textAlign: "left",
      fontSize: 22,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    backgroundImage: {
      backgroundImage: `url(${mushrooms})`,
      backgroundSize: "100%",
      height: "35em",
    },
    greyBackground: {
      backgroundColor: theme.palette.primary.dark,
      color: "#FFFFFF",
    },
    WordsSquare: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },
    EachOutterContainer: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      textAlign: "left",
      fontSize: 16,
      paddingTop: "1em",
    },
    Icons: {
      fontSize: "2.5em",
    },
    WordsWordsWords: {
      paddingLeft: "1em",
    },
  }),
);

export interface IHistory {}

const History: React.FC<IHistory> = (props: IHistory) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.greyBackground}>
      <Grid item xs={12} key="innerSection">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={3} key="treeimage" className={classes.backgroundImage}></Grid>
          <Grid item xs={3} className={classes.WordsSquare}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} key="title" className={classes.myTitle}>
                A History
              </Grid>
              <Grid item xs={12} key="computer">
                <Grid container justifyContent="flex-start" alignItems="center" className={classes.EachOutterContainer}>
                  <Grid item xs={1} className={classes.Icons}>
                    <MdComputer />
                  </Grid>
                  <Grid item xs={11} className={classes.WordsWordsWords}>
                    My love for computers started at 11 years old, with teaching myself MS DOS on an old word processor
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="html">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.EachOutterContainer}>
                  <Grid item xs={1} className={classes.Icons}>
                    <BiCodeAlt />
                  </Grid>
                  <Grid item xs={11} className={classes.WordsWordsWords}>
                    My 6th grade PACE teacher showed me how to write my first HTML page
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="calc">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.EachOutterContainer}>
                  <Grid item xs={1} className={classes.Icons}>
                    <IoMdCalculator />
                  </Grid>
                  <Grid item xs={11} className={classes.WordsWordsWords}>
                    In 9th grade math we were given TI-93s and told that if we could program it to do our homework, then we could use it
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="excel">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.EachOutterContainer}>
                  <Grid item xs={1} className={classes.Icons}>
                    <ImFileExcel />
                  </Grid>
                  <Grid item xs={11} className={classes.WordsWordsWords}>
                    As an administrative assistant, I taught myself VB to write macros to do my tedious work for me
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="college">
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.EachOutterContainer}>
                  <Grid item xs={1} className={classes.Icons}>
                    <GiGraduateCap />
                  </Grid>
                  <Grid item xs={11} className={classes.WordsWordsWords}>
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
