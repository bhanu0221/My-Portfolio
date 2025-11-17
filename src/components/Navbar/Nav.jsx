import React, { useState, useEffect } from 'react';


// Simple, well-commented Navbar component
function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('home');


    const sections = React.useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ], []);

    // Scroll to an element by id
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileOpen(false);
        }
    }


    // Observe which section is visible to set active nav link
    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, { threshold: 0.6 });


        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) obs.observe(el);
        });


        return () => obs.disconnect();
    }, [sections]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="font-extrabold text-xl text-indigo-600"> ✌️ My Portfolio</a>
                    </div>


                    <nav className="hidden md:flex space-x-6 items-center">
                        {sections.map((s) => (
                            <button key={s.id} onClick={() => scrollToId(s.id)} className={`py-2 text-xl font-medium transition-colors ${active === s.id ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
                                {s.label}
                            </button>
                        ))}
                    </nav>


                    <div className="md:hidden">
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
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