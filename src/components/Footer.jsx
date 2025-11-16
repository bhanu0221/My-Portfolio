import React from 'react'

function Footer() {
    return (
        <footer style={{
            fontFamily: "cursive",
            textAlign: "center",
            padding: "5px 0",
            width: "100%",
            fontSize: "14px",
            color: "white",
            backgroundColor: "orange",
        }}>

            <p>Made By <span style={{ fontWeight: "bold", color: 'Highlight'}}>Anup Shahi</span> © 2025 All rights reserved.</p>
            <div className="footer-links">
                <a
                    href="https://github.com/bhanu0221"
                    className="footer-icon my-0 mx-[10px] text-white no-underline text-[28px] transition-colors duration-300 ease-in-out hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub"
                >
                    <i className="fab fa-github"></i>   {/** using CDN for logos and linked with Index.html */}
                </a>

                <a
                    href="https://www.linkedin.com/in/anup-shahi-50486530a"
                    className="footer-icon my-0 mx-[10px] text-white no-underline text-[28px] transition-colors duration-300 ease-in-out hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>  {/* same here also */}
                </a>
            </div>
        </footer>
    )
}

export default Footer;
