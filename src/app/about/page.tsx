import React from "react";
import AboutPageSection from "@/components/sections/aboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Welcome to summerville, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
  openGraph: {
    title: "About Us",
    description:
      "Welcome to summerville, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
    url: "https://summervilleintech.vercel.app/about",
    siteName: "summerville",
    images: [
      {
        url: "../../assets/images/summerville2.png",
        width: 1200,
        height: 630,
        alt: "Summerville Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutPageSection />
    </>
  );
};

export default AboutPage;
