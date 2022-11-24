import React , {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props){
    const [input,setInput] = useState(props.edit ? props.edit.value:'');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleTaskInputChange = e =>{
        setInput(e.target.value)

    }  

    const handleSubmit = e =>{
        e.preventDefault();
        
        props.onSubmit({
            id: uuidv4,        
            text: input
        });

        setInput('')
    }

    return(        
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                name='text'
                type='text'
                placeholder='Update'
                value={input} 
                className='todo-input'
                onChange={handleTaskInputChange}
                ref={inputRef}/>
                <button  variant='contained' type='submit' className='todo-button'>Update</button>
            </>
            ):(
                <>
                <input
                name='text'
                type='text'
                placeholder='To Do'
                value={input} 
                className='todo-input edit'
                onChange={handleTaskInputChange}
                ref={inputRef}/>
                <button  variant='contained' type='submit' className='todo-button edit'>Add</button>
                </>
            ) }            
        </form>
    )
}

export default TodoForm;