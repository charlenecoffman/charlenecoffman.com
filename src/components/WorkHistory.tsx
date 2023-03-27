import React from "react";
import { Grid, Divider } from "@mui/material";
import { GoCalendar } from "react-icons/go";

export interface IWorkHistory {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  bottomDivider?: boolean;
}

const WorkHistory: React.FC<IWorkHistory> = (props: IWorkHistory) => {
  const bottomDivider = props.bottomDivider ?? true;
  return (
    <Grid container className="FirstWorkExperience">
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
      <Grid item xs={12} className="Paragraph">
        {props.description}
      </Grid>
      <Grid item xs={12} className="Divider">
        {bottomDivider && <Divider />}
      </Grid>
    </Grid>
  );
};

export default WorkHistory;
