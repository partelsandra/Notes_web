import React, { useState } from 'react';
import '../../styles/Notes.css';

function NoteEditor({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (submitting) return;
        setSubmitting(true);

        try {
            await onAddNote({ title, content }); // Use onAddNote from NotesPage
            setTitle(''); // Reset the title
            setContent(''); // Reset the content
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