import { AllCareerProps, CareerByIdProps } from "@/types";

export const fetchAllCarrers = async (): Promise<AllCareerProps> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}careers`).then((res) =>
    res.json()
  );

export const fetchCareerById = async (id: string): Promise<CareerByIdProps> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}careers/${id}`).then((res) =>
    res.json()
  );
