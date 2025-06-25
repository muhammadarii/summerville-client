"use client";

import React from "react";
import { useDeleteCareer, useGetAllCareers } from "@/hooks/useCareers";
import BaseTable from "@/components/parts/BaseTable";
import { createCareerColumns } from "./column";

const CareerDashboardSection = () => {
  const { data, isLoading, error } = useGetAllCareers();
  const deleteCareer = useDeleteCareer();

  const handleEdit = (careerId: string) => {
    console.log("Edit career with ID:", careerId);
    // Nanti arahkan ke halaman edit atau tampilkan modal edit
  };

  const handleDelete = (careerId: string) => {
    if (confirm("Are you sure you want to delete this career?")) {
      deleteCareer.mutate(careerId);
    }
  };

  const columns = createCareerColumns({ handleEdit, handleDelete });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold mb-6">Career Dashboard</h1>
      <section className="bg-black p-6 rounded-xl shadow mb-8 overflow-x-auto">
        <h3 className="text-xl font-medium mb-4 text-white">Career Table</h3>
        <BaseTable columns={columns} data={data?.careers ?? []} />
      </section>
    </div>
  );
};

export default CareerDashboardSection;
