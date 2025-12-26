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
    <section className="w-full  py-16">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-sky-900 mb-12 tracking-wide">
          ONLINE PORTAL
        </h2>

        <div className="flex flex-col items-center gap-6">

          {/* ROW 1 */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className="flex items-center gap-3 bg-sky-600 text-white px-6 py-3 rounded-xl
                  shadow-lg border border-sky-700 transition transform hover:-translate-y-1
                  hover:shadow-2xl hover:bg-sky-700"
                >
                  <Icon size={26} />
                  <span className="font-medium whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.slice(4).map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className={`flex items-center gap-3 bg-sky-600 text-white px-6 py-3 rounded-xl
                  shadow-lg border border-sky-700 transition transform hover:-translate-y-1
                  hover:shadow-2xl hover:bg-sky-700
                  ${item.wide ? "w-[420px] justify-center" : ""}`}
                >
                  <Icon size={26} />
                  <span className="font-medium whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
