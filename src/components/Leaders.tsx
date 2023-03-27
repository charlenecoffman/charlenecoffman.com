import React from "react";
import { Grid, List, ListItem, ListItemProps, ListItemText } from "@mui/material";
import { FaUsers } from "react-icons/fa";
import { Timeline } from "react-twitter-widgets";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Leaders: React.FC = () => {
  return (
    <ComponentNavBarWrapper>
    <Grid container justifyContent="center" alignItems="flex-start" className="SubHeaders">
      <Grid item xs={12} xl={2}>
        <Grid container className="LeftPane">
          <Grid item xl={12} className="TitleIcon">
            <FaUsers />
          </Grid>
          <Grid item xl={12} className="TitleWords">
            Learning From The Industry Leaders
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container className="RightPane">
          <Grid item xs={12} xl={12}>
            <Grid container className="RightWords">
              <Grid item xl={12} className="LastLine">
                A colleague of mine told me something extremely simple to understand and totally obvious once it was pointed out to me: Lets look at
                how the leaders in our field have solved this problem, and do what they do.
              </Grid>
              <Grid item xl={12} className="LastLine">
                Its so simple, but so true. Teams of individuals at Google and Microsoft and StackOverflow have come across alot of these problems
                before and if they have solved the problem in a way that works well, then why should I think that I will be able to spend less time
                coming up with something even better.
              </Grid>
              <Grid item xl={12} className="LastLine">
                My attempt at keeping up with the industry also includes reading blogs of the greats and following them on twitter.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={12} className="Header">
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
    </Grid></ComponentNavBarWrapper>
  );
};

export default Leaders;
