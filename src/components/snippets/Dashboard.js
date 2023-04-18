import React, { useState } from "react"

const Dashboard = () => {
  const [filterNew, setFilterNew] = useState(true)

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      <div className="border w-full bg-white p-4 flex justify-between items-center">
        <p className="text-blue-500 text-sm font-semibold w-3/4">
          Buyer Dashboard
        </p>
        <div className="flex gap-2 items-center">
          <button
            className="bg-green-500 text-white font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Submit Assay Results
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={filterNew}
              onChange={() => {
                setFilterNew(!filterNew)
              }}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {filterNew ? "New" : "Old"}
            </span>
          </label>
        </div>
      </div>
      <div className="w-full mt-2">
        <a
          href="#"
          className="text-sm text-blue-500 font-semibold dark:text-blue-500 hover:underline"
        >
          LOTS you have won
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lot #
              </th>
              <th scope="col" className="px-6 py-3">
                # of Units
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Your Appraisal
              </th>
              <th scope="col" className="px-6 py-3">
                Your Bid
              </th>
              <th scope="col" className="px-6 py-3">
                Winning Bid
              </th>
              <th scope="col" className="px-6 py-3">
                Bid Awarded
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                R73L
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">USA</td>
              <td className="px-6 py-4">$0.00</td>
              <td className="px-6 py-4">$0.00</td>
              <td className="px-6 py-4">$0.00</td>
              <td className="px-6 py-4">2017-11-01</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full mt-2">
        <a
          href="#"
          className="text-sm text-blue-500 font-semibold dark:text-blue-500 hover:underline"
        >
          LOTS with submitted Bids
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lot #
              </th>
              <th scope="col" className="px-6 py-3">
                # of Units
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Your Appraisal
              </th>
              <th scope="col" className="px-6 py-3">
                Your Bid
              </th>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
              <th scope="col" className="px-6 py-3">
                Bids Due On
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                MQEP
              </th>
              <td className="px-6 py-4">295</td>
              <td className="px-6 py-4">USA</td>
              <td className="px-6 py-4">$609.00</td>
              <td className="px-6 py-4">$25,000.00</td>
              <td className="px-6 py-4">&nbsp;</td>
              <td className="px-6 py-4">2023-03-28</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full mt-2">
        <a
          href="#"
          className="text-sm text-blue-500 font-semibold dark:text-blue-500 hover:underline"
        >
          LOTS you are bidding but not have submitted
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lot #
              </th>
              <th scope="col" className="px-6 py-3">
                # of Units
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Your Appraisal
              </th>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
              <th scope="col" className="px-6 py-3">
                Bids Due On
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                R73L
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">USA</td>
              <td className="px-6 py-4">$0.00</td>
              <td className="px-6 py-4">&nbsp;</td>
              <td className="px-6 py-4">&nbsp;</td>
              <td className="px-6 py-4">2017-11-01</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full mt-2">
        <a
          href="#"
          className="text-sm text-blue-500 font-semibold dark:text-blue-500 hover:underline"
        >
          LOTS you did not win
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lot #
              </th>
              <th scope="col" className="px-6 py-3">
                # of Units
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Your Appraisal
              </th>
              <th scope="col" className="px-6 py-3">
                Your Bid
              </th>
              <th scope="col" className="px-6 py-3">
                Winning Bid
              </th>
              <th scope="col" className="px-6 py-3">
                Bid Awarded
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                T6NX
              </th>
              <td className="px-6 py-4">460</td>
              <td className="px-6 py-4">USA</td>
              <td className="px-6 py-4">$0.00</td>
              <td className="px-6 py-4">$1,000.00</td>
              <td className="px-6 py-4">$78,363.00</td>
              <td className="px-6 py-4">2023-02-04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
