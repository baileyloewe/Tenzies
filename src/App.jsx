import Dice from './components/Die.jsx'
import { useState, useEffect, useRef } from 'react'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())

    const diceElements = dice.map(die => {
        return <Dice 
                    key={die.id} 
                    value={die.value} 
                    isHeld={die.isHeld} 
                    markDieHeld={() => markDieHeld(die.id)}
                />
    })

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

    const btnRef = useRef(null)

    useEffect(() => {
        gameWon && 
        btnRef.current.focus()
    }, [gameWon])

    function markDieHeld(id) {
        setDice(prevDice => prevDice.map(die => die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
        ))
    }

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollNewDice() {
        setDice(prevDice => prevDice.map(die => !die.isHeld ?
            {...die, value: Math.ceil(Math.random() * 6)} :
            die
        ))
    }
    

    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            {gameWon ? 
            <button className="button" onClick={() => setDice(generateAllNewDice())} ref={btnRef}>New Game</button> :
            <button className="button" onClick={rollNewDice}>Roll</button>}
        </main>
    )
}