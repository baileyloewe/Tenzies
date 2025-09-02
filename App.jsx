import Dice from './components/Die.jsx'

export default function App() {

    const diceValues = new Array(10).fill().map(() => Math.ceil(Math.random() * 6))

    const diceComponents = diceValues.map(val => {
        return <Dice num={val}/>
    })

    return (
        <main>
            <div className="dice-container">{diceComponents}</div>
        </main>
    )
}