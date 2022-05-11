import React, { Component } from "react";

function MemoryCard (props) {
    return <div className="card">
        <div className="card-content">
            {props.number}
        </div>
    </div>
}
export default MemoryCard;