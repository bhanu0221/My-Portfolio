import React from 'react'
import lostImg from "../assets/lost.png";
import chatbotImg from "../assets/chatbot.jpg";
import newsImg from "../assets/News.webp";
import CurrencyImg from "../assets/currency.png";
import './Project.css'

function Projects() {
  return (
    <div className="projects-container  bg-gray-800">
      <h2 className="projects-title  text-amber-600">My Projects.</h2>

      {/* Project 1 */}
      <div className="project">
        <img src={lostImg} alt="Lost and Found System" />
        <div className="project-details">
          <h3>Online Lost & Found System</h3>
          <p>
            A full-stack web application that helps users report lost or found
            items, search existing listings, and use map-based geolocation to
            improve item recovery.
          </p>
          <div className="tech">
            <strong className='text-gray-950'>Tech Used:</strong> HTML, CSS, JS, Python (Flask), MySQL, Firebase
          </div>
          <p>
            For more information visit the{" "}
            <a
              href="https://github.com/bhanu0221/Online-lost-found-system-website..git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <img src={chatbotImg} alt="Chatbot" />
        <div className="project-details">
          <h3>Simple Python based Chatbot</h3>
          <p>
            A console-based chatbot built using Python pandas and Flask to
            respond based on pre-defined datasets. just build for learning purpose.
          </p>
          <div className="tech">
            <strong className='text-gray-950'>Tech Used:</strong> Python, Pandas and basic HTML and JavaScript</div>
          <p>
            For more information visit the{" "}
            <a
              href="https://github.com/bhanu0221/Chatbot-Mini-project-.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <img src={newsImg} alt="NewsHive" />
        <div className="project-details">
          <h3>NewsHive! Daily news site</h3>
          <p>
            A website that gives you real-time news and also provides different
            categories of news in real-time like Crypto, Sports, social etc.
          </p>
          <div className="tech">
            <strong className='text-gray-950'>Tech Used:</strong> React.js with Vite HTML, CSS, JavaScript and Public APIs.
          </div>
          <p>
            For more information visit the{" "}
            <a
              href="https://github.com/bhanu0221/NewsHive-Project-Frontend.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project">
        <img src={CurrencyImg} alt="Currency Converter" />
        <div className="project-details">
          <h3>React-based: Basic Currency-Converter.</h3>
          <p>
            Currency Converter & Crypto price rate real-time updates.
            Real-Time Currency Conversion: Get up-to-the-minute exchange rates for various fiat currencies.
          </p>
          <div className="tech">
            <strong className='text-gray-950'>Tech Used:</strong> Vite+react: It's provides a lightning-fast development experience for modern web projects.<br/>
            Public APIs:<br/>
            CoinGecko API: Used to fetch the latest cryptocurrency prices.<br/>
            frankfurter API: Used for real-time fiat currency exchange rates.<br/>
            slingacademy API: Used to fetch random photos.
          </div>
          <p>
            For more information visit the{" "}
            <a
              href="https://github.com/bhanu0221/React-basic-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      <p className="more-projects">I will add more projects soon!</p>
    </div>
  );
};

export default Projects;
