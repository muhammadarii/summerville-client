const data = [
  {
    id: 1,
    title: "Innovative and Impactful Projects",
    description:
      "At SquareUp, you have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you be part of a team that creates products that make a difference.",
  },
  {
    id: 2,
    title: "Supportive Environment",
    description:
      "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    id: 3,
    title: "Continuous Learning and Growth",
    description:
      "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
  },
  {
    id: 4,
    title: "Challenging and Rewarding Work",
    description:
      "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
  },
];

export const WorkDescriptions = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
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
    </div>
  );
};
