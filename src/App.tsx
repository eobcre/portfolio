const App = () => {
  const cards = [
    { id: 1, bg: "bg-[url('./assets/01.jpg')]", order: "01", title: "About" },
    { id: 2, bg: "bg-[url('./assets/02.jpg')]", order: "02", title: "Experience" },
    { id: 3, bg: "bg-[url('./assets/03.jpg')]", order: "03", title: "Work" },
    { id: 4, bg: "bg-[url('./assets/04.jpg')]", order: "04", title: "Contact" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 px-8 py-10 h-screen">
      <div>
        <p className="font-custom text-main text-9xl uppercase">Emmy Manning</p>
        <p className="font-custom text-main text-2xl text-right">AI Cloud Engineer</p>
      </div>
      <div className="grid grid-cols-4 gap-4 w-2/3 h-full">
        {cards.map((card, index) => (
          <div key={index} className={`bg-cover bg-center shadow-2xl rounded cursor-pointer hover:opacity-70 ${card.bg}`}>
            <div className="px-4">
              <p className="text-white text-9xl font-custom">{card.order}</p>
              <p className="border border-white"></p>
              <p className="text-white text-3xl font-custom pt-2">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
