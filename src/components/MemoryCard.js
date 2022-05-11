import React, { Component } from "react";
import '../MemoryCard.css';
function MemoryCard (props) {
    return <div className="card">
        <div className="card-content">
            {props.number}
        </div>
    </div>
}
export default MemoryCard;