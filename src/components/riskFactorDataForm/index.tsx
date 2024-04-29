"use client";
import React, { useMemo } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IRiskFactors, useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";
import { SectionCard } from "../card";
import Avatar from "@mui/material/Avatar";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

interface FormData {
  prematureBirth: boolean;
  lowBirthWeight: boolean;
  neonatalICUStay: boolean;
  historyOfSeizures: boolean;
  geneticStructuralMalformations: boolean;
  medicationsInfectionsDuringPregnancy: boolean;
  antepartumHaemorrhage: boolean;
  hypoxicIschemicEncephalopathy: boolean;
  hydrocephalus: boolean;
  neonatalMeningitisSepsis: boolean;
  kernicterus: boolean;
  neonatalHypoglycaemia: boolean;
  cranioCerebralTrauma: boolean;
  apparentLifeThreateningEvent: boolean;
  paraSurgicalTrauma: boolean;
  neurologicalConditions?: string;
  neurologicalConditionsFamily?: string;
  specialNotes?: string;
}

const RiskFactorDataFormComponent = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const riskFactorData = userData?.riskFactors as IRiskFactors;

  const defaultValues = useMemo(() => {
    return {
      prematureBirth: riskFactorData?.prematureBirth || false,
      lowBirthWeight: riskFactorData?.lowBirthWeight || false,
      neonatalICUStay: riskFactorData?.neonatalICUStay || false,
      historyOfSeizures: riskFactorData?.historyOfSeizures || false,
      geneticStructuralMalformations:
        riskFactorData?.geneticStructuralMalformations || false,
      medicationsInfectionsDuringPregnancy:
        riskFactorData?.medicationsInfectionsDuringPregnancy || false,
      antepartumHaemorrhage: riskFactorData?.antepartumHaemorrhage || false,
      hypoxicIschemicEncephalopathy:
        riskFactorData?.hypoxicIschemicEncephalopathy || false,
      hydrocephalus: riskFactorData?.hydrocephalus || false,
      neonatalMeningitisSepsis:
        riskFactorData?.neonatalMeningitisSepsis || false,
      kernicterus: riskFactorData?.kernicterus || false,
      neonatalHypoglycaemia: riskFactorData?.neonatalHypoglycaemia || false,
      cranioCerebralTrauma: riskFactorData?.cranioCerebralTrauma || false,
      apparentLifeThreateningEvent:
        riskFactorData?.apparentLifeThreateningEvent || false,
      paraSurgicalTrauma: riskFactorData?.paraSurgicalTrauma || false,
      neurologicalConditions: riskFactorData?.neurologicalConditions || "",
      neurologicalConditionsFamily:
        riskFactorData?.neurologicalConditionsFamily || "",
      specialNotes: riskFactorData?.specialNotes || "",
    };
  }, [riskFactorData]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit = (data: FormData) => {
    setUserData({
      report: userData?.report,
      user: userData?.user,
      riskFactors: data,
      score: userData?.score,
      severityLevel: userData?.severityLevel,
    });
    router.push("/users/report");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/users/add/guardian")}
        >
          <Avatar sx={{ bgcolor: "#ffcc00" }} variant="rounded">
            <ReplyAllIcon />
          </Avatar>
        </Box>
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
            Risk Factors
          </Typography>
        </SectionCard>
        <SectionCard
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 3,
            gap: 3,
            pt: 8,
            pb: 8,
            pl: 8,
            pr: 8,
            border: "1px solid #ffcc00",
          }}
        >
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Premature birth?</FormLabel>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Controller
                  name="prematureBirth"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="true"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": {
                                color: "#ffcc00",
                              },
                            }}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": {
                                color: "#ffcc00",
                              },
                            }}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
              </Box>
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Low Birth Weight?</FormLabel>
              <Controller
                name="lowBirthWeight"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Neonatal ICU Stay?</FormLabel>
              <Controller
                name="neonatalICUStay"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">History Of Seizures?</FormLabel>
              <Controller
                name="historyOfSeizures"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Genetic structural malformations?
              </FormLabel>
              <Controller
                name="geneticStructuralMalformations"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Medications and/or infections during pregnancy?
              </FormLabel>
              <Controller
                name="medicationsInfectionsDuringPregnancy"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Antepartum haemorrhage?</FormLabel>
              <Controller
                name="antepartumHaemorrhage"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Hypoxic ischemic encephalopathy (HIE)?
              </FormLabel>
              <Controller
                name="hypoxicIschemicEncephalopathy"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Hydrocephalus?</FormLabel>
              <Controller
                name="hydrocephalus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Neonatal meningitis/sepsis?
              </FormLabel>
              <Controller
                name="neonatalMeningitisSepsis"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Kernicterus?</FormLabel>
              <Controller
                name="kernicterus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Neonatal hypoglycaemia?</FormLabel>
              <Controller
                name="neonatalHypoglycaemia"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Cranio-cerebral trauma?</FormLabel>
              <Controller
                name="cranioCerebralTrauma"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Apparent life-threatening event (ALTE)?
              </FormLabel>
              <Controller
                name="apparentLifeThreateningEvent"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Para-surgical trauma?</FormLabel>
              <Controller
                name="paraSurgicalTrauma"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#ffcc00",
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <Controller
              name="neurologicalConditions"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="neurologicalConditions"
                    label="Neurological Conditions"
                    variant="outlined"
                    error={!!errors.neurologicalConditions}
                    size="small"
                    fullWidth
                  />
                </>
              )}
            />
            {errors.neurologicalConditions && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.neurologicalConditions.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="neurologicalConditionsFamily"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="neurologicalConditionsFamily"
                    label="Neurological Conditions Of Family"
                    variant="outlined"
                    error={!!errors.neurologicalConditionsFamily}
                    size="small"
                    fullWidth
                  />
                </>
              )}
            />
            {errors.neurologicalConditionsFamily && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.neurologicalConditionsFamily.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="specialNotes"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="specialNotes"
                    label="Special Notes"
                    variant="outlined"
                    error={!!errors.specialNotes}
                    size="small"
                    fullWidth
                  />
                </>
              )}
            />
            {errors.specialNotes && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.specialNotes.message}
              </Box>
            )}
          </Box>
        </SectionCard>
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#ffcc00",
            "&:hover": {
              bgcolor: "#ebd834",
            },
          }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default RiskFactorDataFormComponent;
