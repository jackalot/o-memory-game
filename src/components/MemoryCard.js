import React, { Component, useEffect, useState } from "react";
import '../MemoryCard.css';

function MemoryCard (props) {
    const [clicked, setClicked] = useState(false);
    
    return <div onClick={} className="card">
        <div className="card-content">
            <p>{props.number}</p>
        </div>
    </div>
}
export default MemoryCard;