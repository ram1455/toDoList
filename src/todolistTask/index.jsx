import { useState } from "react";
import "../App.css"
import Form from "./komponen/Form";
import ToDoList from "./komponen/ToDoList";

function Index() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
    <header>
      <h1>To Do List</h1>
    </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default Index;
