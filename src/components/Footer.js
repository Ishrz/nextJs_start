import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold">
              Shop<span className="text-blue-500">Ease</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Modern shopping for modern lifestyles.
              Quality products, simple experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Shop</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Men</p>
              <p>Women</p>
              <p>Sneakers</p>
              <p>Accessories</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Help</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Contact Us</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>FAQ</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Follow Us</h3>

            <div className="mt-4 flex gap-4 text-gray-400">
              <span>Instagram</span>
              <span>Twitter</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © 2026 ShopEase. All rights reserved.
        </div>

      </footer>
    </div>
  )
}

export default Footer
