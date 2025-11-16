import React from 'react'
import "./About.css";
import pythonCert from "../assets/python.png";
import orgCert from "../assets/org.png";
import aiCert from "../assets/AI.png";
import sqlCert from "../assets/sql.png";
import { motion } from 'framer-motion';

function About() {

    const textVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className='about-container bg-gray-800 py-12 px-6 md:px-16'>
            <h2 className='about-title text-3xl font-bold text-amber-600 mb-6'>
                About Me
            </h2>

            <motion.p className="about-text mb-6 leading-relaxed" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                Hi, I'm <motion.span className="font-semibold text-blue-500" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>Anup Shahi</motion.span>.
                I'm from Uttarakhand and have completed my Bachelor's degree in
                Computer Applications (BCA) from Dehradun. I'm passionate about web
                development and Technologies, and I'm always eager to learn and wanted to gain practical
                experience by doing and learning new skills.
                I enjoy solving real-world problems, exploring new technologies, and
                constantly improving myself. Currently, I'm looking for an entry-level
                position in software and web development.
            </motion.p>


            {/* Education */}
            <h3 className="about-subtitle">Education</h3>
            <motion.ul className="about-list" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                <li>Bachelor of Computer Applications (BCA)</li>
                <li>Doon Business School, Global University, Dehradun (Uttarakhand)</li>
                <li>Graduation Year: 2022 - 2025</li>
                <li>CGPA: 7.33</li>
            </motion.ul>

            <h3 className="about-subtitle">Intermediate Class 12</h3>
            <motion.ul className="about-list" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                <li>Holy Cross Sr. Sec School, Laksar, Haridwar</li>
                <li>Board: CBSE</li>
                <li>Completion Year: 2022</li>
            </motion.ul>


            {/* Skills */}
            <h3 className="about-subtitle">Technical Skills</h3>
            <motion.ul className="about-list" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                <li>
                    <strong>Frontend:</strong> HTML, CSS, JavaScript with basic DOM, React.js and learning advance react.js 
                </li>
                <li>
                    <strong>Backend:</strong> Python(basic flask), Node.js (express.js)
                </li>
                <li>
                    <strong>Database:</strong> MySQL, Firebase Firestore
                </li>
                <li>
                    <strong>Tools:</strong> GitHub, Firebase (auth), VS Code
                </li>
                <li>
                    <strong>Version Control:</strong> Git
                </li>
                <li>
                    Expert in AI Tools (ChatGPT, Copilot, BlackBox.AI, Claude, etc.)
                </li>
            </motion.ul>
    
            {/* Current Work */}
            <h3 className="about-subtitle">What I'm Currently Doing</h3>
            <motion.p className="about-text" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                I'm currently working on several projects and enhance my skills. 
                Also build a portfolio. I enjoy learning new technologies and applying them
                in practical scenarios. My goal is to become a proficient web/software
                developer and also explore data analytics.
                I am also exploring AI tools to improve my coding efficiency and
                problem-solving capabilities.
            </motion.p>


            {/* Certificates */}
            <h3 className="about-subtitle">Certificates</h3>
            <div className="certificates">
                <div className="cert-card">
                    <img src={pythonCert} alt="Python Meta Certificate" />
                    <p>Programming in Python, Meta</p>
                </div>

                <div className="cert-card">
                    <img src={orgCert} alt="Organisational Design" />
                    <p>Organisational Design - Macquarie</p>
                </div>

                <div className="cert-card">
                    <img src={aiCert} alt="Gen AI Certificate" />
                    <p>Gen AI for Front-End Developers</p>
                </div>

                <div className="cert-card">
                    <img src={sqlCert} alt="SQL Certificate" />
                    <p>SQL and Relational Databases, IBM Skills</p>
                </div>
            </div>

            {/* Codewars */}
            <div className="card mt-6">
                <p>
                    Explore my{" "}
                    <a
                        href="https://www.codewars.com/users/Anup%20shahi"
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-600 font-semibold hover:underline"
                    >
                        Codewars profile
                    </a>
                    , where I practice JavaScript skills through coding challenges.
                </p>
            </div>
        </section>
    );
}


export default About;
