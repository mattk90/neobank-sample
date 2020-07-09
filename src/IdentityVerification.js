import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ProductPresentation from "./components/ProductPresentation";
import VerifyButton from "@passbase/button/react";
import Logo from "./components/Logo";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "40px",
    backgroundColor: "#000000"
  },
  kycDescription: {
    textAlign: "left",
    marginTop: "20px",
    marginBottom: "20px",
  }
}));

const SignInSide = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <ProductPresentation />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Logo />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FingerprintIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Identity Verification
          </Typography>
          <Typography className={classes.kycDescription} variant="p">
            We need to verify your identity to comply with regulations and
            partnered up with Passbase. Please complete the verification flow
            below to continue.
          </Typography>
          <VerifyButton
            apiKey=
            {"ebb8c2f2c2b27d10a1dfdf1bd0a882455b0f5cfcfd37f2a9020d24cfbe08feaa"}
            onFinished={(error, authKey, additionalAttributes) => {}}
            integrationType={"signup"}
            additionalAttributes={{
              customer_user_id: "SOME_USER_ID"
            }}
            prefillAttributes={{
              email: "",
              country: "en"
            }}
            theme={{
              accentColor: "",
              font: "Arial"
            }}
          />

          <form className={classes.form} noValidate>
            <Grid container spacing={2} />
            <Grid container justify="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Back
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
