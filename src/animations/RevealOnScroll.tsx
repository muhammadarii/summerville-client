"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScrollProps } from "@/types";

gsap.registerPlugin(ScrollTrigger);

export const RevealOnScroll = ({
  children,
  from,
  className,
}: RevealOnScrollProps) => {
  const elRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elRef.current, {
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reset play reverse",
        },
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
      className={`relative flex flex-col items-center justify-center w-full ${className}`}
    >
      {children}
    </div>
  );
};
