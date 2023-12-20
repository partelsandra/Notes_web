import React, { useState, useEffect } from 'react';
import NoteEditor from '../components/notes/NoteEditor';
import NoteList from '../components/notes/NoteList';
import '../styles/Notes.css';

function NotesPage() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('/notes/all', { // Corrected endpoint
                    method: 'GET',
                    credentials: 'include', // Necessary for cookies (session)
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched notes:', data.notes);
                    setNotes(data.notes || []); // Fallback to an empty array if no notes
                } else {
                    console.error('Failed to fetch notes:', response.statusText);
                }
            } catch (error) {
                console.error('There was an error fetching the notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const handleAddNote = (newNote) => {
        setNotes(prevNotes => {
            // Assuming colors are based on index, modify as needed for your use case
            const colorIndex = prevNotes.length % 4; // Adjust the modulus for the number of colors
            const colorClasses = ['note-purple', 'note-red', 'note-green', 'note-yellow']; // Class names for the colors
            const noteWithColor = { ...newNote, colorClass: colorClasses[colorIndex] };
            const newNotesArray = [...prevNotes, noteWithColor]; // This is your new array of notes
            console.log('Updated notes:', newNotesArray); // Log the new array
            return newNotesArray; // Return the new array to update the state
        });
    };



    return (
        <div className="notes-page">
            <NoteEditor onAddNote={handleAddNote} />
            <NoteList notes={notes} onSelectNote={(note) => console.log('Selected note:', note)} />
        </div>
    );
}

export default NotesPage;
