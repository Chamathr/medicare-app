import React from "react";
import { Box, Card, Typography } from "@mui/material";

const ProfileCard = (data: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Card sx={{ pt: 5, pb: 5, pl: 15, pr: 15, bgcolor: 'rgba(255, 255, 255, 0.5)', boxShadow: 'none'  }}>
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
      </Card>
    </Box>
  );
};

export default ProfileCard;
