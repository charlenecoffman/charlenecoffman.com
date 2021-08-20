import React, { useState } from "react";
import { Button, createStyles, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import Email from "../models/Email";
import EmailStore from "../stores/EmailStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    afterSend: {
      [theme.breakpoints.down("xs")]: {
        padding: "2em",
      },
      [theme.breakpoints.down("md")]: {
        padding: "5em",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "15em",
      },
    },
    main: {
      [theme.breakpoints.down("sm")]: {
        padding: "2em",
      },
      [theme.breakpoints.up("md")]: {
        padding: "7em",
      },
    },
    longInputs: {
      width: "100%",
    },
    sendButton: {
      textAlign: "right",
      paddingTop: "1em",
    },
    textAreaContainer: {
      paddingTop: "1em",
      width: "100%",
    },
  }),
);

export interface IContact {}

const Contact: React.FC<IContact> = (props: IContact) => {
  const classes = useStyles();

  const emailStore = new EmailStore();
  const [email, setEmail] = useState(new Email());
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (event: any) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
  };

  const handleSend = () => {
    emailStore.sendContactUsEmail(email);
    setEmailSent(true);
  };

  return (
    <React.Fragment>
      {emailSent && (
        <Grid container xs={12} justify="center" className={classes.afterSend}>
          <Grid item>Your message has been sent. I will respond as soon as I can. </Grid>
        </Grid>
      )}
      {!emailSent && (
        <Grid container justifyContent="center" alignItems="center" className={classes.main}>
          <Grid item xl={6}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} sm={6}>
                    <TextField name="from_name" label="Name" variant="outlined" className={classes.longInputs} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField name="email_address" label="Email" variant="outlined" className={classes.longInputs} onChange={handleChange} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.textAreaContainer}>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      className={classes.longInputs}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="flex-end" className={classes.sendButton}>
                  <Grid item xl={3}>
                    <Button variant="contained" size="medium" color="primary" onClick={handleSend}>
                      Send Email
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Contact;
