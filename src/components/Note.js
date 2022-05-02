import React from "react";
import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';

function Note(props) {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
    <div id={props.identifier} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
    </Draggable>
  );
}

export default Note;
