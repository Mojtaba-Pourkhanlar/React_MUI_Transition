import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const styleLink = {
    textDecoration: "none",
    margin: "0 20px",
  };

  return (
    <Box components="div" sx={{ textAlign: "center", mt: "80px" }}>
      <Typography variant="h3" mb="20px">
        Material UI Transitions
      </Typography>
      <Typography variant="h4" mb="100px">
        Transitions help to make a UI expressive and easy to use.
      </Typography>

      <Link to="/zoom" style={styleLink}>
        <Button variant="contained" color="secondary">
          Zoom
        </Button>
      </Link>

      <Link to="/fade" style={styleLink}>
        <Button variant="contained" color="warning">
          Fade
        </Button>
      </Link>

      <Link to="/slide" style={styleLink}>
        <Button variant="contained" color="error">
          Slide
        </Button>
      </Link>
    </Box>
  );
};
