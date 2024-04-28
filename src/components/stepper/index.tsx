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
import { Avatar, Card } from "@mui/material";
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
    factors: ["Test value to test how behave when we have longer texts in scorng area", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 1`,
    weight: 2,
  },
  {
    id: 2,
    label: "Step 2",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 2`,
    weight: 1,
  },
  {
    id: 3,
    label: "Step 3",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 3`,
    weight: 2,
  },
  {
    id: 4,
    label: "Step 4",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 4`,
    weight: 1,
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
          justifyContent: 'center',
          height: 50,
          pl: 2,
          mt: 3,
        }}
      >
        <Typography variant="h6">{steps[activeStep].label}</Typography>
      </SectionCard>
      <Box
        sx={{
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <SectionCard
          sx={{
            minWidth: { xs: 300, sm: 500 },
            width: "100%",
            p: 4,
            mt: 5,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box sx={{ width: { sm: "50%" } }}>
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
          <MainButton type="submit" variant="contained" onClick={handleSubmit}>
            NEXT
          </MainButton>
        </Box>
      )}
    </Box>
  );
};

export default Stepper;
