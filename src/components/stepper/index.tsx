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
import { IReport, IUser, useUserDataStore } from "@/store";
import { Avatar, Card } from "@mui/material";
import RowRadioButtonsGroup from "../radioGroup";
import { useEffect, useState } from "react";
import { getScore } from "@/utils/report";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import Loader from "../loader";
import { addUserData } from "@/helpers/users";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { MainButton } from "../button";
import { SectionCard } from "../card";

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
  const {
    mutate: mutateUserData,
    isLoading,
    error,
  } = useMutation(addUserData, {
    onSuccess: () => {
      router.push(`/users`);
    },
    onError: () => {
      const err = error as Error;
      window.alert(err.message);
    },
  });

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

      const body = JSON.stringify({
        name: userData?.user?.name,
        email: userData?.user?.email,
        age: userData?.user?.age,
        report,
        score: getScore(report),
      });
      mutateUserData(body);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ minWidth: { xs: 300, sm: 500 }, flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Box>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => router.push("/users/add")}
        >
          <Avatar sx={{ bgcolor: "#00008B" }} variant="rounded">
            <ReplyAllIcon />
          </Avatar>
        </Box>
      </Box>
      <SectionCard
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          mt: 3,
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
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
                    radioValue={reportData?.[steps[activeStep].id.toString()]?.[
                      key + 1
                    ]?.toString()}
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
          border: "1px solid #00008B",
          color: "#00008B",
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
              color: "#00008B",
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
            Submit
          </MainButton>
        </Box>
      )}
    </Box>
  );
};

export default Stepper;
