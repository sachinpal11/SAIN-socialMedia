import React from 'react'
import '../App.css'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Home from './Home'
import { Outlet } from 'react-router'
function App() {

  return (
    <div className='flex w-full h-[100vh] overflow-hidden '>
      {/* <Header /> */}
      <SideBar />
      <Outlet />
    </div>
  )
}

export default App
