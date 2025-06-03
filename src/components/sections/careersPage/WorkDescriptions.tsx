import { RevealOnScroll } from "@/animations/RevealOnScroll";

const data = [
  {
    id: 1,
    title: "Innovative and Impactful Projects",
    description:
      "At summerville, we are committed to pushing the boundaries of technology and design. Our projects are not just about creating products; they are about making a difference in people's lives. Join us in shaping the future of digital experiences.",
  },
  {
    id: 2,
    title: "Supportive Environment",
    description:
      " We foster a culture of collaboration and support. Our team is made up of passionate individuals who are always willing to lend a helping hand. Whether you're a seasoned professional or just starting your career, you'll find a welcoming environment where your ideas are valued.",
  },
  {
    id: 3,
    title: "Continuous Learning and Growth",
    description:
      "We believe in investing in our team's growth. At summerville, you'll have access to ongoing training, mentorship, and opportunities to expand your skill set. We encourage you to take on new challenges and explore your potential in a dynamic and ever-evolving industry.",
  },
  {
    id: 4,
    title: "Challenging and Rewarding Work",
    description:
      " At summerville, we take pride in the quality of our work. We tackle complex problems and deliver innovative solutions that exceed client expectations. If you're looking for a place where your contributions are recognized and rewarded, you've found it here.",
  },
];

export const WorkDescriptions = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <div className="grid grid-cols-2 gap-8">
          {data.map((item) => (
            <div key={item.id} className="p-4 rounded-md shadow-2xl">
              <h1 className="text-[#D8FF99] text-[18px] font-semibold">
                {item.title}
              </h1>
              <p className="text-[12px] mt-8">{item.description}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};
