# User-specific TODOs List

A web application project for managing tasks with user authentication is built as part of the Web Software Development (WSD) course.

## Overview

This project is designed to handle user authentication, manage sessions, and allow users to create, view, update, and delete tasks. It also includes middleware for security and session management, and it utilizes HTML templates to create an intuitive user interface.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [File Descriptions](#file-descriptions)

## Getting Started

To set up this project locally, clone the repository and install the required dependencies. Follow the steps below:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todos-list.git
    cd todos-list
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    node app-run.js
    ```

4. Open your browser and go to `http://localhost:8000` to view the app.

## Folder Structure

```
project-name/
├── templates/                 # HTML templates for the user interface
├── app-run.js                 # Main entry point for running the application
├── app.js                     # Sets up Express and middleware
├── authController.js          # Handles authentication logic
├── mainController.js          # Main application logic and routing
├── middlewares.js             # Custom middleware functions
├── sessionService.js          # Manages session handling
├── todoController.js          # Task management controller
├── todoService.js             # Service layer for task logic
└── userService.js             # Service layer for user management
```

## Features

- User Authentication: Register and log in with secure password hashing.
- Task Management: Create, read, update, and delete tasks.
- Session Management: Persistent user sessions with session-based authentication.
- Modular Architecture: Separation of concerns with controllers, services, and middleware.
- Responsive UI/UX: HTML templates are designed for user-friendly interaction.

## File Descriptions

- app-run.js: Initializes and runs the application.
- app.js: Configures and sets up routes.
- authController.js: Handles all user authentication processes like login and registration.
- mainController.js: Manages primary routing and main application logic.
- middlewares.js: Contains custom middleware for session and error handling.
- sessionService.js: Provides functions for managing sessions and user state.
- todoController.js: Manages task-related actions, interacting with the `todoService.js`.
- todoService.js: Provides functions for task management.
- userService.js: Handles user-specific logic and database interactions.
