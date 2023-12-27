import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/NoteDetail.css'; // Ensure this path is correct

function NoteDetailView() {
    const [note, setNote] = useState(null);
    const { id } = useParams(); // Retrieve the ID from the URL
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the specific note details using the note ID from the URL parameters.
        const fetchNote = async () => {
            try {
                const response = await fetch(`/api/notes/${id}`, {
                    method: 'GET',
                    credentials: 'include', // For session cookies, if applicable
                });
                if (response.ok) {
                    const data = await response.json();
                    setNote(data); // The response should match the expected note object structure.
                } else {
                    console.error('Failed to fetch note:', response.statusText);
                    navigate('/notes'); // Redirect back to notes list on error.
                }
            } catch (error) {
                console.error('There was an error fetching the note details:', error);
                navigate('/notes'); // Redirect back to notes list on error.
            }
        };

        fetchNote();
    }, [id, navigate]);

    const handleDelete = async () => {
        // Handle the delete action.
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: 'DELETE',
                credentials: 'include', // For session cookies, if applicable
            });
            if (response.ok) {
                navigate('/notes'); // Redirect back to notes list after deletion.
            } else {
                console.error('Failed to delete note:', response.statusText);
            }
        } catch (error) {
            console.error('There was an error deleting the note:', error);
        }
    };

    if (!note) {
        // Show loading state until the note is fetched.
        return <div>Loading note details...</div>;
    }

    return (
        <div className="note-detail-view">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => navigate(`/notes/edit/${note.id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default NoteDetailView;
