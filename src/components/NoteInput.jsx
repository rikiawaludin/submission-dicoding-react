import React, { useState } from "react";

export default function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle("");
    setBody("");
    setCharLimit(50);
  };

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setTitle(input);
      setCharLimit(50 - input.length);
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <h2>Buat catatan</h2>
      <input
        type="text"
        placeholder="Ini adalah judul..."
        value={title}
        onChange={handleTitleChange}
      />
      <div className="note-input__title__char-limit">
        Sisa karakter: {charLimit}
      </div>
      <textarea
        placeholder="Tulis catatanmu di sini..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Buat</button>
    </form>
  );
}
