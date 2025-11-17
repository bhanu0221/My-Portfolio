import myphoto from '../../assets/Anup.png';
import pdf from '../../assets/Anup resume.pdf';

// Clean hero section — small and focused
function Hero() {

    function goTo(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
        <section id="home" className="min-h-[80vh] flex items-center  bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl sm:text-4xl font-extrabold leading-tight">
                            Hi — I'm <span className="text-indigo-600">Anup Shahi</span>, an Aspiring Frontend Developer
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-xl">
                            I'm learning to build clean and responsive web apps using React, Vite, and modern CSS.
                            I enjoy creating simple, user-friendly interfaces and improving my skills with every project.
                        </p>


                        <div className="mt-6 flex gap-3">
                            <button onClick={() => goTo('projects')} className="px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer">View Projects</button>
                            <button onClick={() => goTo('contact')} className="px-4 py-2 border rounded-md hover:bg-blue-200 cursor-pointer">Contact</button>
                            <a href={pdf} className='px-4 py-2 border rounded-md hover:bg-blue-200 cursor-pointer' download="My_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download My Resume
                            </a>
                        </div>
                    </div>


                    <div className="flex justify-center md:justify-end">
                        {/* Removed preview/placeholder image as requested */}
                        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                                <div className="inline-block rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={myphoto}
                                        alt="Anup Shahi"
                                        className="w-62 h-62 rounded-2xl object-cover object-top"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Hero;