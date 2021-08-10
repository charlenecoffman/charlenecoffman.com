import React from "react";
import { createStyles, Grid, List, ListItem, ListItemProps, ListItemText, makeStyles, Theme } from "@material-ui/core";
import { FaUsers } from "react-icons/fa";
import { Timeline } from "react-twitter-widgets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      paddingTop: "6em",
      paddingBottom: "3em",
    },
    LeftPane: {
      textAlign: "center",
      paddingRight: "2em",
      paddingLeft: "2em",
    },
    RightPane: {
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
    RightWords: {
      textAlign: "left",
    },
    LastLine: {
      paddingTop: "1em",
    },
    Header: {
      paddingTop: "2em",
      textAlign: "left",
    },
  }),
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export interface ILeaders {}

const Leaders: React.FC<ILeaders> = (props: ILeaders) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.Main}>
      <Grid item xs={12} xl={2}>
        <Grid container className={classes.LeftPane}>
          <Grid item xl={12} className={classes.TitleIcon}>
            <FaUsers />
          </Grid>
          <Grid item xl={12} className={classes.TitleWords}>
            Learning From The Industry Leaders
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className={classes.RightPane}>
          <Grid item xs={12} xl={12}>
            <Grid container className={classes.RightWords}>
              <Grid item xl={12} className={classes.LastLine}>
                A colleague of mine told me something extremely simple to understand and totally obvious once it was pointed out to me: Lets look at
                how the leaders in our field have solved this problem, a do what they do.
              </Grid>
              <Grid item xl={12} className={classes.LastLine}>
                Its so simple, but so true. Teams of individuals at Google and Microsoft and StackOverflow have come across alot of these problems
                before and if they have solved the problem in a way that works well, then why should I think that I will be able to spend less time
                coming up with something even better.
              </Grid>
              <Grid item xl={12} className={classes.LastLine}>
                My attempt at keeping up with the industry also includes reading blogs of the greats and following them on twitter.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={12} className={classes.Header}>
            Here is a list of blogs that I follow:
          </Grid>
          <Grid item xl={12}>
            <List>
              <ListItemLink href="https://www.mountaingoatsoftware.com/blog">
                <ListItemText primary="Mike Cohn" secondary="Mountain Goat Software" />
              </ListItemLink>
              <ListItemLink href="https://codeblog.jonskeet.uk/">
                <ListItemText primary="John Skeet" secondary="Jon Skeet's coding blog" />
              </ListItemLink>
              <ListItemLink href="https://martinfowler.com/">
                <ListItemText primary="Martin Fowler" secondary="martinfowler.com" />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Grid container style={{ paddingTop: "1em" }}>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "char_machine",
                }}
                options={{
                  width: "600",
                  height: "600",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Leaders;
