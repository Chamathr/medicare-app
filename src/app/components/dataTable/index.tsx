"use client";
import React, { useState } from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Box, Button } from "@mui/material";
import Loader from "../loader";

const fetchData = async () => {
  const response = await fetch("api/report-list");
  return response.json();
};

const DataTable: React.FC = () => {
  const router = useRouter();

  const { data: dataList, isLoading, error } = useQuery("user-list", fetchData);

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
          <Button
          variant="contained"
            onClick={() => router.push(`/users/${record._id}`)}
          >
            View Details
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Box>
        <Button variant="contained" onClick={() => router.push(`/users/add`)}>
          Add Data
        </Button>
      </Box>
      <Box sx={{mt: 3}}>
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
