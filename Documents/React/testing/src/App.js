import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ToDo from './components/Todo';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      toDos={toDos}
      setTodos={setTodos}
      /> 
      <TodoList 
      toDos={toDos}
      />
    </div>
  );
}

export default App;
