import React from 'react'

const products = [
  {
    name: "Classic Oversized T-Shirt",
    price: "₹999",
    oldPrice: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Premium Sneakers",
    price: "₹2,499",
    oldPrice: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Minimal Watch",
    price: "₹1,799",
    oldPrice: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    name: "Leather Backpack",
    price: "₹1,499",
    oldPrice: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
];

function Products() {
  return (
    <div>
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Trending
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Popular Products
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl bg-white"
              >

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow hover:text-red-500">
                    ♡
                  </button>
                </div>

                <div className="p-5">

                  <h3 className="font-semibold">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-lg font-bold">
                      {product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
                    Add to Cart
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
