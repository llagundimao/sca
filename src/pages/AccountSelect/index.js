import React from "react"
import MainLayout from "../../components/Layouts/Main"
import SCALink from "../../common/data/links.json"

const AccountSelect = () => {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: #eeeeee !important;
        }
      `}</style>
      <MainLayout>
        <div className="w-full relative flex flex-row justify-center items-center">
          <div className="mt-8 bg-red-300">
            <img
              src="https://www.scrapcatapp.com/images/SCA-Logo-YY%207%20-%20400px-white-brdr.png"
              style={{ width: "350px" }}
              alt="Flowbite Logo"
            />
          </div>

          <div className="mt-8 w-1/2 min-w-xl flex justify-center  bg-yellow-500">
            <div className="w-[20rem] p-4 bg-white border border-gray-200 rounded-md shadow">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 rounded-full mt-3"
                  src="https://www-test.scrapcatapp.com/images/user1.png"
                  alt="user photo"
                />
                <div className="flex items-center justify-between mt-3">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    My Account
                  </h5>
                </div>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-5" />
              <div className="flow-root">
                <ul className="my-4">
                  {SCALink.selectAccount.map((l, i) => {
                    return (
                      <li key={i} className="">
                        <a
                          href={l.url}
                          className="flex flex-row p-3 text-blue-400 border-b-2 border-gray-100 hover:bg-gray-50 hover:shadow hover:border-b-2 hover:border-sky-500"
                        >
                          <span className="flex-1 ml-3 text-center font-normal">
                            {l.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default AccountSelect
