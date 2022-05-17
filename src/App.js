import './App.css';
import MemoryCard from './components/MemoryCard';
import ScoreCounter from './components/ScoreCounter';
function App() {
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
        const randomArray = randomizeArray(orderedArray);
        return randomArray;
    }
    const newRandomOrder = createRandomOrder();
    console.log(newRandomOrder)
    return <div>
        <div className="Card-row-1">
        <MemoryCard number={1}></MemoryCard>
        <MemoryCard number={2}></MemoryCard>
        <MemoryCard number={3}></MemoryCard>
        <MemoryCard number={4}></MemoryCard>
        <MemoryCard number={5}></MemoryCard>
        <MemoryCard number={6}></MemoryCard>
        </div>
        <div className="Card-row-2">
        <MemoryCard number={7}></MemoryCard>
        <MemoryCard number={8}></MemoryCard>
        <MemoryCard number={9}></MemoryCard>
        <MemoryCard number={10}></MemoryCard>
        <MemoryCard number={11}></MemoryCard>
        <MemoryCard number={12}></MemoryCard>
        </div>
    </div>
}

export default App;
