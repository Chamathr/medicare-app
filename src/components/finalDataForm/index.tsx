"use client";
import React, { useMemo } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";
import { SectionCard } from "../card";
import Avatar from "@mui/material/Avatar";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useMutation } from "react-query";
import { addUserData } from "@/helpers/users";
import Loader from "../loader";

interface FormData {
  severityLevel: string;
}

const FinalDataFormComponent = () => {
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
  const severityLevel = userData?.severityLevel as string;

  const defaultValues = useMemo(() => {
    return {
      severityLevel: userData?.severityLevel || "",
    };
  }, [severityLevel]);

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
      riskFactors: userData?.riskFactors,
      score: userData?.score,
      severityLevel: data?.severityLevel,
    });
    try {
      const body = JSON.stringify({
        childName: userData?.user?.childName,
        childDateOfBirth: userData?.user?.childDateOfBirth,
        childGender: userData?.user?.childGender,
        childBirthCertificate: userData?.user?.childBirthCertificate,
        guardianName: userData?.user?.guardianName,
        guardianAddress: userData?.user?.guardianAddress,
        guardianEmail: userData?.user?.guardianEmail,
        guardianPhone: userData?.user?.guardianPhone,
        report: userData?.report,
        riskFactors: userData?.riskFactors,
        score: userData?.score,
        severityLevel: data?.severityLevel,
      });
      console.log({
        childName: userData?.user?.childName,
        childDateOfBirth: userData?.user?.childDateOfBirth,
        childGender: userData?.user?.childGender,
        childBirthCertificate: userData?.user?.childBirthCertificate,
        guardianName: userData?.user?.guardianName,
        guardianAddress: userData?.user?.guardianAddress,
        guardianEmail: userData?.user?.guardianEmail,
        guardianPhone: userData?.user?.guardianPhone,
        report: userData?.report,
        riskFactors: userData?.riskFactors,
        score: userData?.score,
        severityLevel: data?.severityLevel,
      });
      mutateUserData(body);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Loader />
        </Box>
      )}
      <Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/users/report")}
        >
          <Avatar sx={{ bgcolor: "#fc7703" }} variant="rounded">
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
            Final Assessment
          </Typography>
        </SectionCard>
        {userData?.score && (
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
              SCORE : {userData?.score}
            </Typography>
          </SectionCard>
        )}
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
            border: "1px solid #fc7703",
          }}
        >
          <Box>
            <Controller
              name="severityLevel"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="severityLevel"
                    label="Severity Level"
                    variant="outlined"
                    error={!!errors.severityLevel}
                    size="small"
                  />
                </>
              )}
            />
            {errors.severityLevel && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.severityLevel.message}
              </Box>
            )}
          </Box>
        </SectionCard>
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#fc7703" }}
        >
          SUBMIT
        </Button>
      </Box>
    </form>
  );
};

export default FinalDataFormComponent;
