"use client";
import Loader from "@/components/loader";
import ProfileCard from "@/components/userProfile";
import { fetchUserData } from "@/helpers/users";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

const Users = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery(["user-profile", id], () => fetchUserData(id));

  if (isLoading)
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Loader />
      </Box>
    );

  if (error) return <Box>Error: {error.toString()}</Box>;
  return (
    <>
      <ProfileCard userData={userData?.data} />
    </>
  );
};

export default Users;
