import React from "react"
import NavMenu from "../../snippets/NavMenu"
import SideBar from "../../snippets/Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <NavMenu />
      <div className="w-full" style={{ height: "calc(100vh - 63.98px)", maxHeight: "calc(100vh - 63.98px)" }}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
