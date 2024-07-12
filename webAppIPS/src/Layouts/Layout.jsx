import React from 'react'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"
import {Outlet} from "react-router-dom";
export default function Layout() {
    return (
        <>

            <NavBar />

            <Outlet />

            <Footer />

        </>
    )
}
