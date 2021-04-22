import React from 'react';
import "./results.css";
import NameCard from "../namecard/namecard";
const Result=(props)=>{
    return(
        <div className="result">
            {props.suggestedName.map((value,id)=> {
                return <NameCard suggestedVlue={value} key={id}/>
            })}
        </div>
    )
}
export default Result;