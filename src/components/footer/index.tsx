"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00008B",
    },
  },
});

const Footer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" sx={{ textAlign: "center" }}>
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            &copy; 2024
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
