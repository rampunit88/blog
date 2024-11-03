import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

function PublicLayout() {
  return (
    <div className="bg-white">
      <Header />
      <Outlet />
    </div>
  )
}

export default PublicLayout