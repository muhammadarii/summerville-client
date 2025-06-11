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

      const animationProps: gsap.TweenVars = {
        opacity: 0,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
      };

      switch (animType) {
        case "fade-up":
          animationProps.y = 50;
          break;
        case "fade-down":
          animationProps.y = -50;
          break;
        case "fade-left":
          animationProps.x = -50;
          break;
        case "fade-right":
          animationProps.x = 50;
          break;
      }

      gsap.from(el, {
        ...animationProps,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
    });
  }, []);

  return null;
};
