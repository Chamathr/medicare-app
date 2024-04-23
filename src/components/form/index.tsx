"use client";
import React, { useMemo } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IUser, useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";
import { SectionCard } from "../card";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";

interface FormData {
  name: string;
  email: string;
  age: string;
}

const FormComponent: React.FC = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const userDetails = userData?.user as IUser;

  const defaultValues = useMemo(() => {
    return {
      name: userDetails?.name || "",
      email: userDetails?.email || "",
      age: userDetails?.age?.toString() || "",
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
      user: { ...data, age: parseInt(data.age) },
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
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="name"
                    label="Name"
                    variant="outlined"
                    error={!!errors.name}
                  />
                </>
              )}
            />
            {errors.name && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.name.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    error={!!errors.email}
                  />
                </>
              )}
            />
            {errors.email && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.email.message}
              </Box>
            )}
          </Box>
          <Box>
            <Controller
              name="age"
              control={control}
              rules={{
                required: "Age is required",
                pattern: { value: /^\d+$/, message: "Age must be a number" },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    id="age"
                    label="Age"
                    variant="outlined"
                    type="number"
                    error={!!errors.age}
                  />
                </>
              )}
            />
            {errors.age && (
              <Box sx={{ color: "red", mt: 1, fontSize: "12px" }}>
                {errors.age.message}
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

export default FormComponent;
