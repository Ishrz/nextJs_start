export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            New Collection 2026
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Style that
            <span className="block text-blue-600">
              speaks for you.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Discover premium fashion, accessories and lifestyle products
            designed to make every day a little better.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gray-900 px-7 py-3 font-medium text-white transition hover:bg-blue-600">
              Shop Now →
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-7 py-3 font-medium transition hover:bg-gray-50">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Fashion collection"
            className="h-[450px] w-full rounded-3xl object-cover md:h-[500px]"
          />

          {/* Floating Price Card */}
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur">
            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <p className="text-2xl font-bold">
              ₹499
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}