"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useUserDataStore } from '@/store';
import { Card } from '@mui/material';

const steps = [
  {
    id: 1,
    label: 'Step 1',
    factors: [
      "Fact 1",
      "Fact 2",
      "Fact 3",
      "Fact 4",
      "Fact 5"
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    id: 2,
    label: 'Step 2',
    factors: [
      "Fact 1",
      "Fact 2",
      "Fact 3",
      "Fact 4",
      "Fact 5"
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    id: 3,
    label: 'Step 3',
    factors: [
      "Fact 1",
      "Fact 2",
      "Fact 3",
      "Fact 4",
      "Fact 5"
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const Stepper = () => {

  const { userData, setUserData } = useUserDataStore()

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setUserData({ ...userData, [(steps[activeStep].id).toString()]: steps[activeStep].description })
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square={false}
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ minHeight: 500, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ maxWidth: 400, width: '100%', p: 2 }}>
          {steps[activeStep].description}
        </Box>
        <Card sx={{ maxWidth: 400, width: '100%', p: 4, marginTop: 'auto', mb: 5 }}>
          {steps[activeStep].factors?.map((item, key) => {
            return (
              <Box key={key} sx={{ p: 2 }}>{item}</Box>
            )
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
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
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
}

export default Stepper;