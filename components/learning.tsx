export default function Learning() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 flex justify-center items-center m-1 ">

      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 transform transition duration-500 hover:shadow-[0_20px_60px_rgba(14,165,233,0.3)]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="group">

            {/* HEADING */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-tight mb-15 tracking-tight transition duration-500 group-hover:text-sky-700">
              A Leading and<br />
              Diverse University<br />
              with a strong<br />
              commitment.
            </h1>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl transition transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/kk.webp"
                alt="University Campus"
                className="w-full object-cover rounded-2xl transition duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-sky-800 leading-relaxed">

            <p className="mb-4 text-lg animate-fadeIn">
              Founded with a vision of excellence, our university began as a small
              institution with a bold dream — to empower minds and shape the
              future. Over the years, it has grown into one of the most diverse
              and dynamic universities in the region.
            </p>

            <p className="mb-6 text-lg animate-fadeIn animation-delay-200">
              With a commitment to innovation, research, and community impact, we
              continue to inspire the next generation of leaders and changemakers.
              The university stands as a beacon of opportunity and success.
            </p>

            {/* FEATURE LIST */}
            <div className="space-y-3 mb-8">
              {[
                "Quality Education & Skill Development",
                "Career Opportunities & Higher Earning Potential",
                "Networking & Connections",
                "Personal Growth & Independence",
                "Access to Research & Innovation"
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-sky-50 border border-sky-100 rounded-xl p-3 transition duration-300 hover:bg-sky-100 hover:shadow-md"
                >
                  <span className="bg-sky-600 text-white w-8 h-8 flex justify-center items-center rounded-full text-sm font-bold shadow">
                    ✓
                  </span>
                  <p className="font-medium">{text}</p>
                </div>
              ))}
            </div>

           

          </div>
        </div>
      </div>
    </main>
  );
}
