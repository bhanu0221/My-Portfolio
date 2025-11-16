import React from 'react';
import myphoto from '../assets/Anup.png';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pdf from '../../src/assets/Anup resume.pdf';

function Home() {

    // 1. Define variants ONLY for the elements you want to animate
    const imageVariants = {
        hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, delay: 0.2 } }
    };

    const nameVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 }, // Start slightly below
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.4 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };


    return (

        <section className="home-section bg-gray-800 py-12 overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">

                {/* Left: Image */}
                <motion.div
                    className="home-image md:w-1/3 flex justify-center mb-8 md:mb-0"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={myphoto}
                        alt="Anup Shahi"
                        className="profile-pic"
                    />
                </motion.div>

                {/* Right: Text */}
                <div className="Right-text home-text md:w-2/3 md:pl-10 text-center md:text-left">
                    <motion.h1
                        className="home-title"
                        variants={nameVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Hi, I'm Anup Shahi 
                    </motion.h1>
                    
                    <motion.p className="home-paragraph" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        I'm someone who finds peace in quiet moments, joy in helping others,
                        and purpose in creating things that matter. I've always been drawn to
                        technology — whether it's fixing a broken game file, building websites,
                        or learning something new just for the fun of it.
                    </motion.p>

                    <motion.p className="home-paragraph" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        Though I'm more introverted by nature, I deeply value loyalty, honesty,
                        and meaningful connections. I love exploring different ideas and cultures,
                        and I love to help other people — whether it's tech problems or simply
                        being there when someone needs support.
                    </motion.p>

                    <motion.p className="home-paragraph" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        I'm passionate about software development and eager to gain practical
                        knowledge and experience. I recently graduated with a Bachelor's in
                        Computer Applications (BCA) from Doon Business School, Global University,
                        Dehradun (Uttarakhand), and I'm now looking for entry-level roles in
                        software and web development.
                    </motion.p>

                    <motion.p className="home-paragraph" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        Outside of coding, I enjoy playing video games — especially story-driven
                        and multiplayer experiences that enhance critical thinking and teamwork.
                        I also love watching TV series as one of my favorite pastimes.
                    </motion.p>

                    <motion.ul className="list-disc list-inside text-gray-800 font-medium" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        <li>
                            If you'd like to learn more about me, feel free to explore my projects
                            or reach out directly!
                        </li>
                    </motion.ul>

                    <div className='button'>
                        <Link to="https://github.com/bhanu0221" className='a'>Github</Link>
                        <Link to="https://www.linkedin.com/in/anup-shahi-50486530a/" className='a'>LinkedIn</Link>
                        <Link to="/feedback" className='a'>Feedback</Link>
                        <Link to="/projects" className='a'>Projects</Link>
                        <a href={pdf} className='a' download="My_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Download My Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home;
