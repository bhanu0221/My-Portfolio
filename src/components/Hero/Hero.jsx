import myphoto from '../../assets/Anup.png';
import pdf from '../../assets/Anup resume.pdf';

// Clean hero section — small and focused
function Hero() {

    // this below function I am using for buttons which I have made in below like project, contact buttons.
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <section id="home" className="min-h-[90vh] flex items-center ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl sm:text-4xl font-extrabold leading-tight">
                            Hi — I'm <span className="text-indigo-600">Anup Shahi</span>, an Aspiring Frontend or Software Developer.
                        </h2>
                        <p className="mt-4 text-gray-900 max-w-xl">
                            “A fresher exploring web development and building my foundation in React, JavaScript, and UI design.”
                            I'm learning to build clean and responsive web apps using React, Vite, and modern CSS.
                            I enjoy creating simple, user-friendly interfaces and improving my skills with every project.
                        </p>

                        {/* buttons */}
                        <div className="mt-6 flex gap-3">
                            <button onClick={() => scrollToId('projects')} className="px-3 py-1.5 bg-indigo-600 text-white rounded-md cursor-pointer">View Projects</button>
                            <button onClick={() => scrollToId('contact')} className="px-3 py-1.5 bg-indigo-600 text-white rounded-md cursor-pointer">Contact</button>
                            <a href={pdf} className='px-3 py-1.5 bg-indigo-600 text-white rounded-md cursor-pointer' download="My_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download My Resume
                            </a>
                        </div>
                    </div>


                    <div className="flex justify-center md:justify-end">
                        {/* Removed preview/placeholder image as requested */}
                        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br bg-indigo-50 flex items-center justify-center">
                            <div className="inline-block rounded-2xl overflow-hidden shadow-lg">
                                <img src={myphoto} alt="Anup Shahi" className="w-62 h-62 rounded-2xl object-cover object-top" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Hero;