import React, { useState } from 'react';

const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be blank");
        }
        else {
            props.addToDo(title, desc);
            setDesc("")
            setTitle("")
        }
    }
    let myStyle = {
        margin: "0 12px"
    }

    return (
        <div className='container my-3'>
            <h4>ToDos List</h4>
            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                    <small id="textHelp" class="form-text text-muted">Add an item to the list.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add to List</button>
                <button type="submit" className="btn btn-sm btn-danger " style={myStyle} onClick={() => {if(window.confirm('Delete all ToDos?')){localStorage.clear()}}}>Clear All ToDos</button>

            </form>
        </div>
    );
}

export default AddToDo;
