import { Mail, FileText, School, Users, HeartHandshake, GraduationCap } from "lucide-react";

export default function OnlinePortal() {
  const links = [
    { title: "Admission", icon: School },
    { title: "Web Mail", icon: Mail },
    { title: "UoA E-Office", icon: FileText },
    { title: "Samarth Portal", icon: Users },
    { title: "Corporate Social Responsibility (CSR)", icon: HeartHandshake, wide: true },
    { title: "Endowment Scholarship", icon: GraduationCap }
  ];

  return (
    <section className="w-full py-16 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-900 mb-12 tracking-wide">
          ONLINE PORTAL
        </h2>

        <div className="flex flex-col items-center gap-6">

          {/* ROW 1 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl
                  shadow-lg border border-sky-700 transition transform hover:-translate-y-1
                  hover:shadow-2xl hover:bg-sky-700 min-w-[140px] sm:min-w-[160px] justify-center flex-1"
                >
                  <Icon size={22} className="sm:w-6 sm:h-6" />
                  <span className="font-medium text-sm sm:text-base truncate">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
            {links.slice(4).map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className={`
                    flex items-center gap-2 sm:gap-3 bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl
                    shadow-lg border border-sky-700 transition transform hover:-translate-y-1
                    hover:shadow-2xl hover:bg-sky-700
                    ${item.wide ? "w-full sm:w-[420px] justify-center" : "min-w-[140px] sm:min-w-[160px] justify-center flex-1"}
                  `}
                >
                  <Icon size={22} className="sm:w-6 sm:h-6" />
                  <span className="font-medium text-sm sm:text-base truncate">{item.title}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
