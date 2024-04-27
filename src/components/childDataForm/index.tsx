"use client";
import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IUser, useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";
import { SectionCard } from "../card";
import Avatar from "@mui/material/Avatar";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

interface FormData {
  childName: string;
  childDateOfBirth: Dayjs | null;
  childGender: string;
  childBirthCertificate: string;
}

const ChildDataFormComponent = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const userDetails = userData?.user as IUser;

  const [date, setDate] = useState<Dayjs | null>(
    userDetails?.childDateOfBirth ? dayjs(userDetails?.childDateOfBirth) : null
  );

  const defaultValues = useMemo(() => {
    return {
      childName: userDetails?.childName || "",
      childDateOfBirth: date,
      childGender: userDetails?.childGender || "",
      childBirthCertificate: userDetails?.childBirthCertificate || "",
    };
  }, [userDetails, date]);

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
      riskFactors: userData?.riskFactors,
      user: {
        ...userDetails,
        ...data,
        childDateOfBirth: date?.toString() ?? "",
      },
      score: userData?.score,
      severityLevel: userData?.severityLevel,
    });
    router.push("/users/add/guardian");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/users")}
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
            Child Data
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
            border: "1px solid #fc7703",
          }}
        >
          <Box>
            <Controller
              name="childName"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="childName"
                    label="Name*"
                    variant="outlined"
                    error={!!errors.childName}
                    size="small"
                  />
                </>
              )}
            />
            {errors.childName && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.childName.message}
              </Box>
            )}
          </Box>
          <Box sx={{ maxWidth: "220px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Date of Birth*"
                  value={date}
                  onChange={(newValue: any) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box>
            <Controller
              name="childGender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth size="small">
                  <InputLabel id="age-label">Gender*</InputLabel>
                  <Select labelId="age-label" id="age" {...field}>
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Box>
            <Controller
              name="childBirthCertificate"
              control={control}
              rules={{ required: "Birth certificaton number is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="childBirthCertificate"
                    label="Birth Certificaton Number*"
                    variant="outlined"
                    error={!!errors.childBirthCertificate}
                    size="small"
                  />
                </>
              )}
            />
            {errors.childBirthCertificate && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.childBirthCertificate.message}
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
          Next
        </Button>
      </Box>
    </form>
  );
};

export default ChildDataFormComponent;
