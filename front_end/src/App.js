import './App.css';
import React , {useState} from 'react';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todo,setTodo] = useState('');

  return (
    <div className="todo-app">
      <header className="App-header">
        <h1>To Do List App</h1>
        
      </header>
        <div className="table">
          <TodoList/>

   
       
      </div>
    </div>
  );
}

export default App;
