import { useEffect, useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import ScoreCounter from './components/ScoreCounter';
function App() {
    const [storedNumbers, setStoredNumbers] = useState([{number: -1}])
    const [currentScore, setCurrentScore] = useState(0);
    /** Like indexOf() for arrays, but allows us to find explicitly our stored number since its an object*/
    function findStoredNumber(objectArray, valueToFind)
    {
        let index = -1;
        for(let i = 0; i < objectArray.length; i++)
        {
            if(objectArray[i].number === valueToFind)
            {
                index = i;
            }
        }
        return index;
    }
    function createRandomOrder() {
        function createInitialArray () {
            const array = [];
            for(let i = 0; i < 12; i += 1)
            {  
               array.push(i);
            }
            return array;
        }
        /* Create an initial array of numbers 1 - 12 */
        const orderedArray = createInitialArray();
        function randomizeArray(array) {
            for(let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        /* Randomize those numbers so it doesn't look like: [1, 2, 3, 4, 5]; */
        randomizeArray(orderedArray);
        return orderedArray;
    }
    let newRandomOrder =  createRandomOrder();
    useEffect(() => {
        /** Change the order after any change to this component */
        newRandomOrder =  createRandomOrder();
    })
    /** Store the number clicked in state */
    function storeNumber (newNumber) {
        /** Call setStoredNumbers which will store the newNumber */
        setStoredNumbers([...storedNumbers, { number: newNumber}])
        setCurrentScore(currentScore + 1);
    }
    function checkNumber(newNumber) {
        const index = findStoredNumber(storedNumbers, newNumber);
        /** The User didn't select a card they already picked before, store this number then. */
        if(index === -1)
        {
            storeNumber(newNumber);
        }
        else /** The user selected a card they already selected. */
        {
            setCurrentScore(0);
            setStoredNumbers([{number: -1}])
        }
    }
    return <div>
        <ScoreCounter currentScore={currentScore}></ScoreCounter>
        <div className="Card-row-1">
        <MemoryCard handler={checkNumber} number={newRandomOrder[0]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[1]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[2]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[3]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[4]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[5]}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard handler={checkNumber} number={newRandomOrder[6]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[7]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[8]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[9]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[10]}></MemoryCard>
        <MemoryCard handler={checkNumber} number={newRandomOrder[11]}></MemoryCard>
        </div>
    </div>
}

export default App;
