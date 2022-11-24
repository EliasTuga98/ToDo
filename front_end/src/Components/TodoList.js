import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

function TodoList({todo}){
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(todo.text.trim() === ''){
           return ;
        }
        todo.id = Math.floor(Math.random() * 10);

        const newTodos =[todo,...todos]

            setTodos(newTodos);
            console.log(...todos)                   
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
    })
        setTodos(updatedTodos)
    }

    const updateTodo = (todoId,newValue) =>{
        if(newValue.text.trim() === ''){
            return ;
         }

        setTodos(prev =>prev.map(item => (item.id === todoId ? newValue:item )));
    }

    const removeTodo = id =>{
        const remove = [...todos].filter(todo => todo.id !==id)
        
        setTodos(remove);
    }
    return(
        <div className='todo-list'>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
        </div>
    )

}

export default TodoList;