"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc7703",
    },
  },
});

const ScoreBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ textAlign: "center", borderRadius: "10px", color: '#ffffff' }}
      >
        <Stack direction="row" spacing={2.2} pl={2} pr={2} pt={1} pb={1}>
          <Box>0.5</Box>
          <Box>1.0</Box>
          <Box>1.5</Box>
          <Box>2.0</Box>
          <Box>2.5</Box>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
};

export default ScoreBar;
