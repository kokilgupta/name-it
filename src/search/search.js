import React,{useState} from 'react';
import "./search.css";

const Search=(props)=>{
    return(
        <div className="search">
            <input type="search" className="search_bar" placeholder="Type keywords"
            onChange={(event)=> {props.onInputChange(event.target.value)}}/>
        </div>
    )
}

export default Search;