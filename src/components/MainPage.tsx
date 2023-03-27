import React from "react";
import { Grid } from "@mui/material";
import SplashSection from "./SplashSection";
import Inspiration from "./Inspiration";
import History from "./History";
import OtherThingsILove from "./OtherThingsILove";

export interface IMainPage {}

const MainPage: React.FC<IMainPage> = (props: IMainPage) => {
  return (
    <Grid container>
      <SplashSection />
      <Inspiration />
      <History />
      <OtherThingsILove />
    </Grid>
  );
};

export default MainPage;
