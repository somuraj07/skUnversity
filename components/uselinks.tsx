import Image from "next/image";

export default function UsefulLinks() {

  const links = [
    { title: "INFLIBNET", img: "/image copy 6.png", url: "#" },
    { title: "UP CM Office", img: "/image copy 7.png", url: "#" },
    { title: "UGC", img: "/image copy 8.png", url: "#" },
    { title: "UGC MOOCs", img: "/image copy 9.png", url: "#" },
    { title: "Swayam Prabha", img: "/image copy 10.png", url: "#" },
    { title: "Cyber Dost", img: "/image copy 11.png", url: "#" }
  ];

  return (
    <section className="w-full py-10 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-sky-800 text-center mb-10 tracking-wide">
          USEFUL LINKS
        </h2>

        {/* Scroll container */}
        <div className="overflow-x-auto">
          
          {/* Single Row */}
          <div className="flex justify-center gap-8 whitespace-nowrap">

            {links.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="bg-white border-4 border-sky-200 rounded-md shadow-md 
                hover:shadow-xl transition transform hover:-translate-y-1 
                p-3 flex justify-center items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={220}
                  height={80}
                  className="object-contain h-20 w-30"
                />
              </a>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
