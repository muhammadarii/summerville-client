import { CareerProps } from "@/types";

export const fetchCarrers = async (): Promise<CareerProps> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}careers`).then((res) =>
    res.json()
  );
