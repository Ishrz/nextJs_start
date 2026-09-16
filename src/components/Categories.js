import React from 'react'

const categories = [
  {
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
  },
  {
    name: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561",
  },
];

const Categories = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Browse
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Shop by Category
            </h2>
          </div>

          <a
            href="#"
            className="hidden text-sm font-semibold text-blue-600 sm:block"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
                {category.name}
              </h3>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default Categories
