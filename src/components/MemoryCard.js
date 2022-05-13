import React, { Component, useEffect, useState } from "react";
import '../MemoryCard.css';

function MemoryCard (props) {

    return <div className="card">
        <div className="card-content">
            <p>{props.number}</p>
        </div>
    </div>
}
export default MemoryCard;