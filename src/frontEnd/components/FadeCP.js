import { Button, Grid, Typography, Fade } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const FadeCP = () => {
  return (
    <Grid container mt="50px" rowSpacing={5}>
      <Grid item xs={12} textAlign="center">
        <Fade in timeout={1000}>
          <Typography variant="h3">Fade</Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} textAlign="center" >
        <Fade in timeout={2000}>
          <Typography variant="h4">
            Fade in from transparent to opaque.
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Fade in timeout={3000}>
            <Button variant="contained" color="warning">
              Back
            </Button>
          </Fade>
        </Link>
      </Grid>
    </Grid>
  );
};
