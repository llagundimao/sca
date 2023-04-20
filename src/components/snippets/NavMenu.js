import React, { useState } from "react"
import SCALinks from "../../common/data/links.json"

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="w-full bg-[#1da1f2] grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2 flex justify-items-start">
          <a href="/" className="flex items-center">
            <img
              src="https://www-test.scrapcatapp.com/images/SCAcom-Box-Logo.11%20Low%20Res.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>

          <div className="mt-1" id="mobile-menu-2">
            <ul className="flex text-white md:p-0 border border-gray-100 md:flex-row md:space-x-8 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
              {SCALinks.navMenu.map((m, i) => {
                return (
                  <li key={i}>
                    <a
                      href={m.url}
                      className="text-white hover:underline"
                      // className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                      style={{ width: "100px" }}
                    >
                      {m.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://www-test.scrapcatapp.com/images/user1.png"
              alt="user photo"
            />
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            className="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Lian Lagundimao
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                llagundimao@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu
