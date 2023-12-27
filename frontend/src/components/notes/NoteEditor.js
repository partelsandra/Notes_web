import React, { useState } from 'react';
import '../../styles/Notes.css';

function NoteEditor({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (submitting) return; // Prevent multiple submissions
        setSubmitting(true);

        try {
            const response = await fetch('/notes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for session-based auth
                body: JSON.stringify({ title, content }),
            });
            if (response.ok) {
                const newNote = await response.json();
                onAddNote(newNote.newNote); // Update the state with the new note
                setTitle(''); // Reset the title
                setContent(''); // Reset the content
            } else {
                console.error('Failed to add note', response.statusText);
            }
        } catch (error) {
            console.error('There was an error adding the note:', error);
        } finally {
            setSubmitting(false); // Reset the submitting state
        }
    };

    return (
        <div className="note-editor">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Heading"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Text"
                    required
                />
                <button type="submit" disabled={submitting}>ADD</button>
            </form>
        </div>
    );
}

export default NoteEditor;
