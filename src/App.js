import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Link,
  BrowserRouter
} from "react-router-dom"
import Pages from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

export default App
