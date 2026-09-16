import React from 'react'

const WhyUs = () => {
  return (
    <div>
      <section className="border-t py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Why Shop With Us?
            </h2>

            <p className="mt-3 text-gray-500">
              Everything you need for a better shopping experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-gray-50 p-8 text-center">
              <div className="text-4xl">🚚</div>
              <h3 className="mt-5 text-xl font-bold">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-500">
                Get your products delivered quickly and safely.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 text-center">
              <div className="text-4xl">🔒</div>
              <h3 className="mt-5 text-xl font-bold">
                Secure Payments
              </h3>
              <p className="mt-3 text-gray-500">
                Your payments and personal information are protected.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 text-center">
              <div className="text-4xl">↩️</div>
              <h3 className="mt-5 text-xl font-bold">
                Easy Returns
              </h3>
              <p className="mt-3 text-gray-500">
                Simple and hassle-free returns whenever you need them.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default WhyUs
