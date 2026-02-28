import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Hero = () => {
  const cards = [
    { id: 1, bg: "bg-[url('./assets/01.jpg')]", order: "01", title: "About", path: "/about" },
    { id: 2, bg: "bg-[url('./assets/02.jpg')]", order: "02", title: "Experience", path: "experience" },
    { id: 3, bg: "bg-[url('./assets/03.jpg')]", order: "03", title: "Work", path: "work" },
    { id: 4, bg: "bg-[url('./assets/04.jpg')]", order: "04", title: "Contact", path: "contact" },
  ];

  return (
    <div className="flex flex-col items-center gap-6 font-custom px-8 py-10 h-screen">
      <div>
        <p className="text-main text-9xl uppercase">Emmy Manning</p>
        <div className="flex justify-end items-center gap-2">
          <p className="text-main text-2xl">AI Cloud Engineer ー</p>
          <Icon icon="foundation:social-linkedin" width="40" height="40" className="text-main cursor-pointer hover:opacity-70 transition-all duration-300 ease-out" />
          <Icon icon="proicons:github" width="40" height="40" className="text-main cursor-pointer hover:opacity-70 transition-all duration-300 ease-out" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 w-2/3 h-full">
        {cards.map((card, index) => (
          <Link key={card.id} to={card.path}>
            <div key={index} className={`bg-cover bg-center shadow-2xl rounded cursor-pointer hover:opacity-70 transition-all duration-300 ease-out h-full ${card.bg}`}>
              <div className="px-4">
                <p className="text-white text-9xl">{card.order}</p>
                <p className="border border-white"></p>
                <p className="text-white text-3xl pt-2">{card.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
