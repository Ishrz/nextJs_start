import Link from "next/link";
import { getProducts } from "../../lib/api";
import ProductBrowser from "@/src/components/ProductBrowser";

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


          <ProductBrowser products={products} />

      </div>
    </main>
  );
}