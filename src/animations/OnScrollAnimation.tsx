"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OnScrollAnimation = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".animate") as HTMLElement[];

    elements.forEach((el) => {
      const animType = el.dataset.anim || "fade-up";
      const animation = {
        opacity: 0,
        w: animType === "fade-down" ? -50 : 0,
        y: animType === "fade-up" ? 50 : 0,
        x: animType === "fade-left" ? -50 : 0,
        z: animType === "fade-right" ? 50 : 0,
        duration: 1,
        ease: "power3.out",
      };

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reset play reverse",
        },
        ...animation,
      });
    });
  }, []);

  return null;
};
