Agri Clime App 🌱

A full-stack web application for farmers to log in, check daily weather updates, and plan farming activities. Built with React, Node.js, Express, and MongoDB Atlas.

Features

User authentication (JWT) – login/register

Daily weather updates (API integration)

Farming activity planner (CRUD)

Interactive Leaflet map

Responsive design

Plain CSS styling (green buttons, grey background, rounded inputs)

	
Folder Structure
crop-calendar/
├─ backend/
│  ├─ models/          # MongoDB schemas
│  ├─ routes/          # Express routes (auth, weather, activity)
│  ├─ controllers/     # Optional: controllers for routes
│  ├─ .gitignore
│  ├─ package.json
│  ├─ server.js
│  └─ .env.example
├─ frontend/
│  ├─ src/
│  │  ├─ components/   # Header, Footer, Map
│  │  ├─ pages/        # Login, Register, Dashboard
│  │  ├─ api.js        # Axios instance
│  │  ├─ styles.css
│  │  └─ main.jsx
│  ├─ .gitignore
│  ├─ package.json
│  └─ vite.config.js
├─ .gitignore          # root .gitignore
└─ README.md

Getting Started Locally
1️⃣ Backend

Navigate to backend:

cd backend


Install dependencies:

npm install


Create .env file (based on .env.example):

MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5000


Start backend server:

npm start


Server runs at http://localhost:5000

2️⃣ Frontend

Navigate to frontend:

cd frontend


Install dependencies:

npm install


Create .env file:

VITE_API_URL=http://localhost:5000


Start frontend:

npm run dev


Frontend runs at http://localhost:5173

3️⃣ Connecting Frontend & Backend

Frontend uses api.js (Axios) to call backend routes.

JWT token is stored in localStorage.

Ensure VITE_API_URL points to backend URL (localhost for local, Railway URL for production).

Deployment
Backend → Railway

Push backend folder to GitHub.

Create a new Railway project → Deploy from GitHub.

Set environment variables on Railway:

MONGO_URI=<your MongoDB Atlas URI>
JWT_SECRET=<your JWT secret>
PORT=5000


Deploy and copy Railway URL.

Frontend → Vercel

Push frontend folder to GitHub.

Create a new Vercel project → Import GitHub repo.

Set environment variable on Vercel:

VITE_API_URL=<your Railway backend URL>


Deploy. Frontend will connect to backend automatically.

Environment Variables Example
backend/.env.example
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5000

frontend/.env.example
VITE_API_URL=http://localhost:5000

Git Ignore

Both backend and frontend have separate node_modules ignored.

Root .gitignore includes .env, dist/, .vite/, logs, and OS files.

Acknowledgements

React

Vite

Express

MongoDB Atlas

Leaflet

project url : https://crop-calendar-api.vercel.app/

This README is ready to use and will guide anyone to run the project locally and deploy it to production.