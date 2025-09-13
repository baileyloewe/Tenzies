import React from "react"

export default function Die(props: any) {
    return (
        <button className={`dice ${props.isHeld ? "held" : ""}`} onClick={props.markDieHeld}>
            {props.value}
        </button>
    )
}