import { Button, Grid, Typography, Zoom } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ZoomCP = () => {
  return (
    <Grid container mt="50px" rowSpacing={5}>
      <Grid item xs={12} textAlign={"center"}>
        <Zoom in timeout={300}>
          <Typography variant="h3">Zoom</Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Zoom in timeout={800}>
          <Typography variant="h4">
            Expand outwards from the center of the child element.
          </Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Zoom in timeout={1400}>
          <Typography variant="h5">
            This example also demonstrates how to delay the enter transition
          </Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Zoom in timeout={2000}>
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Zoom>
        </Link>
      </Grid>
    </Grid>
  );
};
