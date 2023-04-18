import React from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Home from "./Home"
import AccountSelect from "./AccountSelect"
import ErrorPage from "../components/snippets/ErrorPage"
import MainPage from "./MainPage"
import AboutUs from "./AboutUs"
import FAQ from "./FAQ"
import Help from "./Help"
import ContactUs from "./ContactUs"

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      </Route>
      <Route path="/account-select" element={<AccountSelect />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route index path="/:accountType/:tab" element={<MainPage />} />
    </Routes>
  )
}

export default Pages
