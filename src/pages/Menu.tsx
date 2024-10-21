import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>homePage</Link></li>
                <li><Link to={"users"}>usersPage</Link></li>
            </ul>
        </div>
    );
};

export default Menu;