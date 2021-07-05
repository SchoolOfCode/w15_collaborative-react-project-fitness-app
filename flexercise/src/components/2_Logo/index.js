// Flexercise Logo to be added on several pages see component tree 
/* The logo is transparent, the background colour for pages is 232323 
// To import to upper components add: <Logo /> */

import React from "react";
import Logo from "../App/pictures/logo.png"


function LogoImage() {
    return (
        <div className="logo">
            <img
                src={Logo}
                alt="logo"
            />
        </div>
    )
}



export default LogoImage;

