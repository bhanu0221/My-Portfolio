import React from 'react'
function Footer() {
    return (
        <footer 
            style={{
            fontFamily: "cursive",
            textAlign: "center",
            padding: "15px 2px",
            width: "100%",
            fontSize: "16px",
        }}>

            
            <div className="footer-links">
                <a
                    href="https://github.com/bhanu0221"
                    className="footer-icon my-0 mx-[10px] text-black no-underline text-[28px] transition-colors duration-300 ease-in-out hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub"
                >
                    <i className="fab fa-github"></i>   {/** using CDN for logos and linked with Index.html */}
                </a>

                <i className="fa-brands fa-react text-4xl text-blue-500"></i>  {/* React icon */}

                <a
                    href="https://www.linkedin.com/in/anup-shahi-50486530a"
                    className="footer-icon my-0 mx-[10px] text-black no-underline text-[28px] transition-colors duration-300 ease-in-out hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>  {/* same here also */}
                </a>  
                <p>Made By <span className='font-bold text-zinc-800'>Anup Shahi</span> Build with React + Vite.</p>
                <p>© 2025 All rights reserved.</p>
            </div>        
        </footer>
    )
}

export default Footer;