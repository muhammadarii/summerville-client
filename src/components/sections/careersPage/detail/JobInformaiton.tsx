import { IoCheckmarkDoneOutline } from "react-icons/io5";

type JobDetailListProps = {
  title: string;
  data: string[];
};

export const JobInformation: React.FC<JobDetailListProps> = ({
  title,
  data,
}) => {
  return (
    <div className="p-6 bg-[#262626] rounded-2xl shadow-2xl">
      <h1 className="lg:text-2xl font-bold mb-4">{title}</h1>
      {data.map((item, index) => (
        <div key={index} className="flex items-baseline mb-4 gap-2">
          <IoCheckmarkDoneOutline className="text-xl text-[#9EFF00] shrink-0" />
          <p className="text-sm lg:text-base">{item}</p>
        </div>
      ))}
    </div>
  );
};
