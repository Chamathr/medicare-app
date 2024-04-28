import React from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "react-query";
import { Avatar, Box, Button } from "@mui/material";
import Loader from "../loader";
import { deleteUserData, fetchUserList } from "@/helpers/users";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useUserDataStore } from "@/store";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColumnType } from 'antd/es/table';

const DataTable = () => {
  const router = useRouter();
  const { reSetUserData } = useUserDataStore();

  const {
    data: dataList,
    isLoading: isUserListLoading,
    error: isUserListError,
    refetch: refetchUserList,
  } = useQuery("user-list", fetchUserList);

  const {
    mutate: mutateDeleteUser,
    isLoading: isDeleteLoading,
    error: isDeleteError,
  } = useMutation(deleteUserData, {
    onSuccess: () => {
      refetchUserList();
    },
    onError: () => {
      const err = isDeleteError as Error;
      window.alert(err.message);
    },
  });

  const handleDelete = (id: string) => {
    try {
      mutateDeleteUser(id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isUserListLoading)
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Loader />
      </Box>
    );

  if (isUserListError) return <Box>Error: {isUserListError.toString()}</Box>;

  const columns: ColumnType<any>[] = [
    {
      title: "Name",
      dataIndex: "childName",
      key: "childName",
      width: "50%",
      render: (text: string) => (
        <Box sx={{ wordBreak: "break-word" }}>{text}</Box>
      ),
    },
    {
      title: "Gender",
      dataIndex: "childGender",
      key: "childGender",
      width: "30%",
      render: (text: string) => (
        <Box sx={{ wordBreak: "break-word", textTransform: "capitalize" }}>
          {text}
        </Box>
      ),
    },
    {
      title: "Profile",
      key: "actions",
      width: "20%",
      align: 'center',
      render: (record: any) => (
        <>
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => router.push(`/users/${record._id}`)}>
              <Avatar sx={{ bgcolor: "#fc7703", zoom: 0.8 }} variant="rounded">
                <AssignmentIndIcon />
              </Avatar>
            </Button>
            <Button onClick={() => handleDelete(record._id)} sx={{ ml: -3 }}>
              <Avatar sx={{ bgcolor: "#fc7703", zoom: 0.8 }} variant="rounded">
                <DeleteIcon />
              </Avatar>
            </Button>
          </Box>
        </>
      ),
    },
  ] 

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/")}
        >
          <Avatar sx={{ bgcolor: "#fc7703" }} variant="rounded">
            <HomeIcon />
          </Avatar>
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            ml: 3,
          }}
          onClick={() => {
            reSetUserData();
            router.push("/users/add/child");
          }}
        >
          <Avatar sx={{ bgcolor: "#fc7703" }} variant="rounded">
            <CreateNewFolderIcon />
          </Avatar>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Table
          columns={columns}
          dataSource={dataList?.data}
          pagination={false}
          style={{
            border: "1px solid #fc7703",
            borderRadius: "5px",
          }}
        />
      </Box>
    </>
  );
};

export default DataTable;
