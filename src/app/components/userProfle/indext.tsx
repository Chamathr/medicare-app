import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ProfileCard = (userData: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Card sx={{ pt: 5, pb: 5, pl: 15, pr: 15 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography variant="h5" component="div">
            {userData?.name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Age: {userData?.age}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Email: {userData?.email}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Score: {userData?.score}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileCard;
