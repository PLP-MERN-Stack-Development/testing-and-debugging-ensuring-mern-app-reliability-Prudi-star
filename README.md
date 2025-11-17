# MERN Bug Tracker

A full-stack MERN application to track bugs in projects, with testing and debugging best practices implemented. Users can create, view, update, and delete bug reports.

---

**Project Structure**
```bash
mern-bug-tracker/ 
├── client/                 # React frontend 
│  ├── src/ 
│   │   ├── components/     # React components (BugForm, BugList) 
│   │   └── tests/          # Frontend tests 

├── server/                 # Express backend 
│   ├── src/ 
│   │   ├── controllers/    # Route logic 
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes 
│   │   └── middleware/     # Error handling 
│   └── tests/              # Backend tests 
├── package.json            # Project dependencies 
└── README.md
```
---

## **Installation**

1. Clone the repository:

```bash
git clone <your-repo-url>
cd mern-bug-tracker
```
2. Install backend dependencies:


```bash
cd server
npm install
```
3. Install frontend dependencies:


```bash
cd ../client
npm install
```
4. Create a .env file in server folder:


```bash
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

---

Running the Application

Backend (server):

```bash
cd server
npm run dev
```
Frontend (client):

```bash
cd client
npm start
```
Open the frontend in your browser: http://localhost:3000



---

Application Features

Report new bugs via a form

View a list of all bugs

Update bug statuses: open, in-progress, resolved

Delete bugs



---

Testing

Backend

Unit tests for helper functions

Integration tests for API endpoints

```bash
cd server
npm test
```
Frontend

Unit tests for React components

Integration tests for component interactions

```bash
cd client
npm test
```



---

Debugging Techniques

Server-side

console.log() for inspecting values

Node.js Inspector: node --inspect server.js


Frontend

Chrome DevTools for network requests and component state

React Developer Tools for component inspection

Error Boundaries to catch runtime errors in React components




---

Error Handling

Backend: Express error-handling middleware to return JSON errors

Frontend: React Error Boundaries to display fallback UI for crashed components



---

Testing Approach

Unit Tests: Test individual functions and components

Integration Tests: Test API endpoints and UI interaction flows

Coverage: Ensures that critical paths in both backend and frontend are tested
