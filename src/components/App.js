import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import { Xwrapper } from "react-xarrows"
import ConnectLines from "./Connector";

function App() {
  return (
    <div>
      <Header />
      <Xwrapper>
      {notes.map((note) => 
        <Note
          key = {note.key}
          identifier = {note.key} 
          title = {note.title} 
          content = {note.content}
        />)}
      <Footer />
      <ConnectLines/>
      </Xwrapper>
    </div>
  );
}

export default App;
