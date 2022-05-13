import React from 'react';
import { Link } from "react-router-dom";




function Nav() {

    return <div> 

        <ul className='nav-ul'>

            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>

        </ul>
        <br/>

        <br/><br/>
    </div>
}

export default Nav;
