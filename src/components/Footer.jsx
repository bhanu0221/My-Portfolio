import React from 'react'

function Footer() {
    return (
        <footer style={{
            textAlign: "center",
            padding: "16px 0",
            width: "100%",
            fontSize: "16px",
            color: "black",
            backgroundColor: "#f59e0b",
        }}>

            <p>Made By <span style={{fontWeight:"bold", color:"blue"}}>Anup Shahi</span> © 2025 All rights reserved.</p>
            <p>Click to visit<a href=" https://github.com/bhanu0221" target="_blank" rel="noopener noreferrer"
                style={{ color: "#2980b9", marginLeft: "5px" }}>'GitHub'</a>and Click to visit my profile <a href="https://www.linkedin.com/in/anup-shahi-50486530a" target="_blank" rel="noopener noreferrer"
                style={{ color: "#2980b9", marginLeft: "5px" }}>'LinkedIn'</a></p>
        </footer>
    )
}

export default Footer;
