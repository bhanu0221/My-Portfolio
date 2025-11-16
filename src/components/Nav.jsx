import React from 'react';
import { useState } from "react";
// instead of lucide I have used Font Awesome CDN
// import { Menu, X } from "lucide-react"; //  No need for lucide Icon. 
import { Link } from 'react-router-dom';


function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }


    return (

        <div className='bg-amber-500 shadow-md'>
            <nav className="container mx-auto flex justify-between items-center px-4 py-3">

                <div className="text-white font-bold text-2xl">
                    <p>My Portfolio</p>
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-white font-medium text-2xl">
                    <Link to="/" className="hover:text-gray-600 transition">Home</Link>
                    <Link to="/about" className="hover:text-gray-600 transition">About</Link>
                    <Link to="/projects" className="hover:text-gray-600 transition">Projects</Link>
                    <Link to="/memories" className="hover:text-gray-600 transition">Memories</Link>
                    <Link to="/feedback" className="hover:text-gray-600 transition">Feedback</Link>
                </div>

                {/* Mobile Hamburger */}
                <button className="md:hidden text-white focus:outline-none" title="menu option responsive"
                    onClick={toggleMenu} // onClick={() => setIsOpen(!isOpen)} also write like this.
                >
                    {isOpen ? (
                        <i className="fa-solid fa-xmark text-3xl"></i>
                    ) : (
                        <i className="fa-solid fa-bars text-3xl"></i>
                    )}
                </button>

            </nav>


            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 bg-amber-500 text-white font-medium">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/memories" onClick={() => setIsOpen(false)}>Memories</Link>
                    <Link to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
                </div>
            )}
        </div>
    );
}

export default Nav;
