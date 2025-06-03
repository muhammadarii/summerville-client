"use client";
import { CardJob } from "@/components/parts/CardDesign";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const data = [
  {
    image: "/images/careers/web-developer.jpg",
    title: "UI Designer",
    description:
      "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Web Developer",
    description:
      "Join our team as a Web Developer and bring your coding skills to life. Work on exciting projects, develop responsive websites, and ensure optimal performance across devices. Collaborate with designers and stakeholders to create seamless user experiences.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Project Manager",
    description:
      "As a Project Manager, you will lead cross-functional teams to deliver projects on time and within scope. Your organizational skills and leadership will be key in ensuring successful project execution and client satisfaction.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Graphic Designer",
    description:
      "Unleash your creativity as a Graphic Designer. Create visually compelling designs for digital and print media, collaborate with marketing teams, and contribute to brand development. Your artistic vision will help shape our agency's identity.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Content Strategist",
    description:
      "Join us as a Content Strategist and craft compelling narratives that resonate with our audience. Develop content strategies, create engaging copy, and optimize content for SEO to enhance our online presence.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Digital Marketing Specialist",
    description:
      "As a Digital Marketing Specialist, you will drive online campaigns, analyze performance metrics, and optimize strategies to increase brand visibility. Your expertise in digital marketing will play a crucial role in our agency's growth.",
  },
  {
    image: "/images/careers/web-developer.jpg",
    title: "Data Analyst",
    description:
      "Join our team as a Data Analyst and turn data into actionable insights. Analyze trends, create reports, and support decision-making processes to enhance our agency's performance and client outcomes.",
  },
];

export const JobOpening = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: -50,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play reset play reverse",
              markers: false,
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-3xl">Current Openings</h1>
      <p className="text-[12px] font-extralight mt-4 lg:pr-8">
        We are always on the lookout for talented individuals who are passionate
        about creating exceptional digital experiences. Whether your a designer,
        engineer, project manager, or have skills that align with our agency
        mission, we encourage you to explore our open positions.
      </p>
      <div className="flex items-center justify-center">
        <div className="mt-10 grid grid-cols-3 gap-4">
          {data.map((job, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="w-full"
            >
              <CardJob
                image={job.image}
                title={job.title}
                description={job.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
