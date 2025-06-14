import { AllWorkProps } from "@/types";

export const fetchAllWorks = async (): Promise<AllWorkProps> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}works`).then((res) =>
    res.json()
  );

export const fetchWorkById = async (id: string): Promise<AllWorkProps> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}works/${id}`).then((res) =>
    res.json()
  );
