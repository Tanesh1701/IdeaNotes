import React from "react";
import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';

function Note(props) {
  function handleDelete() {
    props.onDelete(props.identifier)
  }
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
    <div id={props.identifier} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
    </Draggable>
  );
}

export default Note;
