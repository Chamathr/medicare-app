import React from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Avatar, Box, Button } from "@mui/material";
import Loader from "../loader";
import { fetchUserList } from "@/helpers/users";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import dayjs from "dayjs";
import { useUserDataStore } from "@/store";
import HomeIcon from "@mui/icons-material/Home";

const DataTable = () => {
  const router = useRouter();
  const { reSetUserData } = useUserDataStore();

  const {
    data: dataList,
    isLoading,
    error,
  } = useQuery("user-list", fetchUserList);

  if (isLoading) return <Loader />;

  if (error) return <Box>Error: {error.toString()}</Box>;

  const columns = [
    { title: "Name", dataIndex: "childName", key: "childName" },
    { title: "Gender", dataIndex: "childGender", key: "childGender" },
    {
      title: "Date Of Birth",
      dataIndex: "childDateOfBirth",
      key: "childDateOfBirth",
      render: (dateOfBirth: string) => dayjs(dateOfBirth).format("DD-MM-YYYY"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <>
          <Button onClick={() => router.push(`/users/${record._id}`)}>
            <Avatar sx={{ bgcolor: "#fc7703", zoom: 0.8 }} variant="rounded">
              <AssignmentIndIcon />
            </Avatar>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Box display={'flex'}>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
          onClick={() => router.push("/")}
        >
          <Avatar sx={{ bgcolor: "#fc7703" }} variant="rounded">
            <HomeIcon />
          </Avatar>
        </Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center", ml: 3 }}
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
