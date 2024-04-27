import React from "react";
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { SectionCard } from "../card";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
          width: { xs: 300, sm: 400 },
        }}
      >
        <SectionCard sx={{ pt: 5, pb: 5, pl: 5, pr: 5 }}>
          <Grid>
            <Box display="flex" justifyContent="center" mb={3}>
              <Typography variant="h5" component="div">
                CHILD DETAILS
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Name
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.childName}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Date Of Birth
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {dayjs(data?.userData?.childDateOfBirth).format("DD-MM-YYYY")}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Gender
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.childGender}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Birth Certificate Number
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.childBirthCertificate}
              </Typography>
            </Box>
          </Grid>
        </SectionCard>
        <SectionCard sx={{ pt: 5, pb: 5, pl: 5, pr: 5 }}>
          <Grid>
            <Box display="flex" justifyContent="center" mb={3}>
              <Typography variant="h5" component="div">
                GUARDIAN DETAILS
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Name
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.guardianName}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Address
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.guardianAddress}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Email
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.guardianEmail}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Contact Number
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.guardianPhone}
              </Typography>
            </Box>
          </Grid>
        </SectionCard>
        <SectionCard sx={{ pt: 5, pb: 5, pl: 5, pr: 5 }}>
          <Grid>
            <Box display="flex" justifyContent="center" mb={3}>
              <Typography variant="h5" component="div">
                RISK FACTOR DETAILS
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Premature Birth
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
              >
                {data?.userData?.riskFactors?.prematureBirth ? 'YES' : 'NO'}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Low Birth Weight
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
              >
                {data?.userData?.riskFactors?.lowBirthWeight ? 'YES' : 'NO'}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Neonatal ICU Stay
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
              >
                {data?.userData?.riskFactors?.neonatalICUStay ? 'YES' : 'NO'}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                History Of Seizures
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
              >
                {data?.userData?.riskFactors?.historyOfSeizures ? 'YES' : 'NO'}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Neurological Conditions
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.riskFactors?.neurologicalConditions}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography color="text.secondary" gutterBottom>
                Neurological Conditions Of Family
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {data?.userData?.riskFactors?.neurologicalConditionsFamily}
              </Typography>
            </Box>
          </Grid>
        </SectionCard>
        <SectionCard
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            mt: 3,
          }}
        >
          <Typography textTransform="uppercase" variant="h6">
            SCORE : {data?.userData?.score}
          </Typography>
        </SectionCard>
        <SectionCard
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              mt: 3,
            }}
          >
            <Typography textTransform="uppercase" variant="h6">
              {data?.userData?.severityLevel}
            </Typography>
          </SectionCard>
      </Box>
    </>
  );
};

export default ProfileCard;
