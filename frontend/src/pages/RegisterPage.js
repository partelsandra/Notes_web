import React from 'react';
import Register from '../components/auth/Register'; // Adjust the path as needed

function RegisterPage() {
    // Implement any additional logic or state here if necessary

    return (
        <Register onRegister={(data) => {
            console.log('Registration successful', data);
            // Redirect to login or another page
        }} />
    );
}

export default RegisterPage;
