import React from 'react';
import "./header.css";
import header_image from '../images/header_image.png';
const Header=(props)=>{
    return(
        <div className="header">
           <img src={header_image}
               className={props.inputBool?"header_image_contracted":"header_image_expanded"}
           />
            <h1 className={props.inputBool?"header_text_contracted":"header_text_expanded"}> {props.heading} </h1>
        </div>
    );
};

export default Header;