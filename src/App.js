import { useEffect, useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import ScoreCounter from './components/ScoreCounter';
function App() {
    const [storedNumbers, setStoredNumbers] = useState([{number: -1}])
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
    
    function storeNumber (newNumber) {
        setStoredNumbers([...storedNumbers, { number: newNumber}])
    }
    return <div>
        <div className="Card-row-1">
        <MemoryCard handler={storeNumber} number={newRandomOrder[0]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[1]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[2]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[3]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[4]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[5]}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard handler={storeNumber} number={newRandomOrder[6]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[7]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[8]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[9]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[10]}></MemoryCard>
        <MemoryCard handler={storeNumber} number={newRandomOrder[11]}></MemoryCard>
        </div>
    </div>
}

export default App;
