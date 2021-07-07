import React from "react";
import Lunge from "../App/pictures/Lunge.png";


function BackgroundImage() {
    return (
        <div className="homepage">
            <img id="homepage-background-img" src={Lunge} alt="man lunging" />
        </div>
    )
}

export default BackgroundImage;