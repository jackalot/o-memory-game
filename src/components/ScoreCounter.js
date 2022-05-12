import React from "react";
import MemoryCard from './MemoryCard';
function ScoreCounter (props) {
    function createCardOrder() {
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const newOrder = [];
        /* To generate random numbers */
        for(let i = 0; i < numberArray.length; i += 1) {
            newOrder.push(Math.floor(Math.random() * 12));
        }
        /* To generate the rest of the numbers */
        for(let i = 0; i < numberArray.length; i += 1) {
            const index = newOrder.indexOf(numberArray[i]);
            if(index === -1)
            {
                newOrder.push(numberArray[i]);
            }
        }
        /* This is so we don't have any duplicates */
        const uniqueOrder = [...new Set(newOrder)];
        return uniqueOrder;
    }
    const cardOrder = createCardOrder();
    return <div>
        <MemoryCard number={cardOrder[0]}></MemoryCard>
        <MemoryCard number={cardOrder[1]}></MemoryCard>
        <MemoryCard number={cardOrder[2]}></MemoryCard>
        <MemoryCard number={cardOrder[3]}></MemoryCard>
        <MemoryCard number={cardOrder[4]}></MemoryCard>
        <MemoryCard number={cardOrder[5]}></MemoryCard>
        <MemoryCard number={cardOrder[6]}></MemoryCard>
        <MemoryCard number={cardOrder[7]}></MemoryCard>
        <MemoryCard number={cardOrder[8]}></MemoryCard>
        <MemoryCard number={cardOrder[9]}></MemoryCard>
        <MemoryCard number={cardOrder[10]}></MemoryCard>
        <MemoryCard number={cardOrder[11]}></MemoryCard>
        <MemoryCard number={cardOrder[12]}></MemoryCard>
    </div>
}
export default ScoreCounter;