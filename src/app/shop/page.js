import Link from "next/link";
import { getProducts } from "../../lib/api";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Store
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            All Products
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-64 items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase text-gray-400">
                  {product.category}
                </p>

                <h2 className="mt-2 line-clamp-2 font-semibold">
                  {product.title}
                </h2>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ${product.price}
                  </span>

                  <span className="text-sm text-blue-600">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}