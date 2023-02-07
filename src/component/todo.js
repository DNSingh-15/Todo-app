import React, { useState } from "react";
import './Todo.css';


function Todo() {
    const [activity, setActivity] = useState("")
    const [List, setList] = useState([])

    function addActivity() {
        setList((List) => {
            const updatedList = [...List, activity]
            // console.log(updatedList)
            setActivity("")
            return updatedList
        })
    }


    function Remove(i) {
        const UpdateData = List.filter((elem, id) => {
            return i != id;
        })
        setList(UpdateData)
    }


    return (
        <div className="header">
            <h1>Todo List</h1>
            <input className="form" type="text" placeholder="Enter Your Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button className="btn" onClick={addActivity}>Add</button>
            <div> <h1>Here is our List</h1>
                {List != [] && List.map((data, i) => {
                    return (
                        <>
                            <ul key={i}>
                                <li className="listData"> {data}</li>
                                <button className="list_btn" onClick={() => Remove(i)}>Remove</button>
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Todo;