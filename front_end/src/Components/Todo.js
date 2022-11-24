import React,{useState} from 'react';
import TodoForm from './TodoForm'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';


function Todo({todos,completeTodo,removeTodo,updateTodo}){
    const [edit,setEdit] = useState({
        id:null,
        task:''
    });

    const submitUpadate = value =>{
        updateTodo(edit.id,value);

        setEdit({
            id:null,
            value:""
        })
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpadate} ></TodoForm>
    }

    return(
        todos.map((todo,index)=>(
        //check if the task in done
            <div className={todo.isComplete ? 'todo-row complete':'todo-row'}
                key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    
                    {todo.text}
                </div>
                <div className='icons'>
                    <DoneIcon onClick={() => completeTodo(todo.id)}
                    className='done-icon'/>                    
                    <EditIcon onClick={() => setEdit({id:todo.id,task: todo.text})}
                    className='edit-icon'/>
                    <ClearIcon onClick={()=> removeTodo(todo.id)} className='delete-icon' />                    
                </div>
            </div>
        ))
    );

}
export default Todo;