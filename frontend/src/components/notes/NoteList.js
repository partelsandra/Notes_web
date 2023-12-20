import React from 'react';
import '../../styles/Notes.css'; // Assuming Notes.css will be in the styles folder
import { useNavigate } from 'react-router-dom';

function NoteList({ notes }) {
    const navigate = useNavigate();

    const handleSelectNote = (noteId) => {
        navigate(`/notes/${noteId}`); // Redirect to the note detail page
    };
    console.log('Rendering notes:', notes);
    return (
        <div className="note-list">
            {notes.map((note, index) => {
                // Log the note ID and title to ensure they are unique and defined
                console.log(`Rendering note - ID: ${note.id}, Title: ${note.title}`); //remove after fixing error, this console.log gives out unidentified title and content.

                const colorClasses = ['note-purple', 'note-red', 'note-green', 'note-yellow'];
                const colorClass = colorClasses[index % colorClasses.length];

                return (
                    <div key={note.id} className={`note ${colorClass}`} onClick={() => handleSelectNote(note.id)}>
                        {note.title}
                    </div>
                );
            })}
        </div>
    );
}

export default NoteList;
