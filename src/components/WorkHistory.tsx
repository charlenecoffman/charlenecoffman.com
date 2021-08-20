import React from "react";
import { createStyles, Grid, makeStyles, Theme, Divider } from "@material-ui/core";
import { GoCalendar } from "react-icons/go";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      color: theme.palette.primary.main,
    },
    FirstWorkExperience: {
      padding: "1em",
    },
    Paragraph: {
      paddingTop: "1em",
    },
    Divider: {
      paddingTop: "1em",
      color: theme.palette.primary.dark,
    },
  }),
);

export interface IWorkHistory {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  bottomDivider?: boolean;
}

const WorkHistory: React.FC<IWorkHistory> = (props: IWorkHistory) => {
  const classes = useStyles();
  const bottomDivider = props.bottomDivider ?? true;
  return (
    <Grid container className={classes.FirstWorkExperience}>
      <Grid item xs={12}>
        {props.title !== "" && props.company !== "" && (
          <React.Fragment>
            {props.title} / {props.company}
          </React.Fragment>
        )}
        {props.title === "" && props.company !== "" && <React.Fragment>{props.company}</React.Fragment>}
      </Grid>
      <Grid item xs={12}>
        <GoCalendar />{" "}
        {props.startDate !== "" && props.endDate !== "" && (
          <React.Fragment>
            {props.startDate} - {props.endDate}
          </React.Fragment>
        )}
        {props.startDate === "" && props.endDate !== "" && <React.Fragment>{props.endDate}</React.Fragment>}
      </Grid>
      <Grid item xs={12} className={classes.Paragraph}>
        {props.description}
      </Grid>
      <Grid item xs={12} className={classes.Divider}>
        {bottomDivider && <Divider />}
      </Grid>
    </Grid>
  );
};

export default WorkHistory;
