import Link from "next/link";
import { getProduct } from "../../../lib/api";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-white px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/shop"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Shop
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex h-[500px] items-center justify-center rounded-3xl bg-gray-50 p-10">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm uppercase tracking-widest text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-bold">
                ${product.price}
              </span>

              <span className="text-sm text-gray-500">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <button className="mt-8 rounded-full bg-gray-900 px-8 py-4 font-medium text-white transition hover:bg-blue-600">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}