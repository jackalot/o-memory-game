import React, { useEffect, useState } from "react";
import '../ScoreCounter.css';
function ScoreCounter (props) {
    
    return <div className="scoreBoard">
       <div className="currentScore">
        <p>Current Score: {props.currentScore}</p>
       </div>
       <div className="highScore">
        <p>{props.highScore}</p>
       </div>
    </div>
}
export default ScoreCounter;