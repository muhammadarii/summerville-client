"use client";
import React from "react";
import { DataTable } from "./Table/data-table";
import { columns } from "./Table/columns";
import { useGetAllCareers } from "@/hooks/useCareers";

const CareerDashboardSection = () => {
  const { data, isLoading, error } = useGetAllCareers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col">
      <DataTable columns={columns} data={data?.careers ?? []} />
    </div>
  );
};

export default CareerDashboardSection;
