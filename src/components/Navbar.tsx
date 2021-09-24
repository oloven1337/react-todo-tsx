import React from 'react'
import {Link} from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React + TS</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Список дел</Link></li>
                <li><Link to="/about">Информация</Link></li>
            </ul>
        </div>
    </nav>
)
