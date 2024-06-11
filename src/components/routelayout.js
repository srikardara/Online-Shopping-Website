import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from './navbar/navbar'
import { Outlet } from 'react-router-dom'
import './routelayout.css'
function routelayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <div className='foot'>
    <Footer/></div>
    </div>
  )
}

export default routelayout
