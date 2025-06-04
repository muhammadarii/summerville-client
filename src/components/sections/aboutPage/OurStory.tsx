"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    title: "Design",
    description:
      "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
  },
  {
    id: 2,
    title: "Engineering",
    description:
      "As the design department grew, the team realized that their vision would only be complete with a strong engineering team. They sought out skilled engineers who shared their passion for building exceptional digital products. Together, the design and engineering teams worked hand-in-hand to create seamless, user-centric experiences that exceeded client expectations.",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
  },
  {
    id: 5,
    title: "Client-Centric Approach",
    description:
      "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
  },
  {
    id: 6,
    title: "Driving Success",
    description:
      "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
  },
];

export const OurStory = () => {
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
    <div className="flex flex-col mt-28 mx-8 lg:mx-0">
      <h1 className="text-2xl md:text-[40px] font-bold">Our Story</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 mt-10 justify-items-center lg:gap-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex flex-col"
          >
            <div className="flex flex-row items-center text-[#D8FF99] gap-2">
              <span className="text-[100px]">0{index + 1}</span>
              <h1>{item.title}</h1>
            </div>
            <p className="text-[14px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
