"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScrollProps } from "@/types";

gsap.registerPlugin(ScrollTrigger);

export const RevealOnScrollLeft = ({ children, from }: RevealOnScrollProps) => {
  const elRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elRef.current, {
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 95%",
          end: "170% 5%",
          toggleActions: "play reset play reverse",
        },
        opacity: 0,
        x: -100,
        duration: 2,
        ease: "power3.out",
        ...from,
      });
    }, elRef);

    return () => ctx.revert();
  }, [from]);

  return (
    <div
      ref={elRef}
      className=" flex flex-col items-center justify-center w-full"
    >
      {children}
    </div>
  );
};
