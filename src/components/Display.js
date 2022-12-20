import React from "react"

export default function Display(props) {
    let divstyles = {
        display: "block",
        backgroundColor: "white",
        width: "60vw",
        height: "89vh",
        padding: "10px",
    }

    return (
        <div style={divstyles}>
            <input className="disp--title" value={props.title} onChange={props.handleTitle}></input>
            <hr/>
            <textarea className="disp--desc" value={props.description} onChange={props.handleDesc}/>
        </div>
    )
}