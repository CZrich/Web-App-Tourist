
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"
import {Outlet} from "react-router-dom";
import { Toaster } from "react-hot-toast";
export default function Layout() {
   return (
        <div className='flex flex-col min-h-screen bg-slate-50'>
            <Toaster position="top-right" reverseOrder={false} />
            <NavBar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
