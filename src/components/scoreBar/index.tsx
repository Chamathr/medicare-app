"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcc00",
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
        <Stack direction="row" spacing={4} pl={2} pr={2} pt={1} pb={1}>
          <Box>1</Box>
          <Box>3</Box>
          <Box>5</Box>
          <Box>7</Box>
          <Box>9</Box>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
};

export default ScoreBar;
