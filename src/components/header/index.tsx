"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define a custom theme with blue color
const theme = createTheme({
  palette: {
    primary: {
      main: "#00008B", // Blue color
    },
  },
});

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ textAlign: "center" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MEDICARE APP
          </Typography>
          {/* Add other header components or icons here */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
