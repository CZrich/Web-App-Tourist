import React from 'react'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"
import {Outlet} from "react-router-dom";
export default function Layout() {
    return (
        <div className='flex flex-col min-h-screen'>

            <NavBar />
            <div className='flex-grow'>
            <Outlet className="w-full" />
            </div>
           

            <Footer />

        </div>
    )
}
