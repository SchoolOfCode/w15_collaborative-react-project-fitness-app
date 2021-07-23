import React from "react";
import { Link} from "react-router-dom";
import TextBox from "../../components/4_TextBox";
import LogoImage from "../../components/2_Logo";

// This page is the Home Page

export default function Error(){

    return (
    <div className="page-div error-div">
        <Link to="/">
        <LogoImage /></Link>
        <TextBox text={
            <>
            <h4>Howdy Partner! Looks like you done took a wrong turn.</h4>
            <h4>Hit that button to be gettin' back to where you need to be</h4>
            </>
        } 
        />
        <Link to="/">
        <button className="my-button">
            HOME
        </button>
        </Link>
    </div>
    );
};