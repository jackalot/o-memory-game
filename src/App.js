import './App.css';
import MemoryCard from './components/MemoryCard';
import ScoreCounter from './components/ScoreCounter';
function App() {
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
