import React, { useEffect } from "react";
import MemoryCard from './MemoryCard';
import '../ScoreCounter.css';
function ScoreCounter (props) {
    function shuffleOrder(numberArray) {
        numberArray.sort(() => Math.random() - 0.5);
    }
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    shuffleOrder(numberArray);
    function handleNewCards () {
        shuffleOrder(numberArray);
    }
    return <div>
        <div className="Card-row-1">
        <MemoryCard handler={handleNewCards} number={numberArray[0]}></MemoryCard>
        <MemoryCard number={numberArray[1]}></MemoryCard>
        <MemoryCard number={numberArray[2]}></MemoryCard>
        <MemoryCard number={numberArray[3]}></MemoryCard>
        <MemoryCard number={numberArray[4]}></MemoryCard>
        <MemoryCard number={numberArray[5]}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard number={numberArray[6]}></MemoryCard>
        <MemoryCard number={numberArray[7]}></MemoryCard>
        <MemoryCard number={numberArray[8]}></MemoryCard>
        <MemoryCard number={numberArray[9]}></MemoryCard>
        <MemoryCard number={numberArray[10]}></MemoryCard>
        <MemoryCard number={numberArray[11]}></MemoryCard>
        </div>
    </div>
}
export default ScoreCounter;