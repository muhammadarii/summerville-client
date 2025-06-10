export interface RevealOnScrollProps {
  children: React.ReactNode;
  from?: gsap.TweenVars;
  className?: string;
}

export interface CareerProps {
  data: CareerResponse | undefined;
  careers: Career[] | undefined;
}

interface CareerResponse {
  message: string;
  careers: Career[];
}

interface Career {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  requirements: string[];
  applicants: Applicant[];
}

interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  resume: string;
}
