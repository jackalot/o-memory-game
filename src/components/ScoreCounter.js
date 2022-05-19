import React, { useEffect, useState } from "react";
import '../ScoreCounter.css';
function ScoreCounter (props) {
    const [highScore, setHighScore] = useState(0);
    useEffect(() => {
        if(props.currentScore > highScore)
        {
            setHighScore(props.currentScore);
        }
    }, [props.currentScore, highScore])
    return <div className="scoreBoard">
       <div className="currentScore">
        <p>Current Score: {props.currentScore}</p>
       </div>
       <div className="highScore">
        <p>High Score: {highScore}</p>
       </div>
    </div>
}
export default ScoreCounter;