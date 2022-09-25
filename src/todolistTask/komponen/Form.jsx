import React, { useState } from "react";

const Form = ({inputText, setInputText, todos, setTodos})=>{
    const [place, setPlace ]= useState('ketik disini')
    const handleInput = (e)=>{
        setInputText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (inputText.length > 0) {
            setTodos([
                ...todos, {text : inputText, id : Math.random() * 1000,isCompleted:false}])
            setInputText('');
            setPlace('ketik disini');
        } else {
            setPlace('inputan tidak bisa kosong')
        }
    }

    return(
        <form>
            <input placeholder={place} value={inputText} type="text" className="todo-input" onChange={handleInput} />
            <button className="todo-button" type="submit" onClick={handleSubmit}>ADD
            </button>
        </form>
    )
}

export default Form