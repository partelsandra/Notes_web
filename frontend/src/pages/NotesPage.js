import React, { useState, useEffect } from 'react';
import NoteEditor from '../components/notes/NoteEditor';
import NoteList from '../components/notes/NoteList';
import '../styles/Notes.css';

function NotesPage() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('/notes/all', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched notes:', data.notes);
                    setNotes(data.notes || []);
                } else {
                    console.error('Failed to fetch notes:', response.statusText);
                }
            } catch (error) {
                console.error('There was an error fetching the notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const handleAddNote = async (newNoteData) => {
        try {
            const response = await fetch('/notes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNoteData),
                credentials: 'include',
            });

            if (response.ok) {
                const newNote = await response.json();
                setNotes((prevNotes) => [
                    ...prevNotes,
                    { ...newNote.newNote, colorClass: newNote.newNote.colorClass }
                ]);
            } else {
                console.error('Failed to create a new note:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating a new note:', error);
        }
    };


    return (
        <div className="notes-page">
            <NoteEditor onAddNote={handleAddNote} />
            <NoteList notes={notes} onSelectNote={(note) => console.log('Selected note:', note)} />
        </div>
    );
}

export default NotesPage;
