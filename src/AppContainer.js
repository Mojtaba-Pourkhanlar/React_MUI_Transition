import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SlideCP, ZoomCP, FadeCP, Home } from "./frontEnd/components";
import { theme } from "./frontEnd/mui/theme";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zoom" element={<ZoomCP />} />
        <Route path="/fade" element={<FadeCP />} />
        <Route path="/slide" element={<SlideCP />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppContainer;
