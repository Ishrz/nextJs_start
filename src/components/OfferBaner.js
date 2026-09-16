import React from 'react'

const OfferBaner = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-white md:px-16">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                Limited Time Offer
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Get 30% OFF
              </h2>

              <p className="mt-3 text-blue-100">
                On your first order. Use code{" "}
                <span className="font-bold text-white">
                  WELCOME30
                </span>
              </p>
            </div>

            <button className="rounded-full bg-white px-7 py-3 font-semibold text-blue-600 hover:bg-gray-100">
              Shop the Sale →
            </button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default OfferBaner
