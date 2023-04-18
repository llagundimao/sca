/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { ArrowUp, Button, Image } from "../../components/primitives"
import SCALogo from "../../common/assets/images/sca-logo.png"
import HomeBG from "../../common/assets/images/sca-homepage-bg.jpg"
import ImageWithDesc from "../../components/snippets/ImageWithDesc"
import HomeLinks from "../../common/data/links.json"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)
    navigate('/account-select')
    setTimeout(() => {
      setIsLoading(false)
      setIsLoading(true)
    }, 2000)
  }

  return (
    <div
      className="w-full relative flex flex-row justify-center items-center py-12 sm:px-6 lg:px-8 bg-right bg-no-repeat"
      style={{
        backgroundImage: `url(${HomeBG})`,
        backgroundPosition: "right",
        backgroundColor: "#223347",
        marginTop: "100px",
      }}
    >
      <div
        className="overlay absolute w-full h-full z-10"
        style={{ backgroundColor: "#223347", opacity: "0.9" }}
      ></div>
      <div className="w-3/4 flex z-20">
        <div className="w-1/2 h-auto flex justify-center align-center items-center">
          <Image src={SCALogo} alt="ScrapCatApp" height="h-96" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          {/* Slogan */}
          <div className="w-1/2 text-center">
            <p className="text-2xl text-white">
              We Do <span className="text-blue-500 italic font-bold">NOT</span>{" "}
              Buy. We Do{" "}
              <span className="text-blue-500 italic font-bold">NOT</span> Sell.
              The{" "}
              <span className="font-bold italic">
                Premier Online Auction Marketplace
              </span>{" "}
              for{" "}
              <span className="font-semibold italic">
                Scrap Catalytic Converter Sales
              </span>
            </p>
          </div>
          {/* Link Boxes */}
          <div
            className="mt-5 text-center flex gap-2 p-2 pl-0 pr-0"
            style={{ width: "80%" }}
          >
            {HomeLinks.home.map((d, i) => (
              <ImageWithDesc key={i} {...d} />
            ))}
          </div>
          {/* Elements */}
          <div
            className="text-center flex p-2 bg-black text-white rounded-lg"
            style={{ width: "80%" }}
          >
            {HomeLinks.element.map((e, i) => (
              <div key={i} className="flex-col w-3/4">
                <p className="text-xs font-bold flex justify-center">
                  <ArrowUp
                    classes={`w-4 h-4 text-green-500 mr-1 font-extrabold ${
                      e.status === "down" ? "text-red-500 rotate-180" : ""
                    }`}
                  />
                  <span className="text-yellow-400 font-extrabold">
                    {e.name}
                  </span>
                </p>
                <p className="text-xs font-extrabold">{e.value}</p>
                <p
                  className={`text-xs font-extrabold ${
                    e.status === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  ({e.discrepancy})
                </p>
              </div>
            ))}
          </div>
          {/* Sales to Date */}
          <div className="mt-1  text-center" style={{ width: "80%" }}>
            <div className="flex flex-col flex bg-black rounded-lg">
              <p className="mt-2 text-yellow-400 text-sm font-bold">
                ScrapCATapp Marketplace Sales to Date Since 2017
              </p>
              <p className="font-extrabold text-xl pb-2 text-green-400">$187,026,662</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center z-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <p className="text-2xl font-black text-gray-700 text-center dark:text-white">
              Signin
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <Button text="Login" isLoading={isLoading} />
              </div>
            </form>
            <div>
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot Username / Password
                </a>
              </p>

              <p className="mt-2 text-center text-sm text-gray-600">
                Not Registered yet?{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Signup here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-1/4 flex items-center z-20">
        <p className="text-xl text-green-400">AUCTION WORKS!</p>
      </div> */}
    </div>
  )
}

export default Home
