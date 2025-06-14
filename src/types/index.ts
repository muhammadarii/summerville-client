export interface RevealOnScrollProps {
  children: React.ReactNode;
  from?: gsap.TweenVars;
  className?: string;
}

export interface AllCareerProps {
  message: string;
  careers: Career[];
}

export interface CareerByIdProps {
  career: Career;
}

export interface Career {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  requirements: string[];
  responsibility: string[];
  applicants: Applicant[];
  createdAt: string;
}

interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  resume: string;
}

export interface AllWorkProps {
  message: string;
  works: Work[];
}

export interface Work {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tag: string;
  createdAt: string;
}
