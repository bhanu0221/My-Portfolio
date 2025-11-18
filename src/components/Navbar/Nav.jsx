import React, { useState } from 'react';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);


    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    // Scroll to the element with the given id smoothly.
    // Also closes the mobile menu if it was open.
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (!el) return;  // nothing to do if element missing
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileOpen(false);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="font-extrabold text-xl text-indigo-600"> ✌️ My Portfolio</a>
                    </div>

                    {/* Desktop links (hidden on small screens) */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {sections.map((s) => (
                            <button type="button" key={s.id} onClick={() => scrollToId(s.id)} className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
                                {s.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile hamburger (visible on small screens) */}
                    <div className="md:hidden">
                        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Toggle menu" className="p-2 rounded-md focus:outline-none">
                            {/* Font Awesome icons instead of SVG */}
                            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel (simple list) */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {sections.map((s) => (
                            <button key={s.id} onClick={() => scrollToId(s.id)} className="block w-full text-left py-2 px-2 rounded-md text-gray-700 hover:bg-slate-100">

                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;