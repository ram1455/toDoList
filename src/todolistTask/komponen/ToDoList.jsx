import React from "react";
import ToDo from "./ToDO";

const ToDoList = ({todos, setTodos}) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    todos.map( (todo) =>(
                        <ToDo   text={todo.text} 
                                key={todo.id} 
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}/>
                    ))
                }
            </ul>
        </div>

    )
}

export default ToDoList