import React from "react"

export default function Task(props) {
    let [status, setStatus] = React.useState(props.status.toLowerCase())
    let [hovered,setHovered] = React.useState(false)

    let styles = {
        height: "15vh",
        width: "100%",
        backgroundColor: (props.selected || hovered) ? "rgb(199, 212, 236)" : "var(--task-blue)",
        boxShadow: "rgb(162, 179, 199) 0px 1px 4px",
        borderBottom: "1px solid rgb(182, 182, 182)",
        cursor: "pointer",
    }

    function changeStatus() {
        switch(status) {
            case "active":
                setStatus("pending")
                break;
            case "pending":
                setStatus("done")
                break;
            case "done":
                setStatus("active")
                break;
        }
    }

    function handleHover(action) {
        setHovered(action)
    }

    return (
        <div style={styles} className="task" onClick={() => props.display(props.id)}
        onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <h3 className="task--header">{props.title}</h3>
            <div className="task--desc">
                <p>{props.description}</p>
            </div>
            <div className="task--stats">
                <h6>{props.date}</h6>
                <div className="task--status">
                    <img src={require(`../${status}.png`)}/>
                    <h6 onClick={changeStatus}><u>{status.toUpperCase()}</u></h6>
                </div>
            </div>
        </div>
    )
}