export default function Die(props) {
    return (
        <button className={`dice ${props.isHeld ? "held" : null}`} onClick={() => props.handleClick(props.id)}>
            {props.value}
        </button>
    )
}