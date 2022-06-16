import React from "react";
import logo from "../images/FDB2.png"

export default function Navbar() {
    return (
        <nav className="page--top">
            <img src={logo} className="logo"/>
            <span className="title1">FDB </span>
            <span className="title2">Job Board</span>
        </nav>
    )
}