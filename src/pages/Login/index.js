/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Button, Image } from "../../components/primitives"
import SCALogo from "../../common/assets/images/sca-logo.png"
import HomeBG from "../../common/assets/images/sca-homepage-bg.jpg"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    // <div className="min-h-[60%] bg-gray-100 flex flex-row justify-center py-12 sm:px-6 lg:px-8" style={{backgroundImage: `url(${HomeBG})`}}>
    <div className="min-h-screen w-full bg-gray-100 flex flex-row justify-center py-12 sm:px-6 lg:px-8 bg-blue-500">
      {/* <div className="min-h-300 bg-blue-300 w-full" /> */}
      {/* <div className="mt-8 w-3/4 bg-black flex align-center">
        <div className="w-1/2 flex justify-center">
          <Image src={SCALogo} alt="ScrapCatApp" />
        </div>
        <div className="w-1/2 flex max-h-[50%] justify-center">
          <Image src={SCALogo} alt="ScrapCatApp" />
        </div>
      </div> */}
      <div className="mt-8 w-1/4 bg-blue-500">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <p class="text-2xl font-black text-gray-700 text-center dark:text-white">
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
    </div>
  )
}

export default Login
