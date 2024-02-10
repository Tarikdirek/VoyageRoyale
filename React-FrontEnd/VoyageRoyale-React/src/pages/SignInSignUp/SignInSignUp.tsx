import React from "react";
import SignUp from "../../components/Login/SignUp";
import Grid from "@mui/material/Grid";
import SignUpDetail from "../../components/Login/SignUpDetail";
import { Typography } from "@mui/material";

function SignInSignUp() {
  return (
    <>
      <Grid container sx={{ boxShadow: 10  }}>
        <Grid item xs={6} sx={{ padding: 5, pt:10}}>
          <SignUp />
        </Grid>
        <Grid item xs={6} sx={{ padding: 5, backgroundColor:"#0F4037", pt:10, pb:20}}>
          <SignUpDetail />
        </Grid>
      </Grid>
    </>
  );
}

export default SignInSignUp;
