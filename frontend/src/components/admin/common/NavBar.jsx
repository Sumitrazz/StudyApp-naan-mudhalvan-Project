import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0 text-white text-2xl font-bold">
            StudyApp
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-white hover:text-gray-200"
            >
              Home
            </a>
            <a
              href="/course"
              className="text-white hover:text-gray-200"
            >
              Course
            </a>
            <a
              href="/admin"
              className="text-white hover:text-gray-200"
            >
              Admin
            </a>
            <a
              href="/login"
              className="text-white hover:text-gray-200"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-white hover:text-gray-200"
            >
              Register
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block text-white hover:text-gray-200"
            >
              Home
            </a>
            <a
              href="/course"
              className="block text-white hover:text-gray-200"
            >
              Course
            </a>
            <a
              href="/admin"
              className="block text-white hover:text-gray-200"
            >
              Admin
            </a>
            <a
              href="/login"
              className="block text-white hover:text-gray-200"
            >
              Login
            </a>
            <a
              href="/register"
              className="block text-white hover:text-gray-200"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
