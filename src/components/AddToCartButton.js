"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 w-full rounded-full bg-gray-900 px-8 py-4 font-medium text-white transition hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}