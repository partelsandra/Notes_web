import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotesPage from './pages/NotesPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes> {/* Use Routes */}
                    <Route path="/login" element={<LoginPage />} /> {/* Use element prop */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;