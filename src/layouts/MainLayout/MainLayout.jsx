import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/Footer/Footer'
import { Toaster } from 'react-hot-toast'

export default function MainLayout() {
  return (
    <div>
      <Toaster position="top-center" />
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
