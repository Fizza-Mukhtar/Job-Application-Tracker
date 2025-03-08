# Job Application Tracker

## Description
Job Application Tracker is a web application that helps users manage and track their job applications. It allows users to add, edit, and delete job applications, providing an organized way to stay on top of their job search.

## Features
- Add, update, and delete job applications
- Track application status (Applied, Interview, Offer, Rejected, etc.)
- User authentication and secure login system
- Responsive and user-friendly UI

## Tech Stack
### Frontend:
- React.js
- Bootstrap (for styling)
- React Router (for navigation)

### Backend:
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM for MongoDB)
- JWT (for authentication)
- bcrypt.js (for password hashing)

## Installation
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
```

### 2. Install Dependencies
#### Install backend dependencies:
```sh
cd backend
npm install
```
#### Install frontend dependencies:
```sh
cd ../frontend
npm install
```

## Usage
### 1. Start the Backend Server
```sh
cd backend
npm run dev
```

### 2. Start the Frontend Server
Open a new terminal and run:
```sh
cd frontend
npm start
```

### 3. Open in Browser
Go to: [http://localhost:3000](http://localhost:3000)

## Environment Variables
Create a `.env` file in the `backend` folder and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Folder Structure
```
job-tracker/
├── backend/          # Node.js & Express backend
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   ├── server.js     # Main server file
│   ├── .env          # Environment variables
│   ├── package.json  # Backend dependencies
│
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── App.js       # Main App component
│   │   ├── index.js     # Entry point
│   ├── package.json     # Frontend dependencies
│
├── README.md         # Project documentation
```

## License
This project is open-source and available under the MIT License.

  
