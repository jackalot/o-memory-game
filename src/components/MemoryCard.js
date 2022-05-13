import React, { Component, useEffect, useState } from "react";
import '../MemoryCard.css';

function MemoryCard (props) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        if(clicked === false)
        {
            setClicked(true);
        }
        if(clicked === true)
        {
            setClicked(false);
        }
    }
    return <div onClick={props.handler} className="card">
        <div className="card-content">
            <p>{props.number}</p>
        </div>
    </div>
}
export default MemoryCard;