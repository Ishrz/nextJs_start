import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">Product Not Found</h1>

      <p className="mt-4 text-gray-600">
        Sorry, the product you are looking for does not exist.
      </p>

      <Link
        href="/shop"
        className="mt-8 rounded-full bg-gray-900 px-6 py-3 text-white transition hover:bg-blue-600"
      >
        Back to Shop
      </Link>
    </div>
  );
}