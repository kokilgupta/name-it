import React from 'react';
import "./namecard.css";

const NameCard=(props)=>{
    return(
        <div className="nameCard">
            <p className="result_card">{props.suggestedVlue}</p>
        </div>
    )
}
export default NameCard;