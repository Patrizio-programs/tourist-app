import React from "react";
import banner from "./header-banner-img.jpg";
import icon from "./caribbean.png";

function Header() {

    return <div className="header-div">
        
        <div className="header">
        <img className="header-img" src={icon} alt=''/>
        <h1 className="header-h1">Caribbean Vybe</h1>
        </div>
            

        <img className="banner" src={banner} alt=''/>
    </div>
}

export default Header;