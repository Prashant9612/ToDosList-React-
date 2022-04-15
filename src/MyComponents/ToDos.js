import React from 'react';
import ToDo from './ToDo';

const ToDos = (props) => {
    let myStyle={
        minHeight: "60vh"
    }
  return (
    <div className='container my-4' style={myStyle}>
      <h3 className='text-center my-3'>ToDos List</h3>      
      {props.todos.length===0?"No ToDos to display" :
      props.todos.map((todo)=>{
        return  <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    })
      }     
    </div>
  );
}

export default ToDos;
