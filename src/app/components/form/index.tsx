"use client";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Card, TextField } from "@mui/material";
import { useUserDataStore } from "@/store";
import { useRouter } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const FormComponent: React.FC = () => {
  const router = useRouter();
  const { userData, setUserData } = useUserDataStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const classes = useStyles();

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserData({
      report: userData?.report,
      user: { ...formData, age: parseInt(formData?.age) },
    });
    router.push('/report')
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleNext}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default FormComponent;
