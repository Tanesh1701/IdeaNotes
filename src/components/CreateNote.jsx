import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> : null}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
