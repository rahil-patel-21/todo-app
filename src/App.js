import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from  './todo.js';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=> {
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc => ({text: doc.data().todo, id:doc.id})))
})
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      'todo':input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>

        <Button type='submit' disabled={!input} onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo.text} id={todo.id}/>     
        ))}
      </ul>
    </div>
  );
}

export default App;
