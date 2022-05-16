import React, { useEffect, useState } from "react";
import MemoryCard from './MemoryCard';
import '../ScoreCounter.css';
function ScoreCounter (props) {
    const [storedNumbers, setStoredNumbers] = useState([]);
    function shuffleOrder(numberArray) {
        numberArray.sort(() => Math.random() - 0.5);
    }
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    shuffleOrder(numberArray);
    function handleNumber(number) {
        const addMoreItem = () => {
            setStoredNumbers(prevItems => [...prevItems, number])
        }
        addMoreItem();
        shuffleOrder(numberArray);
    }
    return <div>
        <div className="Card-row-1">
        <MemoryCard onClick={handleNumber(numberArray[0])} number={numberArray[0]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[1])} number={numberArray[1]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[2])} number={numberArray[2]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[3])} number={numberArray[3]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[4])} number={numberArray[4]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[5])} number={numberArray[5]}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard onClick={handleNumber(numberArray[6])} number={numberArray[6]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[7])} number={numberArray[7]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[8])} number={numberArray[8]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[9])} number={numberArray[9]}></MemoryCard>
        <MemoryCard onClick={handleNumber(numberArray[10])} number={numberArray[10]}></MemoryCard>
        <MemoryCard number={numberArray[11]}></MemoryCard>
        </div>
    </div>
}
export default ScoreCounter;