import { RevealOnScroll } from "@/animations/RevealOnScroll";

export const WelcomeSection = () => {
  return (
    <div className="mt-8">
      <RevealOnScroll
        from={{ opacity: 0, x: -100 }}
        className="flex items-start justify-start"
      >
        <div className="w-screen lg:w-[870px] px-4 lg:px-0">
          <h1 className="lg:text-3xl">
            Welcome to summerville, where talent meets opportunity
          </h1>
          <p className="text-[12px] font-extralight mt-4">
            At summerville, we believe that great ideas come from diverse minds.
            We are committed to fostering an inclusive and collaborative
            environment where creativity thrives. Join us in shaping the future
            of digital experiences and making a meaningful impact.
          </p>

          <div className="w-[220px] h-[40px] bg-[#262626] rounded-[8px] flex items-center justify-center mt-5">
            <p className="text-[14px] font-extralight">
              Why Work at summerville?
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};
