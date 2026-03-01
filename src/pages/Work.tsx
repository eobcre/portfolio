import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Image from "../assets/bg-image-03.png";

const Work = () => {
  const work = [
    { id: 1, title: "Amazon Bedrock x LEGO Train", path: "https://github.com/eobcre/lego-ai-project", desc: `` },
    { id: 2, title: "AWS x RAG", path: "https://github.com/eobcre/bedrock-rag-project", desc: `` },
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
          <img src={Image} alt="Image" width={400} height={400} className="absolute inset-0 object-cover opacity-10" />
          <p className="text-9xl font-semibold">Work</p>
          <p className="px-4">Cloud-native and AI-powered projects built on AWS.</p>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-16 col-span-2 overflow-y-auto px-30 py-30">
        {work.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{item.title}</p>
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                <Icon icon="proicons:github" width="40" height="40" className="cursor-pointer hover:opacity-70 transition-all duration-300 ease-out" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor ex corrupti ut sit eos, iste laudantium voluptates sapiente aperiam, labore vitae maiores ea qui eius laborum
              doloremque porro officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor ex corrupti ut sit eos, iste laudantium voluptates sapiente aperiam, labore vitae maiores
              ea qui eius laborum doloremque porro officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor ex corrupti ut sit eos, iste laudantium voluptates sapiente aperiam,
              labore vitae maiores ea qui eius laborum doloremque porro officiis.
            </p>
            {/* underline */}
            <span className="bg-gray-200 w-full h-px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
