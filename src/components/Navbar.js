import React from "react";
import logo from "../images/FDB2.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo"/>
            <span className="title">FDB Job Board</span>
        </nav>
    )
}