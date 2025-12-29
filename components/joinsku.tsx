export default function Joinmsku() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* Background Image */}
          <img
            src="/rr.webp"
            alt="Campus Students"
            className="w-full h-[350px] sm:h-[400px] md:h-[480px] lg:h-[520px] object-cover transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight drop-shadow-xl">
              A World of Ideas, One Campus
              <br />
              Big Dreams Start on <span className="text-sky-300">SKU University</span>
            </h1>

            <p className="text-gray-200 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl text-base sm:text-lg leading-relaxed">
              Discover a vibrant, inclusive, and inspiring place to learn, grow, and connect.
              At SKU University, campus life goes beyond the classroom—it's where futures
              are built, friendships are formed, and dreams take flight. Join us and be part
              of something extraordinary.
            </p>

            {/* Button */}
            <button className="mt-6 sm:mt-8 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-xl transition transform hover:-translate-y-1">
              Join SKU Today →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
