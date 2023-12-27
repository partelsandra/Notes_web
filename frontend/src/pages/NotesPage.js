import React, { useState, useEffect } from 'react';
import NoteEditor from '../components/notes/NoteEditor';
import NoteList from '../components/notes/NoteList';
import '../styles/Notes.css';

function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track if a submission is in progress

    // Function to fetch notes from the backend
    const fetchNotes = async () => {
        try {
            const response = await fetch('/notes/all', {
                method: 'GET',
                credentials: 'include',
            });
            if (response.ok) {
                const data = await response.json();
                setNotes(data.notes || []);
            } else {
                console.error('Failed to fetch notes:', response.statusText);
            }
        } catch (error) {
            console.error('There was an error fetching the notes:', error);
        }
    };

    useEffect(() => {
        fetchNotes(); // Fetch notes on component mount
    }, []); // Ensures this effect runs only once after the initial render

    const handleAddNote = async (newNoteData) => {
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);

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
                await fetchNotes(); // Re-fetch notes from backend to update the state
            } else {
                console.error('Failed to create a new note:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating a new note:', error);
        } finally {
            setIsSubmitting(false); // Reset the submission status
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
