import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Email from "../models/Email";
import EmailStore from "../stores/EmailStore";

export interface IMainPage {}

const MainPage: React.FC<IMainPage> = (props: IMainPage) => {
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
        <Grid container justify="center" style={{ padding: "15em" }}>
          <Grid item>Your message has been sent. I will respond as soon as I can. </Grid>
        </Grid>
      )}
      {!emailSent && (
        <Grid container justifyContent="center" alignItems="center" style={{ padding: "7em" }}>
          <Grid item xl={6}>
            <Grid container>
              <Grid item xl={12}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xl={6}>
                    <TextField name="from_name" label="Name" variant="outlined" style={{ width: "100%" }} onChange={handleChange} />
                  </Grid>
                  <Grid item xl={6}>
                    <TextField name="email_address" label="Email" variant="outlined" style={{ width: "100%" }} onChange={handleChange} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={12}>
                <Grid container style={{ paddingTop: "1em" }}>
                  <Grid item xl={12}>
                    <TextField
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={12}>
                <Grid container justifyContent="flex-end" style={{ paddingTop: "1em", textAlign: "right" }}>
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

export default MainPage;
