"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IReport, IUser, useUserDataStore } from "@/store";
import { Avatar } from "@mui/material";
import RowRadioButtonsGroup from "../radioGroup";
import { useState } from "react";
import { getScore } from "@/utils/report";
import { useRouter } from "next/navigation";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { MainButton } from "../button";
import { SectionCard } from "../card";
import ScoreBar from "../scoreBar";

const steps = [
  {
    id: 1,
    label: "Light Gazing",
    factors: [
      "Non purposeful gaze,photophobia, no visual fixing to light, no fixation on anything",
      "Look at object when illuminated only",
      "Prefer illuminated object, But can look at other objects (Non illuminated)",
      "Can be distracted by light, But looks well without light",
      "Looks well, Not distracted by light",
    ],
    weight: 8,
  },
  {
    id: 2,
    label: "Colour Preference",
    factors: [
      "Attends only in near spaces to a single colour -  visual  attention not good enough to a identify a favourite colour",
      "Strong single colour Preference 'Favourite Colour'",
      "Can identify objects, environments with 2,3 colours (within 4-6 field) 2 or 3 favourite colours",
      "More colours, familiar patterns regarded, but not all colours",
      "No colours or patterns preference",
    ],
    weight: 7,
  },
  {
    id: 3,
    label: "Need For Movement",
    factors: [
      "Attends only targets with movement and or reflective properties. ( May attentive to ceiling fan)",
      "Movement needed to establish attention on target/ destination but not needed for continuation",
      "Distract from target when movement in environment, movements not necessary to initiate looking",
      "Movement is not required for attention within 3 to 4 feet but needed beyond this. Not distracted in near spaces by environmental movements",
      "Movement not necessary for near or distant vision, typical response to moving targets",
    ],
    weight: 6,
  },
  {
    id: 4,
    label: "Visual Field Preference",
    factors: [
      "Distinct field preference,( one eye for peripheral and other I for Central vision)",
      "Yours both right and left peripheral fields. But will continue to show strong preference for original peripheral field",
      "Visual field preference not seen in familiar inputs with near activities",
      "Increasing use of right and left fields for near and distant activities ( preference not always seen even in distant vision)",
      "Visual fields unrestricted",
    ],
    weight: 6,
  },
  {
    id: 5,
    label: "Difficulty With Distance Viewing",
    factors: [
      "Attends near space only less than 2 feet",
      "Occasional visual attention to familiar, moving or large targets at 2 to 4 feet",
      "Visual attention extends beyond near space up to 4-6 feet",
      "Visual attention extends to 10 feet with targets that produce movement ( not to all objects)",
      "Visual attention extends beyond 20 feet",
    ],
    weight: 9,
  },
  {
    id: 6,
    label: "Visual Reflective Response",
    factors: [
      "No blink in response to touch and no visual threat response",
      "Blink in response to touch, but response may be latent ( not immediate). No threat response",
      "Blink in response to touch inconsistently present, intermittent visual threat response",
      "Visual threat inconsistent, touch consistent",
      "Visual reflexes always present",
    ],
    weight: 4,
  },
  {
    id: 7,
    label: "Visual Latency",
    factors: [
      "Prolonged periods of visual latency ( delay to initiate). Than 15 seconds",
      "Decrease in latency after periods of consistent viewing",
      "Latency present only when the baby is tired, stressed over overstimulated",
      "Latency is rarely present",
      "No delay ( latency resolved)",
    ],
    weight: 8,
  },
];

const Stepper = () => {
  const router = useRouter();

  const { userData, setUserData } = useUserDataStore();

  const reportData = userData?.report as IReport;
  const userDetails = userData?.user as IUser;

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [scoreData, setScoreData] = useState(
    reportData?.[steps[activeStep].id.toString()] ?? {}
  );

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setUserData({
      user: userDetails,
      report: {
        ...reportData,
        [steps[activeStep].id.toString()]: scoreData,
      },
      riskFactors: userData?.riskFactors,
      score: userData?.score,
      severityLevel: userData?.severityLevel,
    });
    setScoreData(reportData?.[steps[activeStep + 1].id.toString()] ?? {});
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setScoreData(reportData?.[steps[activeStep - 1].id.toString()] ?? {});
  };

  const handleSubmit = async () => {
    try {
      const report = {
        ...userData?.report,
        [steps[activeStep].id.toString()]: scoreData,
      };

      setUserData({
        report: report,
        riskFactors: userData?.riskFactors,
        user: userData?.user,
        score: getScore(report, steps),
        severityLevel: userData?.severityLevel,
      });
      router.push("/users/add/final");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ width: { xs: 300, sm: 500 }, flexGrow: 1 }}>
      <Box>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => router.push("/users/add/risk-factors")}
        >
          <Avatar sx={{ bgcolor: "#fc7703" }} variant="rounded">
            <ReplyAllIcon />
          </Avatar>
        </Box>
      </Box>
      <SectionCard
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          pl: 2,
          mt: 3,
        }}
      >
        <Typography textTransform="uppercase" variant="h6">{steps[activeStep].label}</Typography>
      </SectionCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <SectionCard
          sx={{
            width: "100%",
            p: 4,
            mt: 5,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box sx={{ width: { sm: "50%" }, marginBottom: { xs: 3, sm: 0 } }}>
              <ScoreBar />
            </Box>
          </Box>
          {steps[activeStep].factors?.map((item, key) => {
            return (
              <>
                <Box sx={{ p: 1 }}>
                  <RowRadioButtonsGroup
                    label={item}
                    handleSelect={(data) =>
                      setScoreData({
                        ...scoreData,
                        [(key + 1).toString()]: parseInt(data) / 2,
                      })
                    }
                    radioValue={(
                      reportData?.[steps[activeStep].id.toString()]?.[key + 1] *
                      2
                    )?.toString()}
                    userData={userData}
                  />
                </Box>
              </>
            );
          })}
        </SectionCard>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <MobileStepper
          sx={{
            width: "100%",
            borderRadius: "5px",
            bgcolor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            border: "1px solid #fc7703",
            color: "#fc7703",
          }}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              sx={{
                color: "#fc7703",
                fontWeight: 700,
              }}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              sx={{
                color: "#fc7703",
                fontWeight: 700,
              }}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        {activeStep === maxSteps - 1 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              margin: "auto",
              pt: 3,
            }}
          >
            <MainButton
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              NEXT
            </MainButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Stepper;
