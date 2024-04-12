"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useUserDataStore } from "@/store";
import { Card } from "@mui/material";
import RowRadioButtonsGroup from "../radioGroup";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    label: "Step 1",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 1`,
  },
  {
    id: 2,
    label: "Step 2",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 2`,
  },
  {
    id: 3,
    label: "Step 3",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 3`,
  },
  {
    id: 4,
    label: "Step 4",
    factors: ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
    description: `Description 4`,
  },
];

const Stepper = () => {
  const { userData, setUserData } = useUserDataStore();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [scoreData, setScoreData] = useState(
    userData?.[steps[activeStep].id.toString()] ?? {}
  );

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setUserData({
      ...userData,
      [steps[activeStep].id.toString()]: scoreData,
    });
    setScoreData(userData?.[steps[activeStep + 1].id.toString()] ?? {});
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setScoreData(userData?.[steps[activeStep - 1].id.toString()] ?? {});
  };

  return (
    <Box sx={{ minWidth: { xs: 300, sm: 500 }, flexGrow: 1 }}>
      <Paper
        square={false}
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box
        sx={{
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ minWidth: { xs: 300, sm: 500 }, width: "100%", p: 2 }}>
          {steps[activeStep].description}
        </Box>
        <Card
          sx={{
            minWidth: { xs: 300, sm: 500 },
            width: "100%",
            p: 4,
            marginTop: "auto",
            mb: 5,
          }}
        >
          {steps[activeStep].factors?.map((item, key) => {
            return (
              <>
                <Box sx={{ p: 1 }}>
                  <RowRadioButtonsGroup
                    label={item}
                    handleSelect={(data) =>
                      setScoreData({
                        ...scoreData,
                        [(key + 1).toString()]: parseInt(data),
                      })
                    }
                    radioValue={userData?.[steps[activeStep].id.toString()]?.[
                      key + 1
                    ]?.toString()}
                    userData={userData}
                  />
                </Box>
              </>
            );
          })}
        </Card>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Stepper;
