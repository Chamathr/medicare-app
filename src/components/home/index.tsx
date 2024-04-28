"use client";
import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SectionCard } from "../card";
import EyeImage from "../../assests/images/eye.jpg";
import { useRouter } from "next/navigation";
import { MainButton } from "../button";

const useStyles = makeStyles(() => ({
  avatar: {
    animation: "$bounce 3s infinite alternate",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-100px)",
    },
  },
}));

const HomeComponent = () => {
  const classes = useStyles();

  const router = useRouter();

  return (
    <>
      <SectionCard
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 500,
          mt: 3,
          width: { xs: 300, sm: 500 },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Avatar
                className={classes.avatar}
                src={EyeImage.src}
                sx={{ width: 180, height: "auto" }}
              />
            </Box>
            <MainButton
              type="submit"
              variant="contained"
              onClick={() => router.push("/users")}
              sx={{
                mt: 5,
                fontSize: 20
              }}
            >
              LETS START
            </MainButton>
          </Box>
        </Grid>
      </SectionCard>
    </>
  );
};

export default HomeComponent;
