import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { useEffect } from "react";
import { Xwrapper } from "react-xarrows"
import ConnectLines from "./Connector";
import CreateArea from "./CreateNote";

function App() {
  const[notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function saveNote(note) {
    setNotes((prevValues) => {
      return [...prevValues, note]
    })
  }

  function deleteNote(id) {
    setNotes(prevValues => {
      return prevValues.filter((item, index) => {
        return index !== id
      })
    })
  }

  function Lines() {

  }

  return (
    <div>
      <Header />
      <Xwrapper>
      <CreateArea
        onClick = {saveNote}
      />
      {notes.map((note, index) => 
        <Note
          key = {index}
          identifier = {index} 
          title = {note.title} 
          content = {note.content}
          onDelete = {deleteNote}
        />)}
      <Footer />
      {/* <ConnectLines/> */}
      </Xwrapper>
    </div>
  );
}

export default App;
