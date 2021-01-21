import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className = "header">
            <nav className = "header-list">
                <Link to = "/"
                    className = "header-link"
                    id = "About"
                    >
                    Home
                </Link>
                <Link to = "/about"
                    className = "header-link"
                    id = "Home"
                    >
                    About
                </Link>
                <Link to = "/contact"
                    className = "header-link"
                    id = "Contact"
                    >
                    Contact
                </Link>
            </nav>
        </div>
    )
  }
  export default Header