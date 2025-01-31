import { GiNotebook } from "react-icons/gi";

const Circular = () => {

  const circularData = [
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
    {
      title: "Denouncing Terrorism",
      link: "https://unicresult.info/#",
    },
    {
      title: "Denouncing Terrorism",
      link: "https://unicresult.info/#",
    },
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
  ];

  return (
    <section className="border-red-600 bg-slate-50 border-[3px] p-10 rounded-md">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">CIRCULARS</h2>
        <div className="bg-slate-300 w-full h-[1px]"></div>
      </div>
      <div className="space-y-4 mt-14">
        {circularData.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="flex items-center gap-3 text-xl hover:text-blue-700 transition-all duration-200"
          >
            <GiNotebook />
            <h2>{item?.title}</h2>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Circular;