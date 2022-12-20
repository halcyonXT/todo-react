import React from "react"
import Header from './components/Header'
import Task from "./components/Task"
import Display from "./components/Display"

function App() {
    let [tasks, setTasks] = React.useState([{
        id: 0,
        title: "Welcome to TODO",
        description: "Add some tasks to start",
        date: "Welcome",
        status: "ACTIVE",
        selected: false
    }])
    let [displayed, setDisplayed] = React.useState({
        title: "Welcome to TODO",
        description: "Add some tasks to start",
        id: 0
    })


    function addTask() {
        let dt = new Date()
        let hours = dt.getHours()
        let minutes = dt.getMinutes()
        let seconds = dt.getSeconds()
        if (hours < 10) {hours = "0" + hours}
        if (minutes < 10) {minutes = "0" + minutes}
        if (seconds < 10) {seconds = "0" + seconds}
        let time = `${hours}:${minutes}:${seconds}`
        time = String(time)
        setTasks(prevState => ([
            ...prevState,
            {
                id: prevState.length,
                title: "New task",
                description: "Lorem ipsum dolor sit amet",
                date: time,
                status: "PENDING",
                selected: false
            }
        ]))
        display(tasks.length)
    }

    function display(id) {
        setTasks(prevState => {
            let newState = [...prevState]
            for (let item of newState) {
                item.selected = false
            }
            newState[id].selected = true
            setDisplayed({
                id: id,
                title: newState[id].title,
                description: newState[id].description
            })
            return newState
        })
    }

    let displayTasks = tasks.map(task => {
        return  <Task id={task.id}
        title={task.title} 
        description={task.description}
        date={task.date}
        status={task.status}
        display={display}
        selected={task.selected}
        />
    })

    function handleTitle(event) {
        const {value} = event.target
        setDisplayed(prevState => ({
            ...prevState,
            title: value
        }))
        setTasks(prevState => {
            let newState = [...prevState]
            newState[displayed.id].title = value
            return newState
        })
    }

    function handleDesc(event) {
        const {value} = event.target
        setDisplayed(prevState => ({
            ...prevState,
            description: value
        }))
        setTasks(prevState => {
            let newState = [...prevState]
            newState[displayed.id].description = value
            return newState
        })
    }

    return (
        <div>
            <Header/>
            <div className="main">
                <div className="listing">
                    {displayTasks}
                    <div className="addBtn"><button onClick={addTask}>+</button></div>
                </div>
                <Display
                    title={displayed.title}
                    description={displayed.description}
                    handleTitle={handleTitle}
                    handleDesc={handleDesc}
                 />
            </div>
        </div>
    );
}

export default App;
