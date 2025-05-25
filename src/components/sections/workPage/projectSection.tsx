import { CardProject } from "@/components/parts/CardDesign";

const data = [
  {
    title: "Tech Innovators",
    description:
      "We partnered with Tech Innovators to create a cutting-edge mobile application that revolutionized the way users interact with technology. The app featured intuitive navigation, real-time updates, and advanced security measures, earning rave reviews from users and industry experts alike.",
    image: "/images/tech-innovators.png",
    tag: "Mobile App Development for Tech Innovators",
    url: "https://tech-innovators.com",
  },
  {
    title: "Green Earth Initiative",
    description:
      "For the Green Earth Initiative, we designed an interactive website that raised awareness about environmental issues. The site included engaging content, informative infographics, and a donation platform, helping the organization reach a wider audience and increase contributions.",
    image: "/images/green-earth-initiative.png",
    tag: "Website Design for Environmental Awareness",
    url: "https://greenearthinitiative.org",
  },
  {
    title: "HealthPlus",
    description:
      "We collaborated with HealthPlus to develop a comprehensive health and wellness platform. The platform featured personalized fitness plans, nutrition tracking, and telemedicine services, empowering users to take control of their health and well-being.",
    image: "/images/healthplus.png",
    tag: "Health and Wellness Platform Development",
    url: "https://healthplus.com",
  },
  {
    title: "EduTech Solutions",
    description:
      "EduTech Solutions engaged us to create an innovative e-learning platform that provided interactive courses and resources for students. The platform included features like progress tracking, quizzes, and community forums, enhancing the learning experience for users.",
    image: "/images/edutech-solutions.png",
    tag: "E-Learning Platform Development",
    url: "https://edutechsolutions.com",
  },
  {
    title: "Travel Explorer",
    description:
      "We designed a visually captivating travel booking website for Travel Explorer, enabling users to easily search and book flights, hotels, and vacation packages. The site featured stunning imagery, user reviews, and a seamless booking process.",
    image: "/images/travel-explorer.png",
    tag: "Travel Booking Website Design",
    url: "https://travelexplorer.com",
  },
  {
    title: "Foodie Haven",
    description:
      "Foodie Haven partnered with us to create a food delivery app that connected users with local restaurants. The app featured real-time order tracking, personalized recommendations, and secure payment options, making it a favorite among food enthusiasts.",
    image: "/images/foodie-haven.png",
    tag: "Food Delivery App Development",
    url: "https://foodiehaven.com",
  },
  {
    title: "Fitness Fusion",
    description:
      "We developed a fitness tracking app for Fitness Fusion that allowed users to monitor their workouts, set goals, and connect with trainers. The app's user-friendly interface and advanced analytics helped users achieve their fitness objectives.",
    image: "/images/fitness-fusion.png",
    tag: "Fitness Tracking App Development",
    url: "https://fitnessfusion.com",
  },
  {
    title: "Artistry Gallery",
    description:
      "Artistry Gallery engaged us to create an online art marketplace that showcased artists' works. The platform featured high-quality images, artist profiles, and secure payment options, providing a unique space for art enthusiasts to discover and purchase art.",
    image: "/images/artistry-gallery.png",
    tag: "Online Art Marketplace Development",
    url: "https://artistrygallery.com",
  },
];

export const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col py-20">
        <h1 className="text-4xl font-bold">At summerville</h1>
        <p className="text-[14px] font-light mt-2">
          We have had the privilege of working with a diverse range of clients
          and delivering exceptional digital products that drive success.
        </p>
        <div className="bg-[#262626] p-4 rounded-md w-fit mt-4 text-[12px] font-light">
          Here are ten examples of our notable works:
        </div>
      </div>
      <div className="grid grid-cols-2 items-start justify-items-center gap-10">
        {data.map((item, index) => (
          <CardProject
            key={index}
            image={item.image}
            title={item.title}
            tag={item.tag}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};
