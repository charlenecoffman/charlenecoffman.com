import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import me from "../images/charlene.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import WorkHistory from "./WorkHistory";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Main: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      color: theme.palette.primary.main,
      paddingBottom: "5em",
    },
    Photo: {
      backgroundImage: `url(${me})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "12em",
      borderRadius: "50px",
    },
    ContactInfo: {
      padding: "1em",
    },
    MoveItDown: {
      [theme.breakpoints.down("xs")]: {
        paddingTop: "2em",
      },
      [theme.breakpoints.only("sm")]: {
        paddingTop: "5em",
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: "10em",
      },
    },
    TopPadding: {
      paddingTop: "2em",
    },
    MainTitle: {
      fontSize: 22,
      fontFamily: "Uchen-Regular",
      textTransform: "uppercase",
    },
    FirstWorkExperience: {
      padding: "1em",
    },
    Paragraph: {
      paddingTop: "1em",
    },
    BulletList: {},
    EducationSection: {
      paddingTop: "2em",
    },
  }),
);

export interface IResume {}

const Resume: React.FC<IResume> = (props: IResume) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.Main} direction="row" justifyContent="center" alignItems="flex-start">
      <Grid item xs={12} sm={4} md={4} lg={3} xl={2} key="leftpane">
        <Grid container className={classes.MoveItDown}>
          <Grid item xs={12} key="picture">
            <Grid container>
              <Grid item xs={7} className={classes.Photo}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.ContactInfo}>
              <Grid item xs={12} key="name">
                Charlene Coffman
              </Grid>
              <Grid item xs={12} key="location">
                Birmingham, AL
              </Grid>
              <Grid item xs={12} key="phone" className={classes.TopPadding}>
                <Grid container>
                  <Grid item xs={1}>
                    <FaPhoneAlt />
                  </Grid>
                  <Grid item xs={11}>
                    (205) 565-1043
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="email">
                <Grid container>
                  <Grid item xs={1}>
                    <MdEmail />
                  </Grid>
                  <Grid item xs={11}>
                    coffmancharlene@gmail.com
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} key="download">
                <Grid item key="downloadIcon"></Grid>
                <Grid item key="downloadprompt" className={classes.TopPadding}>
                  <a href="CharleneCoffmanResume.pdf" download>
                    Download my resume
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={7} xl={6} key="rightpane">
        <Grid container className={classes.MoveItDown}>
          <Grid item xs={12} key="AboutMe" className={classes.MainTitle}>
            About Me
          </Grid>
          <Grid container className={classes.BulletList}>
            <Grid item xs={10}>
              <ul>
                <li>
                  Experience in complete lifecycle software development: from concept to delivery using agile methodology for development and
                  automation pipelines for delivery.
                </li>
                <li>
                  Expert consulting experience in analyzing current solutions, developing cost-effective, and client-satisfaction driven results.
                </li>
                <li>
                  Advanced troubleshooting capabilities for researching and identifying defects, resolving, testing and deploying accurate solutions.
                </li>
                <li>
                  Writing high quality code with automated unit testing and integration testing, while focusing on the industry standards in design
                  principles and agile methodologies.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid item xs={12} key="WorkExperience">
            <Grid container>
              <Grid item xs={12} className={classes.MainTitle}>
                <BsFillBriefcaseFill /> Work Experience
              </Grid>
              <Grid item xs={12}>
                <WorkHistory
                  title="Software Engineer II"
                  company="EBSCO"
                  startDate="January 2019"
                  endDate="Present"
                  description="As a software engineer at EBSCO I am focusing mainly on full stack development of our customer facing flagship application EBSCONET. It is an
                  older application that has a multitude of responsibilities and it has been our focus to pull functionality into microservices that the site
                  could simply show on the page. At EBSCO I have enhanced my skills in JS (with React), .NET Core, and AWS."
                />
                <WorkHistory
                  title="Software Engineer"
                  company="Regions Financial"
                  startDate="January 2018"
                  endDate="January 2019"
                  description="As a software developer with Regions Bank I worked on integrating a legacy product’s functionality into a
                  relatively new C#/ASP.NET solution. I worked with my team to implement a process that will allow for the
                  use of continuous integrations and automated deployments through TFS and TFVC. I worked on a team of 5
                  developers and encouraged collaboration and agility through the experiences I brought to the table."
                />
                <WorkHistory
                  title="Software Developer"
                  company="INTL FCStone Financial Inc."
                  startDate="May 2017"
                  endDate="December 2017"
                  description="As a software developer with INTL FCStone I worked on a team of 4 developers to maintain an ASP.NET C# web
                  application which assisted Financial Representatives in making trade transactions and comparing trends over
                  time. In maintaining this application I implemented changes to correct bugs and add in new features to the
                  website. I also assisted in upkeep of the automated build and deployment pipelines."
                />
                <WorkHistory
                  title="Software Developer"
                  company="CTS"
                  startDate="June 2015"
                  endDate="May 2017"
                  description="I moved to Birmingham to lead a new client engagement, which would be a small team of 2 – 3 developers
                  working at the client’s site on a Content Management solution for a nuclear plant. As the technical lead for the
                  project, I have managed the project tasks and the expectations of the client and the CTS portfolio director. I have
                  communicated needs for our team when they arose and successfully managed time for my team. In addition to
                  managing the engagement I implemented changes to the many micro-services using PL\SQL, C#, ASP.NET, SSIS
                  and SSRS."
                />
                <WorkHistory
                  title="Software Developer"
                  company="ArchPatent, Telecommute"
                  startDate="October 2012"
                  endDate="March 2015"
                  description="I assisted in developing a Patent Searching solution Web API in a Ruby on Rails framework. An aspect of this was
                  a web crawler which pulled new patent data and files from the US Patent Office sites, and a user interface for
                  adding additional licenses for the API. I also assisted the company with establishing issues and requests tracking
                  system and software logging practices.
                  "
                  bottomDivider={false}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} key="Education">
            <Grid container className={classes.EducationSection}>
              <Grid item xs={12} className={classes.MainTitle}>
                <MdSchool /> Education
              </Grid>
              <WorkHistory
                title=""
                company="University of South Alabama"
                startDate=""
                endDate="May 2015"
                description="Computer Science, B.S."
                bottomDivider={false}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} key="philanthropy">
            <Grid container className={classes.EducationSection}>
              <Grid item xs={12} className={classes.MainTitle}>
                <BiDonateHeart /> Philanthropy
              </Grid>
              <WorkHistory
                title="CTO"
                company="Be The Change Gulf Coast"
                startDate="October 2019"
                endDate="Present"
                description={
                  "In the role of Chief Technology Officer for the 503(c) Non-Profit" +
                  ' "Be The Change Gulfcoast", ' +
                  "I have implemented the public website " +
                  "with anonymous access to information about the charity. As well as a user driven set of pages for requesting assistance, and an admin page (only " +
                  "accessible by a select set of users). This website is hosted completely in AWS using DynamoDB, Lambda Functions, Cognito, API Gateway, Cloudfront, and Route53."
                }
              />
              <WorkHistory
                title="Volunteer Teacher"
                company="Microsoft TEALS"
                startDate="August 2019"
                endDate="March 2020"
                description={
                  "Technology Education and Literacy in Schools (TEALS) is a Microsoft Philanthropies program that builds sustainable CS programs in high schools. I taught the " +
                  "TEALS curriculum to a classroom of mostly Juniors and Seniors. I also talked about the software development industry and how to get into it."
                }
                bottomDivider={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
