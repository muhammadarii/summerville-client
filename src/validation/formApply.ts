import { z } from "zod";

export const applyJobSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is too short"),
  resume: z.any().refine((file) => file instanceof File, {
    message: "Resume file is required",
  }),
});

export type ApplyJobSchema = z.infer<typeof applyJobSchema>;
