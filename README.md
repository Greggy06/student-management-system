# Student Management System (MERN Stack)

A full-stack CRUD (Create, Read, Update, Delete) web application for managing student records, built with **MongoDB**, **Express**, **React**, and **Node.js**.

## Features

- **View Students:** Displays all registered students in a clean, responsive table.
- **Add Student:** Add new student records with name, email, and age validation.
- **Edit Student:** Update existing student details seamlessly.
- **Delete Student:** Remove student records with a confirmation prompt.
- **Cloud Database:** Persists data in real time using MongoDB Atlas.

## Tech Stack

- **Frontend:** React (Vite), React Router DOM, Axios, Custom CSS
- **Backend:** Node.js, Express.js, CORS, Dotenv
- **Database:** MongoDB Atlas & Mongoose

## Project Structure

```text
student-mamnagement-system/
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── student-management/
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) installed on your machine
- A free [MongoDB Atlas](https://mongodb.com) account and cluster

### 1. Clone the Repository

```bash
git clone https://github.com
cd student-mamnagement-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add your MongoDB Atlas connection string:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the backend server:

```bash
npm run dev
```

The backend API will run on `http://localhost:5000`.

### 3. Frontend Setup

Open a new terminal window and run:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/student/get` | Retrieve all students |
| `POST` | `/student/add` | Add a new student |
| `PUT` | `/student/update/:id` | Update a student by ID |
| `DELETE` | `/student/delete/:id` | Delete a student by ID |
