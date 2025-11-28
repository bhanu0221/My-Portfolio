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
            Live: "",
        },
        {
            title: "NewsHive! Daily news site",
            desc: "A website that gives you real-time news and also provides different categories of News in real-time like Crypto, Sports, social etc.",
            tech: ["React.js with Vite", "HTML5, CSS", "JS", "Public APIs.", "Gnews API", "NewsData.io API"],
            img: newsImg,
            github: "https://github.com/bhanu0221/NewsHive-Project-Frontend.git",
            Live: "https://news-hive-frontend.netlify.app/",

        },
        {
            title: "Currency Converter",
            desc: "Currency Converter & Crypto price rate real-time updates. Real-Time Currency Conversion: Get up-to-the-minute exchange rates for various fiat currencies.",
            tech: ["React.js with Vite", "HTML5, CSS", "JS", "CoinGecko API", "Frankfurter API", "Slingacademy API."],
            img: CurrencyImg,
            github: "https://github.com/bhanu0221/React-basic-project.git",
            Live: "https://vite-react-basic.netlify.app/",
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Projects</h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* DIRECT CARDS HERE */}
                    {projects.map((props, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow hover:shadow-lg transition">
                            {/* Image */}
                            <img src={props.img} alt={props.title || "image"} className="rounded-xl w-full h-70 object-cover" />

                            {/* Title + Desc */}
                            <h3 className="font-semibold text-lg text-black">{props.title}</h3>
                            <p className="mt-2 text-sm text-gray-800">{props.desc}</p>

                            {/* Tech stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {props.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-slate-50 rounded-full text-blue-600">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Links */}
                            <div className="mt-4 flex gap-3">
                                <a href={props.github} target="_blank" className="text-sm px-3 py-1 bg-emerald-400 text-black rounded-lg">
                                    GitHub
                                </a>

                                {props.Live && (
                                    <a href={props.Live} target="_blank" className="text-sm px-3 py-1 bg-red-500 text-white rounded-lg">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <h2 className="text-center">I will add more Projects soon</h2>
        </section>
    );
}
export default Projects;