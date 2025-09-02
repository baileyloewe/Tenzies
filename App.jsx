import Dice from './components/Die.jsx'
import { useState } from 'react'

export default function App() {


    function generateAllNewDice() {
        return new Array(10).fill().map(() => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(generateAllNewDice())

    const diceElements = dice.map(num => {
        return <Dice value={num}/>
    })

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-button" onClick={() => setDice(generateAllNewDice())}>Roll</button>
        </main>
    )
}