# Keeper App

This Keeper App project is based on Angular Yu's **2024 Complete Web Development Course** on Udemy.

While the original source code allows adding and deleting notes on a temporary page, this project enhances the functionality by enabling note editing and making the data persistent using PostgreSQL.

This repository contains two parts:

- **Frontend** (React)
- **Backend** (Node.js/Express with PostgreSQL)

---

## Frontend Page

![screenshot_keeper_app]([https://github.com/user-attachments/assets/bbf0a7e4-0dd6-40a0-a251-6a6b1e7bbab7](https://github.com/Shirleyu98/Keeper-App-FullEnd/blob/main/screenshot_keeper_app.png))


---

## How to Start

### 1. Set up the Backend (Server)

- Navigate to the `server` directory:
    
    `cd server`
    
- Install the backend dependencies:
    
    `npm install`
    
- Copy the `.env.example` file to `.env` and update the values with your database credentials:
    
```
    DATABASE_URL=postgresql://<your-username>:<your-password>@<your-host>:<your-port>/<your-database-name>
```
    
- Start the server:

    `node index.js`
    
    Alternatively, if you have **Nodemon** installed, you can run:
    
    `nodemon index.js`
    

---

### 2. Set up the Frontend (React)

- Navigate to the `frontend` directory:
    
    `cd frontend`
    
- Install the frontend dependencies:
    
    `npm install`
    
- Copy the `.env.example` file to `.env` and update the `REACT_APP_API_BASE_URL` with the backend server’s URL:
    
    `REACT_APP_API_BASE_URL=http://localhost:5000`
    
- Start the frontend development server:
    
    `npm run dev`
    

---

Now, you can open your browser and visit `http://localhost:5173 (or the appropriate port if your app configured a different one) to use the app.
