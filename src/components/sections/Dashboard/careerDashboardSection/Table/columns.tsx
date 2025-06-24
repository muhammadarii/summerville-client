"use client";

import { Career } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Career>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imageUrl}
        alt="Career Image"
        className="w-20 h-20 object-cover rounded-md"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Job Description",
    cell: ({ row }) => (
      <div className="max-w-xs line-clamp-3">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "requirements",
    header: "Requirements",
    cell: ({ row }) => (
      <ul className="list-disc list-inside space-y-1">
        {row.original.requirements.map((req: string, index: number) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    ),
  },
  {
    accessorKey: "responsibility",
    header: "Responsibility",
    cell: ({ row }) => (
      <ul className="list-disc list-inside space-y-1">
        {row.original.responsibility.map((res: string, index: number) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    ),
  },
];
