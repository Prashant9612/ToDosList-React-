import React from 'react';

const ToDo = ({todo, onDelete}) => {
  return (
    <div className='my-4'>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
}

export default ToDo;
