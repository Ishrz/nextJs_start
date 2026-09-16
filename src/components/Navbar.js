import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold tracking-tight">
            Shop<span className="text-blue-600">Ease</span>
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Shop
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Categories
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              🔍
            </button>

            <button className="rounded-full p-2 hover:bg-gray-100">
              🛒
            </button>

            <button className="hidden rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 sm:block">
              Login
            </button>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
