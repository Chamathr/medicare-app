import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { SectionCard } from "../card";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

const ProfileCard = (data: any) => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
        onClick={() => router.push("/users")}
      >
        <Avatar sx={{ bgcolor: "#00008B" }} variant="rounded">
          <HomeIcon />
        </Avatar>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
        <SectionCard sx={{ pt: 5, pb: 5, pl: 15, pr: 15 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h5" component="div">
              {data?.userData?.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Age: {data?.userData?.age}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Email: {data?.userData?.email}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Score: {data?.userData?.score}
            </Typography>
          </Box>
        </SectionCard>
      </Box>
    </>
  );
};

export default ProfileCard;
