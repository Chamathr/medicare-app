"use client";
import React, { useMemo } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IUser, useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";
import { SectionCard } from "../card";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";

interface FormData {
  guardianName: string;
  guardianAddress: string;
  guardianEmail: string;
  guardianPhone: string;
}

const GuardianDataFormComponent: React.FC = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const userDetails = userData?.user as IUser;

  const defaultValues = useMemo(() => {
    return {
      guardianName: userDetails?.guardianName || "",
      guardianAddress: userDetails?.guardianAddress || "",
      guardianEmail: userDetails?.guardianEmail || "",
      guardianPhone: userDetails?.guardianPhone || "",
    };
  }, [userDetails]);

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
      user: {
        childName: userDetails?.childName,
        childDateOfBirth: userDetails?.childDateOfBirth,
        childGender: userDetails?.childGender,
        childBirthCertificate: userDetails?.childBirthCertificate,
        ...data,
      },
    });
    router.push("/users/report");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/users")}
        >
          <Avatar sx={{ bgcolor: "#00008B" }} variant="rounded">
            <HomeIcon />
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
          <Typography>Guardian Data</Typography>
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
            border: "1px solid #00008B",
          }}
        >
          <Box>
            <Controller
              name="guardianName"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="guardianName"
                    label="Name"
                    variant="outlined"
                    error={!!errors.guardianName}
                    size="small"
                  />
                </>
              )}
            />
            {errors.guardianName && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.guardianName.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="guardianAddress"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="guardianAddress"
                    label="Address"
                    variant="outlined"
                    error={!!errors.guardianAddress}
                    size="small"
                  />
                </>
              )}
            />
            {errors.guardianAddress && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.guardianAddress.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="guardianEmail"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="guardianAddress"
                    label="Email"
                    variant="outlined"
                    error={!!errors.guardianEmail}
                    size="small"
                    type="email"
                  />
                </>
              )}
            />
            {errors.guardianEmail && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.guardianEmail.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="guardianPhone"
              control={control}
              rules={{ required: "Contact number is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="guardianPhone"
                    label="Contact Number"
                    variant="outlined"
                    error={!!errors.guardianPhone}
                    size="small"
                  />
                </>
              )}
            />
            {errors.guardianPhone && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.guardianPhone.message}
              </Box>
            )}
          </Box>
        </SectionCard>
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#00008B" }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default GuardianDataFormComponent;