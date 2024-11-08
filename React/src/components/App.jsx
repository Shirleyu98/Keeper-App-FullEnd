import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;


function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/notes`)
    .then(response => setNotes(response.data))
    .catch(error => console.error(error));
  },[])

  function addNote(newNote) {
    axios.post(`${API_BASE_URL}/notes`, newNote)
    .then(({data }) => {
      setNotes((prevNotes) => {
        return [...prevNotes, data];
      });
    })
    .catch(error => console.error(error))

  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`${API_BASE_URL}/notes/${id}`)
    .then(({data}) => {
      setNotes((prevNotes) => {
        //fetch the id of only the successfuly deleted records from db, ensuring persistence
        return prevNotes.filter(note => note.id !== data.id);
      });
    })
    .catch(error => console.error(error))


  }

  function updateNote(id, updatedNote) {
    console.log(id, updatedNote);
    axios.put(`${API_BASE_URL}/notes/${id}`, updatedNote)
    .then( ({data}) => {
      setNotes((prevNotes) => {
        //fetch only the successfully updated records from db,
        //and update status accordingly, ensuring persistence
        return prevNotes.map( note =>
          note.id === data.id ? data : note
        );
      });
    })
    .catch(error => console.error(error))

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
