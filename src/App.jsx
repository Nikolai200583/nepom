import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from './components/store/todoSlice'
import TodoList from './components/todoList';
import InputField from './components/inputField';
import './App.css';



function App() {

const [text, setText] = useState('');

const dispatch = useDispatch();
const addTask = () => {dispatch(addTodo({text}))
setText('')}






  return (
    <div className="App">
    <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
    <TodoList/>
    </div>
  );
}

export default App;
