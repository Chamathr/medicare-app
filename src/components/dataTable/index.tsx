"use client";
import React, { useState } from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import Loader from "../loader";
import { fetchUserList } from "@/helpers/users";
import { MainButton } from "../button";

const DataTable: React.FC = () => {
  const router = useRouter();

  const { data: dataList, isLoading, error } = useQuery("user-list", fetchUserList);

  if (isLoading) return <Loader />;

  if (error) return <Box>Error: {error.toString()}</Box>;

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <>
          <MainButton
            onClick={() => router.push(`/users/${record._id}`)}
          >
            Profile
          </MainButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Box>
        <MainButton onClick={() => router.push(`/users/add`)}>
          Add Data
        </MainButton>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Table
          columns={columns}
          dataSource={dataList?.data}
          pagination={false}
        />
      </Box>
    </>
  );
};

export default DataTable;
