import React from 'react';
function Skills() {
    const skills = [
        {
            title: "Frontend",
            items: "HTML5, CSS, JavaScript (basic DOM), React.js (learning basic's-advanced concepts)"
        },
        {
            title: "Backend",
            items: "Python, Node.js (basic Express.js)"
        },
        {
            title: "Database",
            items: "MySQL(basic), Firebase Firestore"
        },
        {
            title: "Tools",
            items: "Git, GitHub, VS Code, Firebase (Authentication)"
        },
        {
            title: "AI Tools",
            items: "ChatGPT, Copilot, BlackBox AI, Claude"
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center">Skills</h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow hover:bg-cyan-50">
                            <h3 className="font-semibold text-lg mb-2">{skill.title}:</h3>
                            <p className="text-gray-800">{skill.items}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;