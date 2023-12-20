import React from 'react';
import '../../styles/Notes.css'; // Assuming Notes.css will be in the styles folder
import { useNavigate } from 'react-router-dom';

function NoteList({ notes, onSelectNote }) {
    const navigate = useNavigate();

    const handleSelectNote = (noteId) => {
        navigate(`/notes/${noteId}`);
    };

    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <div key={note.id} className={`note ${note.colorClass}`} onClick={() => handleSelectNote(note.id)}>
                    {note.title}
                </div>
            ))}
        </div>
    );
}

export default NoteList;
