import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Image from "../assets/bg-image-02.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      date: "2024 Feb ー 2025 Nov",
      title: "Full Stack Software Engineer",
      desc: `Designed, architected, and operated production-grade financial systems on AWS, supporting scalable and secure cloud-native workloads. 
             Developed a configurable Form Builder platform with role-based access control, workflow automation, and event-driven notifications.`,
      certificationMark: "Certifications ー ",
      certification: "AWS Certified Solutions Architect (SAA) | Developer Associate (DVA) | AI Foundations (AIF) | Cloud Practitioner (CLF)",
    },
    {
      id: 2,
      date: "2023 Oct ー 2024 Feb",
      title: "Software Engineer Internship - Team Lead",
      desc: `Led development of a cloud-deployed beauty services platform on AWS, delivering a scalable full stack application. 
             Collaborated cross-functionally to ensure cohesive architecture, system reliability, and optimized user experience.`,
    },
  ];

  return (
    <div className="grid grid-cols-4 text-main font-custom h-screen">
      {/* left */}
      <div className="flex flex-col gap-4 col-span-2 px-8 py-10">
        {/* back button */}
        <Link to="/" className="self-start">
          <Icon icon="ic:baseline-arrow-back-ios-new" width="30" height="30" className="cursor-pointer hover:opacity-70 transition-all duration-300 ease-out" />
        </Link>
        {/* page title */}
        <div className="relative flex flex-col justify-center items-center flex-1 gap-6">
          <img src={Image} alt="Image" width={600} height={600} className="absolute inset-0 top-20 object-cover opacity-10" />
          <p className="text-9xl font-semibold">Experience</p>
          <p className="px-4">2+ years of experience delivering web applications on AWS, expanding into AI and generative cloud systems.</p>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-16 col-span-2 overflow-y-auto px-30 py-30">
        {experience.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-4">
            <p className="text-sm">{item.date}</p>
            <p className="text-lg font-semibold">{item.title}</p>
            <p>{item.desc}</p>
            {index === 0 && (
              <p>
                <span className="font-semibold">{item.certificationMark}</span>
                {item.certification}
              </p>
            )}
            {/* underline */}
            <span className="bg-gray-200 w-full h-px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
