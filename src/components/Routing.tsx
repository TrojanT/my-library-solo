import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Library from "../view/Library";
import Contact from "../pages/Contact";
import React from "react";
import NavBar from "./NavBar";
import About from "../pages/About";

const Routing: React.FC = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Library/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </Router>
    )
}

export default Routing
