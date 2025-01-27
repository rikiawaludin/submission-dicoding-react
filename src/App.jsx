import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import { getInitialData } from "./utils";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="note-app">
        <header className="note-app__header">
          <h1>Notes</h1>
          <SearchBar query={query} setQuery={setQuery} />
        </header>
        <div className="note-app__body">
          <NoteInput addNote={addNote} />
          <NotesList
            notes={filteredNotes}
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
        </div>
      </div>
    </>
  );
}
