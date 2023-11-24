import { useEffect, useState } from 'react';

  function App() {
    const [count, setCount] = useState(0)
    const [log, setLog] = useState([])
    function changeCount() {
      setCount(count + 1)
    }
    useEffect(() => {
      setLog((prevVal) => [...prevVal, "mounted"])
      return () => {
        setLog(prevVal => [...prevVal, "Unmount"])
      }
    }, [])
    // useEffect(() => {
    //   if (count % 2 === 0) {
    //     setLog((prevVal) => [...prevVal, "Updated"])
    //   }
    // }, [count]) Просто було цікаво таке зробити
    useEffect(() => {
      setLog(prevVal => [...prevVal, "Updated"])
    }, [count])
    return(
      <>
        <span>{count}</span>
        <button onClick={changeCount}>Click</button>
        <div>
          {log.map((message) => (
            <div>
              {message}
              <hr/>
            </div>
          ))}
        </div>
      </>  
    )
  } 
export default App;


// import { TodoList } from './components/todolist';
// import './App.css';
// import { useState } from 'react';
// import { Button } from './components/button';

// function App() {
//   const [value, setValue] = useState("")

//   const [todos, setTodos] = useState([
//     {name: "Sergio"},
//     {name: "Alex"},
//     {name: "Marry"}
//   ])

//   function addTodo () {
//     setTodos((prevValue) => [...prevValue, newTodo])
//     setValue("")
//   }

//   const newTodo = {name: value}

//   return (
//     <>
//       <TodoList todos={todos}/>
//       <Button addFunc={addTodo} buttonValue={"Click"} />
//       <input value={value} onChange={(e) => setValue(e.target.value)}></input>
//     </>
//   ) 
// }

// export default App; 
// Інший проект