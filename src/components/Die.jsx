export default function Die(props) {
    return (
        <button className={`dice ${props.isHeld ? "held" : ""}`} onClick={props.markDieHeld}>
            {props.value}
        </button>
    )
}