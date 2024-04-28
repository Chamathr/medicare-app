"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc7703",
    },
  },
});


const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ textAlign: "center", height: "80px", justifyContent: "center" }}
      >
        <Toolbar sx={{ justifyContent: "center"}}>
          <Link href="/">
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "35px",
              }}
            >
              C-ME
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
