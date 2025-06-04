"use client";
import {
  FaRegEdit,
  FaRegCopy,
  FaRandom,
  FaRegImages,
  FaReadme,
  FaPuzzlePiece,
  FaPenFancy,
  FaPause,
  FaIdBadge,
  FaDev,
  FaDesktop,
  FaBoxOpen,
  FaChromecast,
  FaColumns,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Design",
    description:
      "At SummerVille, we believe in the power of design to make a difference. We specialize in crafting visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
    service: [
      {
        nameService: "User Experience (UX) Design",
        serviceType: [
          {
            icon: <FaRegEdit className="text-[#9EFF00] w-6 h-6" />,
            name: "User Research and Persona Development",
          },
          {
            icon: <FaRegCopy className="text-[#9EFF00] w-6 h-6" />,
            name: "Information Architecture and Wireframing",
          },
          {
            icon: <FaRandom className="text-[#9EFF00] w-6 h-6" />,
            name: "Interactive Prototyping and User Testing",
          },
          {
            icon: <FaRegImages className="text-[#9EFF00] w-6 h-6" />,
            name: "UI Design and Visual Branding",
          },
        ],
      },
      {
        nameService: "User Interface (UI) Design",
        serviceType: [
          {
            icon: <FaReadme className="text-[#9EFF00] w-6 h-6" />,
            name: "Intuitive and Visually Appealing Interface Design",
          },
          {
            icon: <FaPuzzlePiece className="text-[#9EFF00] w-6 h-6" />,
            name: "Custom Iconography and Illustration",
          },
          {
            icon: <FaPenFancy className="text-[#9EFF00] w-6 h-6" />,
            name: "Typography and Color Palette Selection",
          },
          {
            icon: <FaPause className="text-[#9EFF00] w-6 h-6" />,
            name: "Responsive Design for Various Devices",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Development",
    description:
      "At SummerVille, we specialize in building high-quality, scalable, and performant digital solutions that bring ideas to life.",
    service: [
      {
        nameService: "Web Development",
        serviceType: [
          {
            icon: <FaIdBadge className="text-[#9EFF00] w-6 h-6" />,
            name: "Frontend Development",
          },
          {
            icon: <FaDev className="text-[#9EFF00] w-6 h-6" />,
            name: "Backend Development",
          },
          {
            icon: <FaDesktop className="text-[#9EFF00] w-6 h-6" />,
            name: "Content Management System (CMS) Integration",
          },
          {
            icon: <FaBoxOpen className="text-[#9EFF00] w-6 h-6" />,
            name: "E-Commerce Platform Development",
          },
        ],
      },
      {
        nameService: "Mobile App Development",
        serviceType: [
          {
            icon: <FaCogs className="text-[#9EFF00] w-6 h-6" />,
            name: "Native IOS and Android App Development",
          },
          {
            icon: <FaColumns className="text-[#9EFF00] w-6 h-6" />,
            name: "Cross-Platform App Development",
          },
          {
            icon: <FaCodeBranch className="text-[#9EFF00] w-6 h-6" />,
            name: "App Prototyping and UI/UX Design Integration",
          },
          {
            icon: <FaChromecast className="text-[#9EFF00] w-6 h-6" />,
            name: "App Testing, Deployment, and Maintenance",
          },
        ],
      },
    ],
  },
];

export const ServiceSection = () => {
  return (
    <div className="flex flex-col px-4  py-10 gap-20">
      {data.map((section) => (
        <div key={section.id} className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">{section.title}</h1>
          <p className="text-sm text-gray-300 max-w-3xl">
            {section.description}
          </p>
          <div className="flex items-center justify-start bg-[#262626] w-fit rounded-md px-3 py-1 text-sm text-white">
            Our {section.title.toLowerCase()} services include:
          </div>

          {section.service.map((service, index) => (
            <div key={index}>
              <h2 className="mt-6 text-xl font-semibold text-white">
                {service.nameService}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {service.serviceType.map((type, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start bg-[#1e1e1e] p-5 rounded-lg"
                  >
                    <div className="flex items-center justify-center bg-black rounded-md p-3 mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-white text-lg font-medium">
                      {type.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
