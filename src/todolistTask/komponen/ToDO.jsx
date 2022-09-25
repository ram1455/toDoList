import React from "react";

const ToDo = ({text, setTodos, todos, todo})=>{

    const DeleteTodo = ()=>{
        setTodos(todos.filter( element => element.id !== todo.id))
    }
    const CompleteTodo = ()=>{
        setTodos( todos.map(element => {
            if (element.id === todo.id) {
                return {
                    ...element, isCompleted : !element.isCompleted
                }
            }
            return element;
        }))
    }
    return (
        <div class="todo">
            <li class={`todo-item ${todo.isCompleted ? "completed" : ""}`} >{text}</li>
            <button onClick={CompleteTodo} className="complete-btn">done</button>
            <button onClick={DeleteTodo} className="trash-btn">remove</button>
        </div>
    )
}

export default ToDo;