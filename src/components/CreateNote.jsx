import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target

    setNote(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function addNote(event) {
    props.onClick(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
