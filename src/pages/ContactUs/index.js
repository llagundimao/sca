import React from "react"
import MainLayout from "../../components/Layouts/Main"

const ContactUs = () => {
  return(
    <MainLayout>
      <div className="w-full relative flex flex-col py-12 sm:px-6 lg:px-8 bg-right bg-no-repeat">
        <p className="text-4xl font-bold text-left">Contact Us</p>
        <hr className="h-1 w-full my-8 bg-gray-500 border-0 dark:bg-gray-700" />
      </div>
    </MainLayout>
  )
}

export default ContactUs
