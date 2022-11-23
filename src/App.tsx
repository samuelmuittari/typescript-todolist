import React, {useState, ChangeEvent, FormEvent} from 'react';
import {ITodo} from './Components/Interfaces';
import {TodoPrint} from './Components/Todotable';
import './App.css';


function App() {
  const [desc, setDesc] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  
  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {description: desc, date: date, priority: priority}
    setTodos([...todos, newTodo]);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.target.name === 'desc') {
      setDesc(event.target.value)
    } else if (event.target.name === 'date') {
      setDate(event.target.value)
    } else {
      setPriority(event.target.value)
    }  
  } 

  const deleteTodo = (deletedTask : ITodo) => {
    setTodos(todos.filter((task) => task !== deletedTask))
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input type="text" name="desc" placeholder="Description" value={desc} onChange={handleChange} />
        <input type="date" name="date" placeholder="Date" value={date} onChange={handleChange} />
        <input type="text" name="priority" placeholder="Priority" value={priority} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
      <div>
        {todos.map((desc : ITodo, index: number) => {
          return <TodoPrint key={index} task={desc} onDelete={()=> deleteTodo(desc)} />
        })}
        
      </div>
    </div>
    
  ); 
}

export default App;
