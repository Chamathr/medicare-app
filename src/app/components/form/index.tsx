"use client";
import React, { useState } from "react";
import { Box, Button, Card, TextField } from "@mui/material";
import { useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";

const FormComponent: React.FC = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserData({
      report: userData?.report,
      user: { ...formData, age: parseInt(formData?.age) },
    });
    router.push("/users/report");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleNext}>
        <Box>
          <Card sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 8, pb: 8, pl: 5, pr: 5}}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              id="age"
              name="age"
              label="Age"
              variant="outlined"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </Card>
        </Box>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FormComponent;
