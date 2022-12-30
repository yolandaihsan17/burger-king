import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
    return (
        <div className='flex flex-col items-stretch justify-start w-full min-h-screen font-flame'>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}