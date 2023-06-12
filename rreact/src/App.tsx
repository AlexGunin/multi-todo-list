import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setTimeout(() => setTodos(data), 3000)
        console.log('DATA', data)
      } catch(err) {
        console.log(err)
      }
    }

    request()
  }, [])

  return (
    <div className="App">
      {/* @ts-ignore */}
      {todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
}

export default App;
