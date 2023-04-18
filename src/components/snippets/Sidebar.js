import React from "react"
import SCALink from "../../common/data/links.json"

const SideBar = () => {
  return (
    <div className="w-full">
      <aside
        id="logo-sidebar"
        className="top-0 left-0 z-40 h-screen pt transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {SCALink.buyer.map((l, i) => {
              return (
                <li key={i}>
                  <a
                    href={l.url}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      width="14"
                      height="12"
                      viewBox="0 0 20 17"
                    >
                      <defs></defs>
                      <path
                        id="ic_home_24px"
                        className="cls-1"
                        d={l.icon}
                        transform="translate(-2 -3)"
                      ></path>
                    </svg>
                    <span className="ml-3 text-sm">{l.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default SideBar