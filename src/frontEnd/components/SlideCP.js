import React from "react";
import { Button, Grid, Typography, Slide } from "@mui/material";
import { Link } from "react-router-dom";

export const SlideCP = () => {
  return (
    <Grid container mt="50px" rowSpacing={5}>
      <Grid item xs={12} textAlign={"center"}>
        <Slide direction="down" in timeout={500}>
          <Typography variant="h3">Slide</Typography>
        </Slide>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Slide direction="left" in timeout={700}>
          <Typography variant="h4">
            Slide in from the edge of the screen.
          </Typography>
        </Slide>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Slide direction="right" in timeout={900}>
          <Typography variant="h5">
            The Transition component's mountOnEnter prop prevents the
            <br /> child component from being mounted until in is true.
          </Typography>
        </Slide>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Slide direction="up" in timeout={1000}>
            <Button variant="contained" color="error">
              Back
            </Button>
          </Slide>
        </Link>
      </Grid>
    </Grid>
  );
};
