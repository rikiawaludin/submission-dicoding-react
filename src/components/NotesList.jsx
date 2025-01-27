import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <>
      <section>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {activeNotes.length > 0 ? (
            activeNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </section>

      <section>
        <h2>Arsip</h2>
        <div className="notes-list">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </section>
    </>
  );
}
