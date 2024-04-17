"use client";
import DataTable from "../components/dataTable";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Users = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataTable />
      </QueryClientProvider>
    </>
  );
};

export default Users;
