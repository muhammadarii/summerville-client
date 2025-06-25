"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Career } from "@/types";
import { Button } from "@/components/ui/button";

type ColumnProps = {
  handleEdit: (careerId: string) => void;
  handleDelete: (careerId: string) => void;
};

export const createCareerColumns = ({
  handleEdit,
  handleDelete,
}: ColumnProps): ColumnDef<Career>[] => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <span className="text-white">{row.original.title}</span>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="text-white truncate max-w-[150px] block">
        {row.original.description}
      </span>
    ),
  },
  {
    accessorKey: "requirements",
    header: "Requirements",
    cell: ({ row }) => (
      <ul className="text-white list-disc list-inside space-y-1">
        {row.original.requirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    accessorKey: "responsibility",
    header: "Responsibilities",
    cell: ({ row }) => (
      <ul className="text-white list-disc list-inside space-y-1">
        {row.original.responsibility.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-yellow-500 text-black hover:bg-yellow-400"
          onClick={() => handleEdit(row.original._id)}
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => handleDelete(row.original._id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];
