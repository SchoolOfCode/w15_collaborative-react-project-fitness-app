import React from "react";
import Lunge from "../App/pictures/Lunge.png";
import Logo from "../App/pictures/logo.png"


function BackgroundImage() {
    return (
        <div className="homepage">
            <img id="homepage-background-img" src={Lunge} alt="image of a man lunging" />
            <img id="homepage-logo" src={Logo} alt="flexercise logo" />
        </div>
    )
}

export default BackgroundImage;