# Notebook Web Application

This is a web-based notebook application where users can register, log in, and manage their notes. The backend is built on the Node.js framework, and the frontend is created with React.

## Features

- User registration and authentication
- Add, edit, and delete notes
- Responsive design for desktop and mobile usage

## User Stories

- As a new user, I want to for an account so that I can securely store and manage my notes.
- As a returning user, I want to sign in to my account to access my notes.
- As a user, I want to add new notes with a title and body so that I can keep track of my thoughts and tasks.
- As a user, I want to edit my notes in order to update the content or correct mistakes.
- As a user, I want to delete notes that are no longer needed to keep my notebook organized.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (Node Package Manager)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository to your local machine:
2. Navigate to the project directory:
3. Install the required packages:
4. Start the development server:

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

This section provides a general guide on how to deploy the Notebook Web Application to a live system. The following steps assume that you have already built the application with `npm run build`.

### Pre-requisites

- A server with Node.js installed.
- MySQL Server setup with the necessary database and tables created.
- Environment variables for database connection, and any other sensitive information.

### Steps

1. Upload the build directory to your server. This can be done via FTP, SSH, or any method you prefer.

2. On the server, navigate to the uploaded directory and install production dependencies:
   ```bash
   npm install --only=production



## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - The backend framework
- [MySQL](https://www.mysql.com/) - Database platform

## Screenshots

Include screenshots of your application in action here.