"use client";
import Loader from "@/app/components/loader";
import ProfileCard from "@/app/components/userProfle/indext";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

const fetchUserData = async (id: string) => {
  const response = await fetch(`api/report/${id}`);
  return response.json();
};

const Users = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery(["user-profile", id], () => fetchUserData(id));

  if (isLoading) return <Loader />;

  if (error) return <Box>Error: {error.toString()}</Box>;
  return (
    <>
      <ProfileCard userData={userData} />
    </>
  );
};

export default Users;
