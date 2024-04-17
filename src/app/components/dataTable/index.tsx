"use client";
import React, { useState } from "react";
import { Table, Button } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Box } from "@mui/material";

const fetchData = async () => {
  const response = await fetch("api/report-list");
  return response.json();
};

const DataTable: React.FC = () => {
  const router = useRouter();

  const { data: dataList, isLoading, error } = useQuery("user-list", fetchData);

  if (isLoading) return <Box>Loading...</Box>;

  if (error) return <Box>Error: {error.toString()}</Box>;

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: any) => (
        <>
          <Button
            type="primary"
            onClick={() => router.push(`/report/${record._id}`)}
          >
            View Details
          </Button>
          <Button
            type="primary"
            onClick={() => router.push(`/report/${record._id}`)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            onClick={() => {}}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataList?.data}
        // pagination={{
        //     total: dataList?.totalItems,
        //     pageSize: dataPerPage,
        //     pageSizeOptions: [5, 10, 20],
        //     onChange: handlePageChange,
        // }}
      />
      <Button type="primary" style={{ float: "right" }} onClick={() => {}}>
        Add Data
      </Button>
    </>
  );
};

export default DataTable;
