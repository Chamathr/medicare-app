"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00008B",
    },
  },
});

const ScoreBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ textAlign: "center", borderRadius: "10px" }}
      >
        <Stack direction="row" spacing={2.2} p={2}>
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
