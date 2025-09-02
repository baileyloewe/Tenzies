import Dice from './components/Die.jsx'

export default function App() {

    const diceValues = new Array(10).fill(Math.floor(Math.random() * 6) * 10)

    const diceComponents = diceValues.map(val => {
        return <Dice value={val}/>
    })

    return (
        <main>
            {diceComponents}
        </main>
    )
}