import React from "react"
import MainLayout from "../../components/Layouts/Main"
import SCALink from "../../common/data/links.json"

const AccountSelect = () => {
  return (
    <MainLayout>
      <div className="w-full relative flex flex-row justify-center items-center">
        <div className="mt-8 w-1/2 min-w-xl flex justify-center">
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://www-test.scrapcatapp.com/images/user1.png"
                alt="user photo"
              />
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  My Account
                </h5>
              </div>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flow-root">
              <ul className="my-4 space-y-3">
                  {SCALink.selectAccount.map((l, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={l.url}
                          className="flex items-center p-3 text-base font-bold text-blue-500 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                          <span className="flex-1 ml-3 whitespace-nowrap text-center">
                            {l.title}
                          </span>
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AccountSelect
