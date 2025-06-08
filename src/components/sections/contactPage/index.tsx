import { ContactForm } from "@/components/parts/ContactForm";
import { Footer } from "@/components/parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaRegEnvelope,
  FaTiktok,
} from "react-icons/fa";
import { FAQSection } from "../landingPage/FAQSection";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

const ContactPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Contact Us"
          description="Get in touch with us today and let us help you with any questions or inquiries you may have."
        />
      </RevealOnScroll>
      <RevealOnScroll from={{ opacity: 0, x: -100 }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mt-5">
          <div className="flex flex-row items-center gap-2 bg-[#262626] p-4 rounded-lg shadow-md">
            <FaRegEnvelope className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">work@summerville.com</p>
          </div>
          <div className="flex flex-row items-center gap-2 bg-[#262626] p-4 rounded-lg shadow-md">
            <FaPhone className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">+62 812 7587 9191</p>
          </div>
          <div className="flex flex-row items-center gap-2 bg-[#262626] p-4 rounded-lg shadow-md">
            <FaLocationArrow className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">Tangerang, Indonesia</p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll from={{ opacity: 0, y: 100 }}>
        <ContactForm />
      </RevealOnScroll>
      <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-4">
        <div className="flex flex-row items-center gap-4">
          <p className="font-light text-[14px]">Operating Days</p>
          <div className="bg-[#262626] p-4 rounded-md font-light text-[14px]">
            Monday to Friday
          </div>
        </div>
        <div className="flex flex-col items-end md:flex-row md:items-center justify-end gap-4">
          <p className="font-light text-[14px]">Stay Connected</p>
          <div className="flex flex-row items-center gap-2">
            <FaInstagram className="text-[#9EFF00] text-3xl" />
            <FaLinkedin className="text-[#9EFF00] text-3xl" />
            <FaTiktok className="text-[#9EFF00] text-3xl" />
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ContactPageSection;
