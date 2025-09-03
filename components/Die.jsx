export default function Die(props) {
    return (
        <button className={`dice ${props.isHeld ? "held" : null}`} onClick={props.markDieHeld}>
            {props.value}
        </button>
    )
}