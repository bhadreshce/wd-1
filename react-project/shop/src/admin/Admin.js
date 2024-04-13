import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <>
       <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin