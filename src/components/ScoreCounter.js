import React from "react";
import MemoryCard from './MemoryCard';
import '../ScoreCounter.css';
function ScoreCounter (props) {
    function shuffleOrder(numberArray) {
        numberArray.sort(() => Math.random() - 0.5);
    }
    const cardOrder = createCardOrder();
    return <div>
        <div className="Card-row-1">
        <MemoryCard number={cardOrder[0]}></MemoryCard>
        <MemoryCard number={cardOrder[1]}></MemoryCard>
        <MemoryCard number={cardOrder[2]}></MemoryCard>
        <MemoryCard number={cardOrder[3]}></MemoryCard>
        <MemoryCard number={cardOrder[4]}></MemoryCard>
        <MemoryCard number={cardOrder[5]}></MemoryCard>
        <MemoryCard number={cardOrder[6]}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard number={cardOrder[7]}></MemoryCard>
        <MemoryCard number={cardOrder[8]}></MemoryCard>
        <MemoryCard number={cardOrder[9]}></MemoryCard>
        <MemoryCard number={cardOrder[10]}></MemoryCard>
        <MemoryCard number={cardOrder[11]}></MemoryCard>
        <MemoryCard number={cardOrder[12]}></MemoryCard>
        </div>
    </div>
}
export default ScoreCounter;