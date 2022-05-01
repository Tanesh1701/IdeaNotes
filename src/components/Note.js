import React from "react";
import Draggable from 'react-draggable';
import LeaderLine, { positionByWindowResize } from "react-leader-line";


function drawLines() {
  var startElement = document.getElementById('1'),
  endElement = document.getElementById('2');
 
// New leader line has red color and size 8.
  new LeaderLine(startElement, endElement, {color: 'black', size: 4});
}

function Note(props) {
  return (
    <Draggable>
    <div onClick={drawLines} id={props.identifier} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* {notes.map(createNotes)} */}
    </div>
    </Draggable>
  );
}

export default Note;
