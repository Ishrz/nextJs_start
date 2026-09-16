"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order details:", {
      customer: form,
      products: cart,
      total: cartTotal,
    });

    alert("Order placed successfully!");
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">

          <h1 className="text-4xl font-bold">
            Your Cart is Empty
          </h1>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3 text-white"
          >
            Go to Shop
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">
          Checkout
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl bg-white p-6 shadow-sm lg:col-span-2"
          >

            <h2 className="text-2xl font-bold">
              Shipping Information
            </h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Full Address"
              required
              rows={4}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <div className="grid gap-5 sm:grid-cols-2">

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gray-900 py-4 font-medium text-white hover:bg-blue-600"
            >
              Place Order
            </button>

          </form>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />

                  <div className="flex-1">
                    <p className="line-clamp-2 text-sm font-medium">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}