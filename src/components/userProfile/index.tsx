import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { SectionCard } from "../card";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import dayjs from "dayjs"

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
              CHILD DETAILS
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Name: {data?.userData?.childName}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Date Of Birth: {dayjs(data?.userData?.childDateOfBirth).format("DD-MM-YYYY")}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Gender: {data?.userData?.childGender}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Birth Certificate Number: {data?.userData?.childBirthCertificate}
            </Typography>
          </Box>
        </SectionCard>
        <SectionCard sx={{ pt: 5, pb: 5, pl: 15, pr: 15 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h5" component="div">
              GUARDIAN DETAILS
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Address: {data?.userData?.guardianAddress}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Email: {data?.userData?.guardianEmail}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Contact Number: {data?.userData?.guardianPhone}
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
