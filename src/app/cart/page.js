"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  console.log("from cart page", cart)

  if (cart.length === 0) {
    return (
      <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="text-4xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-gray-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3 text-white"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          Your Cart
        </h1>

        <div className="mt-10 space-y-5">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-28 w-28 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2 font-bold">
                  ${item.price}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="h-9 w-9 rounded-full border"
                >
                  -
                </button>

                <span className="w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="h-9 w-9 rounded-full border"
                >
                  +
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              Total
            </span>

            <span className="text-2xl font-bold">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full rounded-full bg-gray-900 py-4 font-medium text-white hover:bg-blue-600">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </main>
  );
}