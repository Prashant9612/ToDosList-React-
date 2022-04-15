import './App.css';
import Header from './MyComponents/Header';
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddToDo from './MyComponents/AddToDo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initToDo;
  if (localStorage.getItem("todos") === null) {
    initToDo = []
  }
  else {
    initToDo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addToDo = (title, desc) => {
 
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }


    let myToDo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myToDo])

  }
  const [todos, setTodos] = useState(initToDo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <>
      <Router>
        <Header title={"My ToDos List"} searchBar={false} />
    
          <Routes>
          <Route exact path="/" element={
              <>
                <AddToDo addToDo={addToDo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            
          }/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
