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
    setIsLoading(true)

    setTimeout(() => {
      navigate('/account-select')
    }, 2000)
  }

  return (
    <>
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
          style={{ backgroundColor: "#c1d0e2e6" }}
        ></div>
        <div className="w-1/2 flex z-20">
          <div className="w-full h-auto flex justify-center align-center items-center">
            <Image src={SCALogo} alt="ScrapCatApp" height="h-96" />
          </div>
        </div>
        <div className="w-1/2 flex z-20">
          <div className="w-full flex flex-col">
            <div className="w-full">
              {/* Slogan */}
              <div className="w-full text-center" style={{ margin: '10px auto' }}>
                <p className="text-2xl">
                  We Do <span className="text-blue-500 italic font-bold">NOT</span>{" "}
                  Buy. We Do{" "}
                  <span className="text-blue-500 italic font-bold">NOT</span> Sell.
                </p>
                <p className="text-2xl">
                  The{" "}
                  <span className="font-bold italic">
                    Premier Online Auction Marketplace
                  </span>{" "}
                </p>
                <p className="text-2xl">
                  for{" "}
                  <span className="font-semibold italic">
                    Scrap Catalytic Converter Sales
                  </span>
                </p>
              </div>

              {/* Link Boxes */}
              <div
                // className="mt-5 text-center flex gap-2 p-2 pl-0 pr-0"
                className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-1"
                style={{ width: "50%", margin: '10px auto' }}
              >
                {HomeLinks.home.map((d, i) => (
                  <ImageWithDesc key={i} {...d} />
                ))}
              </div>
              {/* Elements */}
              <div
                className="mt-2 text-center flex justify-right p-2 bg-black text-white rounded-lg"
                style={{ width: "60%", margin: '10px auto' }}
              >
                {HomeLinks.element.map((e, i) => (
                  <div key={i} className="flex-col w-3/4">
                    <p className="text-xs font-bold flex justify-center">
                      <ArrowUp
                        classes={`w-4 h-4 text-green-500 mr-1 font-extrabold ${e.status === "down" ? "text-red-500 rotate-180" : ""
                          }`}
                      />
                      <span className="text-yellow-400 font-extrabold">
                        {e.name}
                      </span>
                    </p>
                    <p className="text-xs font-extrabold">{e.value}</p>
                    <p
                      className={`text-xs font-extrabold ${e.status === "up" ? "text-green-500" : "text-red-500"
                        }`}
                    >
                      ({e.discrepancy})
                    </p>
                  </div>
                ))}
              </div>
              {/* Sales to Date */}
              <div className="mt-1  text-center" style={{ width: "60%", margin: '10px auto' }}>
                <p className="mt-2 text-md font-semibold">
                  ScrapCATapp Marketplace Sales to Date
                </p>
                <div className="flex flex-col flex items-center bg-black rounded-lg">
                  <p className="font-extrabold mt-1 text-xl pb-2 text-green-400">$187,026,662</p>
                </div>
                <p className="mt-2 text-md font-bold">
                  Since 2017
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 relative">
            <Image src='https://www-test.scrapcatapp.com/images/urg%20burst.png' style={{ width: '110%', position: 'absolute', bottom: '0', right: '0' }} />
          </div>
        </div>
      </div>
      <div className="w-full text-center flex justify-center items-center">
        <div className="w-1/2">
          <p className="text-4xl text-green-600 font-black underline italic">AUCTION <br /> WORKS!</p>
        </div>
        <div className="w-1/2 flex flex-row">
          <div className="w-1/4 flex flex-col justify-center">
            <div className="text-right text-sm py-2">
              <a>Forgot Username/Password</a>
            </div>
            <div className="text-right text-sm py-3">
              <a>Not Registered Yet? <span className="underline font-bold">Sign up here!</span></a>
            </div>
          </div>
          <div className="w-3/4 p-2 flex flex-row items-center">
            <div className="w-3/4">
              <form id="login-form" onSubmit={handleSubmit}>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </span>
                  <input value={username} onChange={(event) => setUsername(event.target.value)} required type="text"  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
                </div>
                <div className="mt-1 flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>

                  </span>
                  <input value={password} onChange={(event) => setPassword(event.target.value)} required type="password" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                </div>
              </form>
            </div>
            <div className="w-1/4 flex flex-col justify-center p-5 gap-2">
              <p className="underline">Contact Us</p>
              <Button type="submit" form='login-form' text="Login" isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
