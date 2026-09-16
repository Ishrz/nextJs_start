"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ProductBrowser({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 grid gap-4 md:grid-cols-3">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All Categories" : item}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none"
        >
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>

      {/* Product Count */}
      <p className="mb-6 text-sm text-gray-500">
        Showing {filteredProducts.length} products
      </p>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
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

            <p className="mt-5 text-xs uppercase text-gray-400">
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
          </Link>
        ))}

      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl font-semibold">
            No products found
          </p>

          <p className="mt-2 text-gray-500">
            Try another search or category.
          </p>
        </div>
      )}
    </div>
  );
}