import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Email from "../models/Email";
import EmailStore from "../stores/EmailStore";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

const Contact: React.FC = () => {
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
    <ComponentNavBarWrapper>
      <>
      {emailSent && (
        <Grid container xs={12} justifyContent="center" className="afterSend">
          <Grid item>Your message has been sent. I will respond as soon as I can. </Grid>
        </Grid>
      )}
      {!emailSent && (
        <Grid container justifyContent="center" alignItems="center" className="main">
          <Grid item xl={6}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} sm={6}>
                    <TextField name="from_name" label="Name" variant="outlined" className="longInputs" onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField name="email_address" label="Email" variant="outlined" className="longInputs" onChange={handleChange} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className="textAreaContainer">
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      className="longInputs"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="flex-end" className="sendButton">
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
      )}</>
    </ComponentNavBarWrapper>
  );
};

export default Contact;
