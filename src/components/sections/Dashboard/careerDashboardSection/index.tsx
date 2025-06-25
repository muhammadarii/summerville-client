"use client";

import React from "react";
import { useGetAllCareers } from "@/hooks/useCareers";
import { Button } from "@/components/ui/button";

const CareerDashboardSection = () => {
  const { data, isLoading, error } = useGetAllCareers();

  const handleEdit = (careerId: string) => {
    console.log("Edit career with ID:", careerId);
    // Nanti arahkan ke halaman edit atau tampilkan modal edit
  };

  const handleDelete = (careerId: string) => {
    console.log("Delete career with ID:", careerId);
    // Nanti sambungkan dengan API delete
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold mb-6">Careers Dashboard</h1>
      <div className="mb-6">
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
          Add Career
        </Button>
      </div>

      <section className="bg-black p-6 rounded-xl shadow mb-8 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4">No</th>
              <th className="p-4">Title</th>
              <th className="p-4">Description</th>
              <th className="p-4 w-[500px]">Requirements</th>
              <th className="p-4 w-[500px]">Responsibilities</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.careers.map((career, index) => (
              <tr
                key={career._id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="p-4 text-white">{index + 1}</td>
                <td className="p-4 text-white">{career.title}</td>

                <td className="p-4 text-white truncate max-w-xs">
                  {career.description}
                </td>

                <td className="p-4 text-white max-w-[300px] overflow-y-auto">
                  <ul className="list-disc list-inside space-y-1">
                    {career.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </td>

                <td className="p-4 text-white max-w-[300px] overflow-y-auto">
                  <ul className="list-disc list-inside space-y-1">
                    {career.responsibility.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </td>

                <td className="p-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-yellow-500 text-black hover:bg-yellow-400"
                    onClick={() => handleEdit(career._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(career._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CareerDashboardSection;
