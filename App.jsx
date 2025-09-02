import Dice from './components/Die.jsx'

export default function App() {

    const diceValues1 = new Array(5).fill().map(() => Math.floor(Math.random() * 6))
    const diceValues2 = new Array(5).fill().map(() => Math.floor(Math.random() * 6))

    const diceComponentsRow1 = diceValues1.map(val => {
        return <Dice num={val}/>
    })

    const diceComponentsRow2 = diceValues2.map(val => {
        return <Dice num={val}/>
    })

    return (
        <main>
            <div>{diceComponentsRow1}</div>
            <div>{diceComponentsRow2}</div>
        </main>
    )
}