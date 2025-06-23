export const applyForJob = async (
  data: FormData,
  careerId: string
): Promise<Response> =>
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}jobseekers/apply/${careerId}`,
    {
      method: "POST",
      body: data,
    }
  );
