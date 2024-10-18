import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 fixed bottom-0  w-full">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="flex flex-col md:flex-row md:space-x-8">
            <a
              href="/policy"
              className="mb-2 md:mb-0 hover:text-gray-400"
            >
              Policy
            </a>
            <a
              href="/about"
              className="mb-2 md:mb-0 hover:text-gray-400"
            >
              About
            </a>
            <a
              href="/support"
              className="hover:text-gray-400"
            >
              Customer Support
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
