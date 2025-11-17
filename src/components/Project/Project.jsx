import React from "react";
import lostImg from "../../assets/lost.png";
import newsImg from "../../assets/News.webp";
import CurrencyImg from "../../assets/currency.png";

function Projects() {

    const projects = [
        {
            title: "Lost & Found System",
            desc: "A website that helps users to report lost or found items, search exisiting listings, and use map-based geolocation to improve item recovery.",
            tech: ["Full-Stack web", "HTML5", "CSS", "JS", "Python (Flask)", "MYSQL", "Firebase and Firestore."],
            img: lostImg,
            github: "https://github.com/bhanu0221/Online-lost-found-system-website..git",
        },
        {
            title: "NewsHive! Daily news site",
            desc: "A website that gives you real-time news and also provides different categories of News in real-time like Crypto, Sports, social etc.",
            tech: ["React.js with Vite", "HTML5, CSS", "JS", "Public APIs.", "Gnews API", "NewsData.io API"],
            img: newsImg,
            github: "https://github.com/bhanu0221/NewsHive-Project-Frontend.git",

        },
        {
            title: "Currency Converter",
            desc: "Currency Converter & Crypto price rate real-time updates. Real-Time Currency Conversion: Get up-to-the-minute exchange rates for various fiat currencies.",
            tech: ["React.js with Vite", "HTML5, CSS", "JS", "CoinGecko API", "Frankfurter API", "Slingacademy API."],
            img: CurrencyImg,
            github: "https://github.com/bhanu0221/React-basic-project.git",
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Projects</h2>
                <p className="mt-2 text-center text-gray-600">My project list</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* DIRECT CARDS HERE */}
                    {projects.map((p, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img
                                src={p.img}
                                alt={p.title}
                                className="rounded-xl w-full h-60 object-cover"
                            />
                            {/* Title + Desc */}
                            <h3 className="font-semibold text-lg">{p.title}</h3>
                            <p className="mt-2 text-sm text-gray-800">{p.desc}</p>
                            {/* Tech Chips */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 bg-slate-50 rounded-full text-blue-600"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            {/* Links */}
                            <div className="mt-4 flex gap-3">
                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="text-sm px-3 py-1 bg-emerald-400 text-black rounded-lg"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
export default Projects;