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
        onClick={() => router.push("/")}
      >
        <Avatar sx={{ bgcolor: "#ffcc00" }} variant="rounded">
          <HomeIcon />
        </Avatar>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        <SectionCard sx={{ pt: 5, pb: 5, pl: 5, pr: 5 }}>
          <Grid>
            <Box display="flex" justifyContent="center" mb={3}>
              <Typography variant="h5" component="div">
                CHILD DETAILS
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Name
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.childName}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Date Of Birth
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {dayjs(data?.userData?.childDateOfBirth).format("DD-MM-YYYY")}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Gender
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.childGender}
                </Box>
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Birth Certificate Number
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.childBirthCertificate}
                </Box>
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
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Name
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.guardianName}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Address
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.guardianAddress}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Email
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.guardianEmail}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Contact Number
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.guardianPhone}
                </Box>
              </Typography>
            </Box>
          </Grid>
        </SectionCard>
        <SectionCard sx={{ pt: 5, pb: 5, pl: 5, pr: 5 }}>
          <Grid width={"100%"}>
            <Box display="flex" justifyContent="center" mb={3}>
              <Typography variant="h5" component="div">
                RISK FACTOR DETAILS
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Premature Birth
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.prematureBirth ? "YES" : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Low Birth Weight
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.lowBirthWeight ? "YES" : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Neonatal ICU Stay
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.neonatalICUStay ? "YES" : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                History Of Seizures
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.historyOfSeizures
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Genetic structural malformations
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.geneticStructuralMalformations
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Medications and/or infections during pregnancy
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors
                    ?.medicationsInfectionsDuringPregnancy
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Antepartum haemorrhage
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.antepartumHaemorrhage
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Hypoxic ischemic encephalopathy (HIE)
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.hypoxicIschemicEncephalopathy
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Hydrocephalus
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.hydrocephalus ? "YES" : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Neonatal meningitis/sepsis
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.neonatalMeningitisSepsis
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Kernicterus
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.kernicterus ? "YES" : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Neonatal hypoglycaemia
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.neonatalHypoglycaemia
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Cranio-cerebral trauma
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.cranioCerebralTrauma
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Apparent life-threatening event (ALTE)
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.apparentLifeThreateningEvent
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Para-surgical trauma
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.paraSurgicalTrauma
                    ? "YES"
                    : "NO"}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Neurological Conditions
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.neurologicalConditions}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Neurological Conditions Of Family
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.neurologicalConditionsFamily}
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <Typography color="text.secondary" gutterBottom>
                Special Notes
              </Typography>
              <Typography
                textTransform="capitalize"
                color="text.secondary"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                }}
              >
                <Box sx={{ wordBreak: "break-word" }}>
                  {data?.userData?.riskFactors?.specialNotes}
                </Box>
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
            minHeight: 50,
            mt: 3,
            p: 2,
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
