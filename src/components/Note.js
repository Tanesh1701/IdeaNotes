import React from "react";



function Note(props) {
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* {notes.map(createNotes)} */}
    </div>
  );
}

export default Note;
